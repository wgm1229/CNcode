import { useState, useEffect } from 'react'
import { Avatar, List } from 'antd'
import { PaginationProps } from 'antd'
import { getTopics, getTopicsParam } from '../../../api/api'
import TypeTag from '../../../components/typetag/TypeTag'
import './list.scss'
import { Link } from 'react-router-dom'
import Author from '../../../components/author/Author'
import { author } from '../../../static/js/publicTs'
//单条列表数据
type list = {
  author: author
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
  const [loading, setLoading] = useState<boolean>(false) //加载中
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
    //监听当前页数、左侧tab切换
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
              <Link to={`/article/${item.id}`}>
                <TypeTag data={item} />
                <span>{item.title}</span>
              </Link>
            }
            description={<Author hiddenType={true} hiddenImg={true} loginname={item.author.loginname} create_at={item.create_at}></Author>}
          />
        </List.Item>
      )}
    />
  )
}
export default SimplifyList
