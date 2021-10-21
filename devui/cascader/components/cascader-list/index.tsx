import { defineComponent } from 'vue'
import { getRootClass } from './use-class'
import './index.scss'
import { cascaderulProps, CascaderulProps } from './cascader-list-types'
import { DCascaderItem } from '../cascader-item'
export default defineComponent({
  name: 'DCascaderList',
  props: cascaderulProps,
  setup(props: CascaderulProps) {
    const rootClasses = getRootClass(props)
    // console.log('props', props)
    return () => (
      <ul class={rootClasses.value}>
        {
          props?.cascaderItems?.length > 0
          ? props.cascaderItems.map((item, index) => {
            return <DCascaderItem cascaderItem={item} liIndex={index} {...props}></DCascaderItem>
          })
          : <span>没有数据</span>
        }
      </ul>
    )
  }
})
