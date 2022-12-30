<template>
  <div class="demo">
    <h2>{{ translate('basic') }}</h2>
    <k-cell :title="translate('title')" :desc="translate('desc')"></k-cell>
    <k-cell :title="translate('title')" :sub-title="translate('title1')" :desc="translate('desc')"></k-cell>
    <k-cell :title="translate('title3')" @click="testClick"></k-cell>
    <k-cell :title="translate('title4')" round-radius="0"></k-cell>

    <h2>{{ translate('title9') }}</h2>
    <k-cell size="large" :title="translate('title')" :desc="translate('desc')"></k-cell>
    <k-cell
      size="large"
      :title="translate('title')"
      :sub-title="translate('title1')"
      :desc="translate('desc')"
    ></k-cell>

    <h2>{{ translate('title2') }}</h2>

    <k-cell>
      <div>{{ translate('content') }}</div>
    </k-cell>

    <h2>{{ translate('title8') }}</h2>

    <k-cell :desc="translate('desc')">
      <template v-slot:title>
        <span>Title <b style="color: red">1</b></span>
      </template>
    </k-cell>

    <k-cell-group :title="translate('title5')" :desc="translate('desc1')">
      <k-cell :title="translate('link')" is-link></k-cell>
      <k-cell :title="translate('urlJump')" desc="https://jd.com" is-link url="https://jd.com"></k-cell>
      <k-cell :title="translate('routerJump')" to="/"></k-cell>
    </k-cell-group>

    <k-cell-group :title="translate('customRight')">
      <k-cell title="Switch">
        <template v-slot:link>
          <nut-switch v-model="switchChecked" />
        </template>
      </k-cell>
    </k-cell-group>

    <h2>{{ translate('title7') }}</h2>
    <k-cell center :title="translate('title')" :sub-title="translate('title1')" :desc="translate('desc')"></k-cell>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';
import { createComponent } from '@/packages/utils/create';
const { createDemo, translate } = createComponent('cell');
import { useTranslate } from '@/sites/assets/util/useTranslate';
const initTranslate = () =>
  useTranslate({
    'zh-CN': {
      basic: '基本用法',
      desc: '描述文字',
      desc1: '使用 k-cell-group 支持 title desc slots',
      title: '我是标题',
      title1: '副标题描述',
      title2: '直接使用插槽(slot)',
      title3: '点击测试',
      title4: '圆角设置 0',
      title5: '链接 | 分组用法',
      title6: '只展示 desc ，可通过 desc-text-align 调整内容位置',
      title7: '垂直居中',
      title8: '直接使用插槽(slot title)',
      title9: '尺寸设置 large',
      link: '链接',
      urlJump: 'URL 跳转',
      routerJump: '路由跳转 ’/‘ ',
      name: '姓名',
      image: '图片',
      content: '自定义内容',
      customRight: '自定义右侧箭头区域',
      customLeftIcon: '自定义左侧 Icon 区域',
      displayIcon: '展示图标'
    },
    'en-US': {
      basic: 'Basic Usage',
      desc: 'Description',
      desc1: 'Usage k-cell-group support title desc slots',
      title: 'Title',
      title1: 'Subtitle Description',
      title2: 'Use Slots',
      title3: 'Click Test',
      title4: 'Round Radius 0',
      title5: 'Link | CellGroup Usage',
      title6: 'Only display desc , you can adjust the content position through desc-text-align',
      title7: 'Vertical Center',
      title8: 'Use Slots title',
      title9: 'Size setting large',
      link: 'Link',
      urlJump: 'URL Jump',
      routerJump: 'Router Jump ’/‘ ',
      name: 'Name',
      image: 'Image',
      content: 'Content',
      customRight: 'Customize the right arrow area',
      customLeftIcon: 'Customize the left Icon area',
      displayIcon: 'Display Icon'
    }
  });
export default createDemo({
  setup() {
    initTranslate();
    const testClick = (event: Event) => {
      console.log('Click Test');
    };
    const switchChecked = ref(true);
    return { testClick, switchChecked, translate };
  }
});
</script>

<style lang="scss" scoped></style>
