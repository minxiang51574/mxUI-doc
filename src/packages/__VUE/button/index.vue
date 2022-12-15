<template>
  <view :class="classes" @click="handleClick">
    <view class="k-button__warp">
      <view v-if="loading">
        <k-icon name="icon-a-24_loading3fanbai" fontClassName="iconfont-loading"></k-icon>
        <text :class="{ text: loading }"> {{ loadingText }}</text>
      </view>
      <view v-if="$slots.default && !loading">
        <slot></slot>
      </view>
    </view> 
  </view>
</template>

<script lang="ts">
import { PropType, toRefs, computed } from 'vue';
import { createComponent } from '@/packages/utils/create';
import Icon from '../icon/index.vue';
const { componentName, create } = createComponent('button');
export default create({
  components: {
    [Icon.name]: Icon
  },
  props: {
    // 类型
    type: {
      type: String as PropType<import('./type').ButtonType>,
      default: 'default'
    },
    // 尺寸
    size: {
      type: String as PropType<import('./type').ButtonSize>,
      default: 'normal'
    },
    // 是否为块级元素
    block: {
      type: Boolean,
      default: false
    },
    // 是否镂空（次要按钮）
    plain: {
      type: Boolean,
      default: false
    },
    // 是否禁用
    disabled: {
      type: Boolean,
      default: false
    },
    // 是否带loading
    loading: {
      type: Boolean,
      default: false
    },
    // 形状
    shape: {
      type: String as PropType<import('./type').ButtonShape>,
      default: 'round'
    },
    // loading文案
    loadingText: {
      type: String,
      default: '加载中'
    }
  },
  emits: ['click'],
  setup(props, { emit }) {
    const { type, size, shape, disabled, loading, plain, block } = toRefs(props);

    const handleClick = (event: MouseEvent) => {
      if (!loading.value && !disabled.value) {
        emit('click', event);
      }
    };

    const classes = computed(() => {
      const prefixCls = componentName;
      return {
        [prefixCls]: true,
        [`${prefixCls}--${type.value}`]: type.value,
        [`${prefixCls}--${size.value}`]: size.value,
        [`${prefixCls}--${shape.value}`]: shape.value,
        [`${prefixCls}--plain`]: plain.value,
        [`${prefixCls}--block`]: block.value,
        [`${prefixCls}--disabled`]: disabled.value,
        [`${prefixCls}--loading`]: loading.value
      };
    });

    return {
      handleClick,
      classes
    };
  }
});
</script>
