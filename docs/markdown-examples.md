# Markdown Extension Examples {#More}

This page demonstrates some of the built-in markdown extensions provided by VitePress.

## Syntax Highlighting

VitePress provides Syntax Highlighting powered by [Shikiji](https://github.com/antfu/shikiji), with additional features like line-highlighting:

```md
.
|-- README.md
|-- babel.config.js
|-- package-lock.json
|-- package.json
|-- public
| |-- favicon.ico
| `-- index.html |-- src | |-- App.vue | |-- assets | | `-- logo.png
| |-- components
| | |-- DataTable
| | | |-- DataTableColumn.vue
| | | |-- README.md
| | | |-- dataTableMixin.js
| | | |-- index.vue
| | | |-- props.js
| | | `-- utils.js | | |-- EditTable | | | |-- index.vue | | | |-- index_old.vue | | | |-- utils | | | | `-- index.js
| | | `-- widgets | | | |-- index.js | | | |-- props.js | | | `-- widgetInput.vue
| | |-- ReportList
| | | `-- index.vue | | `-- SearchSelect
| | `-- index.vue | |-- main.js | |-- mixins | | |-- dataTableMixin.js | | `-- searchFormMixin.js
| |-- mock
| | |-- a
| | | `-- a.js | | |-- b | | | `-- b.js
| | `-- index.js | |-- router | | `-- index.js
| |-- store
| | `-- index.js | |-- utils | | |-- http.js | | `-- util.js
| `-- views | |-- About.vue | |-- DataTable.vue | `-- Home.vue
|-- vue.config.js
`-- yarn.lock
```

**Input**

````md
```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```
````

**Output**

```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

## Custom Containers

**Input**

```md
::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::
```

**Output**

::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::

## More

Check out the documentation for the [full list of markdown extensions](https://vitepress.dev/guide/markdown).
