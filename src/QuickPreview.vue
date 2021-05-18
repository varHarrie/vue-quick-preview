<template>
  <transition
    :duration="300"
    @enter="enter"
    @afterEnter="shown"
    @leave="leave"
    @afterLeave="hidden"
  >
    <div v-if="state.visible" class="vue-quick-preview" :style="viewerStyle" @mouseup="hide">
      <img class="vue-quick-preview__image" :style="imageStyle" :src="src" alt="Image" />
    </div>
  </transition>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  onMounted,
  onUnmounted,
  reactive,
  nextTick,
  CSSProperties,
} from 'vue';
import { clamp, doubleRaf, getDimension, Dimension, getPosition, Vector } from './utils';

type QuickPreviewState = {
  /** 当前图片元素 */
  el?: HTMLImageElement;
  /** 是否显示 */
  visible: boolean;
  /** 是否正在进行过度动画 */
  animating: boolean;
  /** 缓存body元素overflow样式 */
  bodyOverflow: string;
  /** 维度信息 */
  dimension?: Dimension;
  /** 是否正在拖拽 */
  dragging: boolean;
  /** 拖拽起点 */
  dragPoint: Vector;
};

export default defineComponent({
  emits: ['hidden'],
  setup(props, ctx) {
    const state = reactive<QuickPreviewState>({
      el: undefined,
      visible: false,
      animating: true,
      bodyOverflow: '',
      dimension: undefined,
      dragging: false,
      dragPoint: { x: 0, y: 0 },
    });

    const src = computed(() => state.el?.src || '');

    const viewerStyle: CSSProperties = {
      position: 'fixed',
      zIndex: 99,
      top: 0,
      left: 0,
      height: '100%',
      width: '100%',
      cursor: 'move',
      transition: 'background-color 300ms',
    };

    const imageStyle = computed(() => {
      if (!state.dimension) return undefined;

      const {
        scale,
        size: { width, height },
        position: { x: left, y: top },
        translate: { x, y },
        offset: { x: oX, y: oY },
      } = state.dimension;

      return {
        position: 'absolute',
        userSelect: 'none',
        transformOrigin: 'center',
        willChange: 'transform, top, left',
        width: `${width}px`,
        height: `${height}px`,
        top: `${top}px`,
        left: `${left}px`,
        transform: `translate3d(${x + oX}px, ${y + oY}px, 0) scale(${scale})`,
        transition: state.animating ? 'transform 0.3s' : undefined,
      } as CSSProperties;
    });

    const enter = (el: Element) => {
      doubleRaf(() => {
        (el as HTMLDivElement).style.backgroundColor = 'rgba(0, 0, 0, 0.6)';
      });
    };

    const leave = (el: Element) => {
      (el as HTMLDivElement).style.backgroundColor = 'rgba(0, 0, 0, 0)';
    };

    const show = (el: HTMLImageElement) => {
      if (!el || el.tagName !== 'IMG' || !el.src) return;

      state.bodyOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';

      state.el = el;
      state.dimension = getDimension(el);
      state.visible = true;
      state.animating = true;

      el.style.opacity = '0';

      doubleRaf(() => {
        if (!state.dimension) return;

        const { innerWidth, innerHeight } = window;
        const { size, position } = state.dimension;

        state.dimension.scale = 1;
        state.dimension.translate = {
          x: (innerWidth - size.width) / 2 - position.x,
          y: (innerHeight - size.height) / 2 - position.y,
        };
      });
    };

    const shown = () => {
      state.animating = false;
    };

    const hide = () => {
      if (!state.el) return;

      state.animating = true;
      state.dimension = getDimension(state.el);

      nextTick(() => {
        state.visible = false;
      });
    };

    const hidden = () => {
      if (!state.el) return;

      state.animating = false;
      state.el.style.opacity = '';
      document.body.style.overflow = state.bodyOverflow;

      ctx.emit('hidden');
    };

    const offset = (value: Vector) => {
      if (!state.dimension) return;
      state.dimension.offset = value;
    };

    const applyOffset = () => {
      if (!state.dimension) return;
      const { offset, translate, position, size } = state.dimension;

      const x = clamp(
        translate.x + offset.x,
        -position.x,
        window.innerWidth - size.width - position.x,
      );

      const y = clamp(
        translate.y + offset.y,
        -position.y,
        window.innerHeight - size.height - position.y,
      );

      state.dimension.translate = { x, y };
      state.dimension.offset = { x: 0, y: 0 };
    };

    const onDragStart = (e: MouseEvent | TouchEvent) => {
      state.animating = false;
      state.dragging = false;

      if (!('touches' in e)) e.preventDefault();
      window.getSelection()?.removeAllRanges();

      state.dragPoint = getPosition(e);

      document.addEventListener('mousemove', onDragging);
      document.addEventListener('mouseup', onDragEnd, true);
      document.addEventListener('touchmove', onDragging);
      document.addEventListener('touchend', onDragEnd);
    };

    const onDragEnd = (e: MouseEvent | TouchEvent) => {
      if (state.dragging) {
        e.stopImmediatePropagation();
        e.stopPropagation();
      }

      applyOffset();

      document.removeEventListener('mousemove', onDragging);
      document.removeEventListener('mouseup', onDragEnd, true);
      document.removeEventListener('touchmove', onDragging);
      document.removeEventListener('touchend', onDragEnd);

      nextTick(() => {
        state.animating = true;
      });
    };

    const onDragging = (e: MouseEvent | TouchEvent) => {
      state.dragging = true;
      const point = getPosition(e);

      offset({
        x: point.x - state.dragPoint.x,
        y: point.y - state.dragPoint.y,
      });
    };

    onMounted(() => {
      document.addEventListener('mousedown', onDragStart);
      document.addEventListener('touchstart', onDragStart);
    });

    onUnmounted(() => {
      document.removeEventListener('mousedown', onDragStart);
      document.removeEventListener('mousemove', onDragging);
      document.removeEventListener('mouseup', onDragEnd);
      document.removeEventListener('touchstart', onDragStart);
      document.removeEventListener('touchmove', onDragging);
      document.removeEventListener('touchend', onDragEnd);
    });

    return { state, src, viewerStyle, imageStyle, enter, leave, show, shown, hide, hidden };
  },
});
</script>
