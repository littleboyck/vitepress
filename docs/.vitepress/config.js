import { defineConfig } from 'vitepress';
import { fileURLToPath, URL } from 'node:url';
import { demoPreviewPlugin } from '@vitepress-code-preview/plugin';
// https://vitepress.dev/reference/site-config
export default defineConfig({
  markdown: {
    config(md) {
      const docRoot = fileURLToPath(new URL('../', import.meta.url));
      md.use(demoPreviewPlugin, { docRoot });
    },
  },
  title: 'DataTable组件',
  description: 'Element-UI DataTable',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '开始', link: '/get-start' },
      { text: 'API', link: '/api' },
    ],

    sidebar: [
      {
        text: 'API',
        items: [
          { text: 'Markdown Examples1', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
        ],
      },
    ],

    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
    // ],
  },
});
