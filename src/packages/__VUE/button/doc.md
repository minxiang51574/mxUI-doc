# Button 按钮

### 介绍

按钮用于触发一个操作，如提交表单。


### 按钮类型

按钮支持 `default`、`primary` 两种种类型，默认为 `default`。

:::demo

```html
<template>
  <k-button type="primary">主要按钮</k-button>
  <k-button type="default">默认按钮</k-button>
</template>
```

:::

### 朴素按钮

通过 `plain` 属性将按钮设置为朴素按钮，朴素按钮的文字为按钮颜色，背景为白色。

:::demo

```html
<template>
  <k-button plain type="primary">朴素按钮</k-button>
  <k-button plain type="default">朴素按钮</k-button>
</template>
```

:::

### 禁用状态

通过 `disabled` 属性来禁用按钮，禁用状态下按钮不可点击。

:::demo

```html
<template>
  <k-button disabled type="primary">禁用状态</k-button>
  <k-button plain disabled type="primary">禁用状态</k-button>
</template>
```

:::

### 按钮形状

通过 `shape` 属性设置按钮形状，支持圆形、方形按钮，默认为圆形。

:::demo

```html
<template>
  <k-button shape="square" type="primary">方形按钮</k-button>
  <k-button shape="round" type="default">圆形按钮</k-button>
</template>
```

:::

### 加载状态

:::demo

```html
<template>
  <k-button loading type="primary"></k-button>
  <k-button loading type="primary">222</k-button>
  <k-button :loading="isLoading" type="primary" @click="changeLoading">Click me!</k-button>
</template>

<script>
  import { ref } from 'vue';
  export default {
    setup(props) {
      let isLoading = ref(false);
      const changeLoading = () => {
        isLoading.value = true;
        setTimeout(() => {
          isLoading.value = false;
        }, 3000);
      };
      return {
        isLoading,
        changeLoading
      };
    }
  };
</script>
```

:::

### 图标按钮

:::demo

```html
<template>
  <k-button shape="square" plain type="primary" icon="star-fill"></k-button>
  <k-button shape="square" type="primary" icon="star">收藏</k-button>
</template>
```

:::

### 按钮尺寸

支持 `large`、`normal`、`small` 三种尺寸，默认为 `normal`。

:::demo

```html
<template>
  <k-button size="large" type="primary">大号按钮</k-button>
  <k-button type="primary">普通按钮</k-button>
  <k-button size="small" type="primary">小型按钮</k-button>
</template>
```

:::

### 块级元素

按钮在默认情况下为行内块级元素，通过 `block` 属性可以将按钮的元素类型设置为块级元素，常用来实现通栏按钮。

:::demo

```html
<template>
  <k-button block type="primary">块级元素</k-button>
</template>
```

:::


:::

## API

### Props

| 参数     | 说明                           | 类型    | 默认值    |
| -------- | ------------------------------ | ------- | --------- |
| type     | 类型，可选值为 `primary`       | String  | `default` |
| size     | 尺寸，可选值为 `large` `small` | String  | `normal`  |
| shape    | 形状，可选值为 `square`        | String  | `round`   |
| plain    | 是否为朴素按钮                 | Boolean | `false`   |
| disabled | 是否禁用按钮                   | Boolean | `false`   |
| block    | 是否为块级元素                 | Boolean | `false`   |
| loading  | 按钮 loading 状态              | Boolean | `false`   |

### Events

| 事件名 | 说明           | 回调参数          |
| ------ | -------------- | ----------------- |
| click  | 点击按钮时触发 | event: MouseEvent |
