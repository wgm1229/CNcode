import { useState, useEffect } from 'react'
import { Avatar, List } from 'antd'
import { PaginationProps } from 'antd'
import { getTopics, getTopicsParam } from '../../../api/api'
import TypeTag from '../../../components/typetag/TypeTag'
import './list.scss'
type list = {
  author: {
    loginname: string
    avatar_url: string
  }
  title: string
  author_id: string
  create_at: string
  id: string
  reply_count: number
  tab: string
  good: boolean
  top: boolean
  visit_count: number
}
function SimplifyList(props: { tab: string }) {
  const [loading, setLoading] = useState<boolean>(false)
  const [list, setList] = useState<Array<list>>([]) //列表数据源
  const [currPage, setcurrPage] = useState<number>(1) //当前页数
  const pagination: PaginationProps = {
    //分页配置
    size: 'small',
    total: 1000,
    current: currPage,
    defaultCurrent: 1,
    pageSize: 20,
    showSizeChanger: false,
    onChange: (page: number) => {
      //切换页数
      setcurrPage(page)
    }
  }
  /* 获取list列表 */
  function getList(page: number, tab: string) {
    setLoading(true)
    const param: getTopicsParam = {
      page,
      limit: 20,
      tab
    }
    getTopics(param)
      .then((res: any) => {
        if (res.data.success) {
          setList(res.data.data)
        } else {
          console.log('获取list失败')
        }
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setLoading(false)
      })
  }
  useEffect(() => {
    getList(currPage, props.tab)
  }, [currPage, props.tab])
  useEffect(() => {
    setcurrPage(1)
  }, [props.tab])
  return (
    <List
      className="list"
      itemLayout="horizontal"
      loading={loading}
      pagination={pagination}
      dataSource={list}
      renderItem={(item: list) => (
        <List.Item actions={[`回复：${item.reply_count}`, `访问：${item.visit_count}`]}>
          <List.Item.Meta
            avatar={<Avatar src={item.author.avatar_url} />}
            title={
              <div>
                <TypeTag data={item} />
                <span>{item.title}</span>
              </div>
            }
            description={
              <div>
                <span className="name">{item.author.loginname}</span>
                <span>发表于：{item.create_at.split('T')[0]}</span>
              </div>
            }
          />
        </List.Item>
      )}
    />
  )
}
export default SimplifyList
