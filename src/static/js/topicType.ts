/**
 * value：tab接口请求参数；
 * label：tab标题；
 * color：tab颜色；
 * listshow：是否显示为左侧菜单；
 */
export declare interface topicTypeItem {
  value: topic_value
  label: topic_label
  color?: string
  listshow: boolean
}
//字面量类型
export declare type topic_label = '全部' | '精华' | '分享' | '问答' | '招聘' | '测试' | '置顶'
export declare type topic_value = 'all' | 'good' | 'share' | 'ask' | 'job' | 'dev' | 'top'
const topicType: Array<topicTypeItem> = [
  {
    value: 'all',
    label: '全部',
    listshow: true
  },
  {
    value: 'good',
    label: '精华',
    color: '#80bd01',
    listshow: true
  },
  {
    value: 'share',
    label: '分享',
    color: 'purple',
    listshow: true
  },
  {
    value: 'ask',
    label: '问答',
    color: 'geekblue',
    listshow: true
  },
  {
    value: 'job',
    label: '招聘',
    color: 'gold',
    listshow: true
  },
  {
    value: 'dev',
    label: '测试',
    color: '#999',
    listshow: true
  },
  {
    value: 'top',
    label: '置顶',
    color: '#80bd01',
    listshow: false
  }
]
export default topicType
