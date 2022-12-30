# Cell 单元格

### 介绍

列表项，可组成列表。


### 基础用法

:::demo

```html
<template>
  <k-cell title="我是标题" desc="描述文字"></k-cell>
  <k-cell title="我是标题" sub-title="副标题描述" desc="描述文字"></k-cell>
  <k-cell title="点击测试" @click="testClick"></k-cell>
  <k-cell title="圆角设置 0" round-radius="0"></k-cell>
</template>
<script>
  import { ref } from 'vue';
  import { Toast } from '@nutui/nutui';
  export default {
    setup() {
      const switchChecked = ref(true);
      const testClick = (event) => {
        Toast.text('点击事件');
      };
      return { testClick, switchChecked };
    }
  };
</script>
```

:::

### 尺寸设置 large

:::demo

```html
<template>
  <k-cell size="large" title="我是标题" desc="描述文字"></k-cell>
  <k-cell size="large" title="我是标题" sub-title="副标题描述" desc="描述文字"></k-cell>
</template>
```

:::

### 直接使用插槽

:::demo

```html
<template>
  <k-cell>
    <div>自定义内容</div>
  </k-cell>
</template>
```

:::



### 直接使用插槽(slot title)

:::demo

```html
<template>
  <k-cell desc="描述文字">
      <template v-slot:title>
        <span>Title <b style="color: red">1</b></span>
      </template>
  </k-cell>
</template>
```

:::

### 链接 | 分组用法

:::demo

```html
<template>
  <k-cell-group title="链接 | 分组用法" desc="使用 k-cell-group 支持 title desc slots">
    <k-cell title="链接" is-link></k-cell>
    <k-cell title="URL 跳转" desc="https://m.jd.com" is-link url="https://m.jd.com"></k-cell>
    <k-cell title="路由跳转 ’/‘ " to="/"></k-cell>
  </k-cell-group>
</template>
```

:::

### 自定义右侧箭头区域

:::demo

```html
<template>
  <k-cell-group title="自定义右侧箭头区域">
    <k-cell title="Switch">
      <template v-slot:link>
        <nut-switch v-model="switchChecked" />
      </template>
    </k-cell>
  </k-cell-group>
</template>
<script lang="ts">
  import { ref } from 'vue';
  export default {
    setup() {
      const testClick = (event: Event) => {
        console.log('点击事件');
      };
      const switchChecked = ref(true);
      return { testClick, switchChecked };
    }
  };
</script>
```



:::
### 垂直居中

通过 `center` 属性可以让 Cell 的左右内容都垂直居中。

:::demo

```html
<template>
  <k-cell center title="我是标题" sub-title="副标题描述" desc="描述文字"></k-cell>
</template>
```

:::

## API

### CellGroup Props

| 字段  | 说明     | 类型   | 默认值 |
|-------|----------|--------|--------|
| title | 分组标题 | String | -      |
| desc  | 分组描述 | String | -      |

### Cell Props

| 字段                    | 说明                                                                                           | 类型             | 默认值           |
|-------------------------|------------------------------------------------------------------------------------------------|------------------|------------------|
| title                   | 标题名称                                                                                       | String           | -                |
| sub-title               | 左侧副标题                                                                                     | String           | -                |
| desc                    | 右侧描述                                                                                       | String           | -                |
| is-link                 | 是否展示右侧箭头并开启点击反馈                                                                 | Boolean          | false            |
| round-radius            | 圆角半径                                                                                       | Number           | 6px              |
| url `小程序不支持`      | 点击后跳转的链接地址                                                                           | String           | -                |
| to `小程序不支持`       | 点击后跳转的目标路由对象，同 vue-router 的 [to 属性](https://router.vuejs.org/zh/api/#to) 属性 | String ｜ Object | -                |
| replace `小程序不支持`  | 是否在跳转时替换当前页面历史                                                                   | Boolean          | false            |
| center         | 是否使内容垂直居中                                                                             | Boolean          | false            |
| size           | 单元格大小，可选值为 `large`                                                                   | String           | -                |
| font-class-name | 自定义icon 字体基础类名                                                                        | string           | `nutui-iconfont` |
| class-prefix   | 自定义icon 类名前缀，用于使用自定义图标                                                        | string           | `k-icon`       |


### Cell Events

| 名称  | 说明     | 回调参数    |
|-------|----------|-------------|
| click | 点击事件 | event:Event |

### Cell Slots

| 名称            | 说明                  |
|-----------------|-----------------------|
| icon            | 自定义左侧`icon`区域  |
| default         | 自定义内容            |
| link            | 自定义右侧`link`区域  |
| title           | 自定义`title`标题区域 |

### CellGroup Slots

| 名称            | 说明                  |
|-----------------|-----------------------|
| title           | 自定义`title`标题区域 |
| desc            | 自定义`desc`描述区域  |
