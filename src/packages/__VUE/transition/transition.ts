/*
 * @Author       : Mx
 * @Date         : 2022-08-11 16:33:54
 * @Description  :
 */

const animationMap: any = {
    fade: {
        enter: { opacity: 0 },
        'enter-to': { opacity: 1 },
        leave: { opacity: 1 },
        'leave-to': { opacity: 0 }
    },
    'fade-up': {
        enter: { opacity: 0, transform: 'translateY(100%)' },
        'enter-to': { opacity: 1, transform: 'translateY(0)' },
        leave: { opacity: 1, transform: 'translateY(0)' },
        'leave-to': { opacity: 0, transform: 'translateY(100%)' }
    },
    'fade-down': {
        enter: { opacity: 0, transform: 'translateY(-100%)' },
        'enter-to': { opacity: 1, transform: 'translateY(0)' },
        leave: { opacity: 1, transform: 'translateY(0)' },
        'leave-to': { opacity: 0, transform: 'translateY(-100%)' }
    },
    'fade-left': {
        enter: { opacity: 0, transform: 'translateX(-100%)' },
        'enter-to': { opacity: 1, transform: 'translateY(0)' },
        leave: { opacity: 1, transform: 'translateY(0)' },
        'leave-to': { opacity: 0, transform: 'translateX(-100%)' }
    },
    'fade-right': {
        enter: { opacity: 0, transform: 'translateX(100%)' },
        'enter-to': { opacity: 1, transform: 'translateY(0)' },
        leave: { opacity: 1, transform: 'translateY(0)' },
        'leave-to': { opacity: 0, transform: 'translateX(100%)' }
    },
    'slide-up': {
        enter: { transform: 'translateY(100%)' },
        'enter-to': { transform: 'translateY(0)' },
        leave: { transform: 'translateY(0)' },
        'leave-to': { transform: 'translateY(100%)' }
    },
    'slide-down': {
        enter: { transform: 'translateY(-100%)' },
        'enter-to': { transform: 'translateY(0)' },
        leave: { transform: 'translateY(0)' },
        'leave-to': { transform: 'translateY(-100%)' }
    },
    'slide-left': {
        enter: { transform: 'translateX(-100%)' },
        'enter-to': { transform: 'translateY(0)' },
        leave: { transform: 'translateY(0)' },
        'leave-to': { transform: 'translateX(-100%)' }
    },
    'slide-right': {
        enter: { transform: 'translateX(100%)' },
        'enter-to': { transform: 'translateY(0)' },
        leave: { transform: 'translateY(0)' },
        'leave-to': { transform: 'translateX(100%)' }
    },
    zoom: {
        enter: { transform: 'scale(0.95)' },
        'enter-to': { transform: 'scale(1)' },
        leave: { transform: 'scale(1)' },
        'leave-to': { transform: 'scale(0.95)' }
    },
    'fade-zoom': {
        enter: { opacity: 0, transform: 'scale(0.95)' },
        'enter-to': { opacity: 1, transform: 'scale(1)' },
        leave: { opacity: 1, transform: 'scale(1)' },
        'leave-to': { opacity: 0, transform: 'scale(0.95)' }
    }
};

// 定义类名，通过给元素动态切换类名，赋予元素一定的css动画样式
export const getClassNames = (name: string) => ({
    enter: `k-${name}-enter k-${name}-enter-active`,
    'enter-to': `k-${name}-enter-to k-${name}-enter-active`,
    leave: `k-${name}-leave k-${name}-leave-active`,
    'leave-to': `k-${name}-leave-to k-${name}-leave-active`
});

export const getStyle = (name: string) => animationMap[name];
