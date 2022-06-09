import { Avatar, List, Tag } from 'antd';
import { useEffect, useState } from 'react';
import './list.scss'
import { getTopics } from '../../api/api'
import TypeTag from '../../components/TypeTag';

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
    //eslint-disable-next-line react-hooks/exhaustive-deps
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
                <TypeTag data={item}></TypeTag>
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