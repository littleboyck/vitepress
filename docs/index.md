---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "DataTable"
  text: "Element-ui组件"
  tagline: "基于Vue2+ElTable二次封装的DataTable组件"
  image:
    src: "vitepress-logo-large.webp"
  actions:
    - theme: brand
      text: 开始
      link: /get-start
    - theme: alt
      text: API
      link: /api

features:
  - title: Columns（数据配置方式）
    details: 支持：多级表头、自定义渲染函数、自定义插槽、复选框多选/单选
    icon: 🛠️
  - title: 多种数据源配置
    details: 支持：前端表格分页或Promise异步函数
    icon: 🌎
  - title: 复选框
    details: 支持分页后保存之前的复选框
    icon: ☑️
  - title: 分页
    details: 支持前端分页和后端分页（后端分页可在pagination配置中指定dataExpr, totalExpr）
    icon: 📟
  - title: 向上兼容ElTable
    details: 可以使用ElTable的所有配置  
    icon: 🔌
---

<style>
.clip {
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #bd34fe 30%, #41d1ff);
  --vp-home-hero-image-background-image: linear-gradient(-45deg, #bd34fe 50%, #47caff 50%);
  background: var(--vp-home-hero-name-background);
  -webkit-background-clip: text;
  background-clip: text;
  /* -webkit-text-fill-color: var(--vp-home-hero-name-color); */
}
</style>
