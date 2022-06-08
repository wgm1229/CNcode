import { Avatar, List, Tag } from 'antd';
import { useEffect, useState } from 'react';
import './list.scss'
import { getTopics } from '../../api/api'

const SimplifyList = () => {
  const [initLoading, setInitLoading] = useState(true);
  const [list, setList] = useState([]);
  const [page, setPage] = useState(1)
  const pagination = {
    total: 1000,
    defaultPageSize: 20,
    defaultCurrent: 1,
    showSizeChanger: false,
    onChange: (currentPage) => {
      setPage(currentPage)
    }
  }
  const getList = () => {
    let params = {
      page: page,
      limit: 20,
      tab: 'all',
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
    getList()
  }, [page]);

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
              <p>
                {item.top &&
                  <Tag className='topTag' color="green">置顶</Tag>
                }
                {item.good &&
                  <Tag color="green">精华 </Tag>}
                {item.tab === 'share' &&
                  <Tag color="purple">分享</Tag>}
                {item.tab === 'ask' &&
                  <Tag color="blue">问答</Tag>}
                <span className='list_item_title'>{item.title}</span>
              </p>
            }
            description={
              <p>
                <span className='name'>{item.author.loginname}</span>
                <span>发表于：{item.create_at.split('T')[0]}</span>
              </p>
            }
          />
        </List.Item>
      )}
    >
    </List>
  );
};

export default SimplifyList;