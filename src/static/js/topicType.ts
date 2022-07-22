export declare type topicTypeItem = {
  value: string
  label: string
  color?: string
  listshow: boolean
}
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
