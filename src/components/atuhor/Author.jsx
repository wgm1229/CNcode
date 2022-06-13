import { Avatar } from 'antd';
import { useNavigate } from 'react-router-dom';
import './author.scss'
function Author (props) {
  const data = props.data
  const navigate = useNavigate()
  const goToUser = () => {
    navigate(`/user/${data.loginname}`)
  }
  return (
    <span>
      {data.avatar_url && <Avatar className='profilepicture' src={data.avatar_url} />}
      <span className='name' onClick={goToUser}>{data.loginname}</span>
      <span className='time'>
        {!data.hiddenText && <span>发表于：</span>}
        {data.create_at.split('T')[0]}
      </span>
    </span>
  )
}
export default Author