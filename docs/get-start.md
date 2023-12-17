#### 首先

在 demo 容器中直接编写 vue 代码

:::demo

```vue
<template>
  <div>{{ title }}</div>
</template>
<script setup>
import { ref, defineComponent } from 'vue'
const title = ref('this is basic demo')
</script>
```

:::
