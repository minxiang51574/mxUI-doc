<template>
  <div class="demo">
    <h2>{{ translate('title') }}</h2>
    <div class="demo-button-row">
      <k-button type="primary">{{ translate('primary') }}</k-button>
      <k-button type="default">{{ translate('default') }}</k-button>
    </div>
    <h2>{{ translate('title1') }}</h2>
    <div class="demo-button-row2">
      <k-button plain type="primary">{{ translate('plain') }}</k-button>
      <k-button plain type="default">{{ translate('plain') }}</k-button>
    </div> 

    <h2>{{ translate('title2') }}</h2>
    <div class="demo-button-row2">
      <k-button disabled type="primary">{{ translate('disabled') }}</k-button>
      <k-button plain disabled type="primary">{{ translate('disabled') }}</k-button>
    </div>
    <h2>{{ translate('title3') }}</h2>
    <div class="demo-button-row2">
      <k-button shape="square" type="primary"> {{ translate('square') }}</k-button>
      <k-button shape="round" type="default"> {{ translate('round') }}</k-button>
    </div>
    <h2>{{ translate('title4') }}</h2>
    <div class="demo-button-row2">
      <k-button loading type="primary"></k-button>
      <k-button :loading="isLoading" type="primary" @click="changeLoading">{{ translate('changeLoading') }}</k-button>
    </div>

    <h2>{{ translate('title7') }}</h2>
    <div class="demo-button-row2">
      <k-button size="large" type="primary" style="margin-bottom: 10px">{{ translate('large') }}</k-button>
      <k-button type="primary">{{ translate('normal') }}</k-button>
      <k-button size="small" type="primary">{{ translate('small') }}</k-button>
    </div>
    <h2>{{ translate('title8') }}</h2>
    <div class="demo-button-row2">
      <k-button block type="primary">{{ translate('block') }}</k-button>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';
import { createComponent } from '@/packages/utils/create';
const { createDemo, translate } = createComponent('button');
import { useTranslate } from '@/sites/assets/util/useTranslate';
const initTranslate = () =>
  useTranslate({
    'zh-CN': {
      title: '????????????',
      title1: '????????????',
      title2: '????????????',
      title3: '????????????',
      title4: '????????????',
      title5: '????????????',
      title6: '???????????????',
      title7: '????????????',
      title8: '????????????',
      title9: '???????????????',
      primary: '????????????',
      info: '????????????',
      default: '????????????',
      danger: '????????????',
      warning: '????????????',
      success: '????????????',
      plain: '????????????',
      disabled: '????????????',
      square: '????????????',
      round: '????????????',
      loading: '?????????...',
      changeLoading: 'Click me!',
      star: '??????',
      large: '????????????',
      normal: '????????????',
      small: '????????????',
      mini: '????????????',
      block: '????????????',
      pure: '????????????',
      gradient: '???????????????'
    },
    'en-US': {
      title: 'Type',
      title1: 'Plain',
      title2: 'Disabled',
      title3: 'Shape',
      title4: 'Loading',
      title5: 'Icon',
      title6: 'Custom Icon',
      title7: 'Size',
      title8: 'Block',
      title9: 'Custom Color',
      primary: 'Primary',
      info: 'Info',
      default: 'Default',
      danger: 'Danger',
      warning: 'Warning',
      success: 'Success',
      plain: 'Plain',
      disabled: 'Disabled',
      square: 'Square',
      round: 'Round',
      loading: 'Loading...',
      changeLoading: 'Click me!',
      star: 'Star',
      large: 'Large',
      normal: 'Normal',
      small: 'Small',
      mini: 'Mini',
      block: 'Block Element',
      pure: 'Pure',
      gradient: 'Gradient'
    }
  });

export default createDemo({
  props: {},
  setup(props) {
    initTranslate();
    let isLoading = ref(false);
    const changeLoading = () => {
      isLoading.value = true;
      setTimeout(() => {
        isLoading.value = false;
      }, 3000);
    };

    return {
      isLoading,
      changeLoading,
      translate
    };
  }
});
</script>

<style lang="scss" scoped>
.demo-button-row {
  margin-bottom: 20px;
}
.demo-button-row2 {
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}
.k-button {
  margin-right: 5px;
  &:last-child {
    margin-right: 0;
  }
}
</style>
