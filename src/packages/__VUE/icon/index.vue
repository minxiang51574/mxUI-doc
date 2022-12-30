<!--
 * @Author: Mx
 * @Date: 2022-12-30 10:49:50
 * @Description: Icon 图标
-->
<template>
  <i :class="classes" :style="styles" @click="handleClick"> </i>
</template>
<script lang="ts">
import { computed } from 'vue';
import { createComponent } from '@/packages/utils/create';
const { componentName, create } = createComponent('icon');
import { pxCheck } from '@/packages/utils/pxCheck';

export default create({
  props: {
    name: { type: String, default: '' },
    size: { type: [String, Number], default: '' },
    fontClassName: { type: String, default: 'iconfont' },
    color: { type: String, default: '' }
  },
  emits: ['click'],

  setup(props, { emit }) {
    const handleClick = (event: Event) => {
      emit('click', event);
    };

    const classes = computed(() => {
      const prefixCls = componentName;
      return {
        [props.fontClassName]: true,
        [prefixCls]: true,
        [props.name]: true
      };
    });
    const styles = computed(() => {
      return {
        color: props.color,
        fontSize: pxCheck(props.size),
        width: pxCheck(props.size),
        height: pxCheck(props.size)
      };
    });
    return {
      classes,
      styles,
      handleClick
    };
  }
});
</script>
