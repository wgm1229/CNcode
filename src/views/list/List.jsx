import { Avatar, List } from 'antd';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux'
import './list.scss'
import { getTopics } from '../../api/api'
import TypeTag from '../../components/TypeTag';
import Author from '../../components/atuhor/Author';

const SimplifyList = () => {
  const [initLoading, setInitLoading] = useState(true);
  const [list, setList] = useState([]);
  const [current, setCurrent] = useState(1)
  const tab = useSelector(state => state.home.tab)
  const pagination = {
    size: 'small',
    total: 1000,
    current: current,
    defaultPageSize: 20,
    defaultCurrent: 1,
    showSizeChanger: false,
    onChange: (currentPage) => {
      getList(currentPage)
    }
  }
  const getList = (page) => {
    let params = {
      page: page,
      limit: 20,
      tab: tab,
    }
    getTopics(params).then(res => {
      if (res.data.success) {
        setList(res.data.data);
      } else {
        console.log('获取list失败');
      }
    }).catch((err) => { console.log(err); })
      .finally(() => {
        setInitLoading(false);
      })
  }
  useEffect(() => {
    setCurrent(1)
    getList(1)
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tab])
  return (
    <List
      className="list"
      loading={initLoading}
      pagination={pagination}
      itemLayout="horizontal"
      dataSource={list}
      renderItem={(item) => (
        <List.Item
          actions={['回复：' + item.reply_count, '访问：' + item.visit_count]}
        >
          <List.Item.Meta
            avatar={<Avatar src={item.author.avatar_url} />}
            title={
              <Link to={`/article/${item.id}`}>
                <TypeTag data={item}></TypeTag>
                <span className='list_item_title'>{item.title}</span>
              </Link>
            }
            description={
              <Author data={{
                loginname: item.author.loginname,
                create_at: item.create_at
              }} />
            }
          />
        </List.Item>
      )}
    >
    </List>
  );
};

export default SimplifyList;