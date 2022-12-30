<template>
  <div class="demo">
    <h2>{{ translate('basic') }}</h2>
    <nut-cell>
      <k-icon name="icon-a-24_loading3fanbai"></k-icon>
      <k-icon name="icon-a-48pxchenggong"></k-icon>
    </nut-cell>
    <h2>{{ translate('iconColor') }}</h2>
    <nut-cell>
      <k-icon name="dongdong" color="#fa2c19"></k-icon>
      <k-icon name="dongdong" color="#64b578"></k-icon>
      <k-icon name="JD" color="#fa2c19"></k-icon>
    </nut-cell>

    <h2>{{ translate('iconSize') }}</h2>
    <nut-cell>
      <k-icon name="dongdong"></k-icon>
      <k-icon name="dongdong" size="24"></k-icon>
      <k-icon name="dongdong" size="26"></k-icon>
    </nut-cell>
  </div>
</template>

<script lang="ts">
import { useTranslate, currentLang } from '@/sites/assets/util/useTranslate';
const initTranslate = () =>
  useTranslate({
    'zh-CN': {
      basic: '基本用法',
      iconColor: '图标颜色',
      iconSize: '图标大小',
      copyToast: '复制成功'
    },
    'en-US': {
      basic: 'Basic Usage',
      iconColor: 'Icon Color',
      iconSize: 'Icon Size',
      copyToast: 'Copied successfully'
    }
  });
// import icons from '@/packages/styles/font/config.json';
import { createComponent } from '@/packages/utils/create';
const { createDemo, translate } = createComponent('icon');
import { Toast } from '@/packages/nutui.vue';
export default createDemo({
  props: {},
  setup() {
    initTranslate();
    const copyTag = (name: string) => {
      const text = `<k-icon name="${name}"></k-icon>`;
      const displayText = `&lt;k-icon name="${name}"&gt;&lt;/k-icon&gt;`;
      const input = document.createElement('input');
      document.body.appendChild(input);
      input.setAttribute('value', text);
      input.select();
      if (document.execCommand('copy')) {
        document.execCommand('copy');
        Toast.text(`${translate('copyToast')}: <br/>${displayText}`);
      }
      document.body.removeChild(input);
    };
    return { translate, currentLang, copyTag };
  }
});
</script>

<style lang="scss" scoped>
.nut-cell {
  > .nutui-iconfont {
    margin-right: 10px;
  }
}
ul {
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  width: 100%;
  li {
    flex: 0 0 25%;
    max-width: 25%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    span {
      height: 40px;
      font-size: 12px;
      text-align: center;
    }
    .nutui-iconfont {
      margin: 16px 0 16px;
    }
  }
}
</style>
