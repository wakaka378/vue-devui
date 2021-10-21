/**
 * 控制窗口打开收起
 */
import { ref, watch, computed } from 'vue';
import { PopupTypes, CascaderProps } from '../src/cascader-types'

export const popupHandles = (props: CascaderProps): PopupTypes => {
  const menuShow = ref(false)
  const menuOpenClass = ref('')
  const disabled = computed(() => props.disabled) // select是否被禁用
  const openPopup = () => {
    if (disabled.value) return
    menuShow.value = !menuShow.value
  }

  watch(menuShow, (status) => {
    menuOpenClass.value = status ? 'devui-drop-menu-wrapper' : ''
  })

  return {
    menuShow,
    menuOpenClass,
    openPopup,
  }
}
