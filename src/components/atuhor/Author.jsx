import { Avatar } from 'antd';
import './author.scss'
function Author (props) {
  const data = props.data
  return (
    <span>
      <Avatar src={data.avatar_url} />
      <span className='name'>{data.loginname}</span>
      <span className='time'>
        {!data.hiddenText && <span>发表于：</span>}
        {data.create_at.split('T')[0]}
      </span>
    </span>
  )
}
export default Author