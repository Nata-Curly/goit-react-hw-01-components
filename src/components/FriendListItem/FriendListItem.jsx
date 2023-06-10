import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';

export const FriendListItem = ({ id, avatar, name, isOnline }) => {
    return (
        <li key={id} className={css.item}>
        <span className={`${isOnline ? css.online : css.offline}`} status='isOnline'
          style={{
            height: 20,
            width: 20,
            marginRight: 5,
            borderRadius: '50%'
          }}
        ></span>        
        <img className="avatar" src={avatar} alt="User avatar" width="48" />        
        <p className={css.name}>{name}</p>
        </li>
    )
}
 
FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
}
