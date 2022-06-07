import { Avatar, List, Skeleton } from 'antd';
import { useEffect, useState } from 'react';
import './list.scss'
import { getTopics } from '../../api/api'
const count = 3;
const fakeDataUrl = `https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat,picture&noinfo`;

const SimplifyList = () => {
  const [initLoading, setInitLoading] = useState(true);
  const [list, setList] = useState([]);
  const getList = () => {
    let params = {
      page: 1,
      limit: 10,
      tab: 'all'
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
    // fetch(fakeDataUrl)
    //   .then((res) => res.json())
    //   .then((res) => {

    //     setList(res.results);
    //   });
    getList()
  }, []);


  return (
    <List
      className="list"
      loading={initLoading}
      itemLayout="horizontal"
      dataSource={list}
      renderItem={(item) => (
        <List.Item
          actions={[<a key="list-loadmore-edit">edit</a>, <a key="list-loadmore-more">more</a>]}
        >
          <Skeleton avatar title={false} loading={item.loading} active>
            <List.Item.Meta
              avatar={<Avatar src={item.author.avatar_url} />}
              title={item.title}
              description={item.loginname}
              actions={[<span key={item.reply_count}>{'回复：' + item.reply_count}</span>, '访问：' + item.visit_count]}
            />
            {/* <div>content</div> */}
          </Skeleton>
        </List.Item>
      )}
    />
  );
};

export default SimplifyList;