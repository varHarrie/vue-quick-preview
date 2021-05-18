import { App, Component, ComponentPublicInstance, createApp, h } from 'vue';
import QuickPreview from './QuickPreview.vue';

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $preview: typeof preview;
  }
}

type ViewerInstance = ComponentPublicInstance & { show: () => void };

function mount(RootComponent: Component, rootProps?: Record<string, unknown>) {
  const app = createApp(RootComponent, rootProps);
  const root = document.createElement('div');

  document.body.appendChild(root);

  return {
    root,
    instance: app.mount(root) as ViewerInstance,
    unmount() {
      app.unmount();
      root.parentElement?.removeChild(root);
    },
  };
}

function preview(el: HTMLImageElement): ViewerInstance {
  const viewer = mount({
    methods: {
      show() {
        this.$refs.preview.show(el);
      },
      hide() {
        this.$refs.preview.hide();
      },
    },
    render() {
      return h(QuickPreview, {
        ref: 'preview',
        onHidden: () => viewer.unmount(),
      });
    },
  });

  viewer.instance.show();
  return viewer.instance;
}

preview.install = (app: App) => {
  app.config.globalProperties.$preview = preview;
};

preview.QuickPreview = QuickPreview;

export default preview;
