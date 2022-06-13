import { Avatar } from 'antd';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updateUserid } from '../../store/userReducer';
import './author.scss'
function Author (props) {
  const data = props.data
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const goToUser = () => {
    navigate(`/user/${data.loginname}`)
    dispatch(
      updateUserid(data.loginname)
    )
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