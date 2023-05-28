import PropTypes from 'prop-types';

export const FriendListItem = (avatar, name, isOnline) => {
    return (
        <li className="item">
        <span className="status" status={isOnline}></span>        
        <img className="avatar" src={avatar} alt="User avatar" width="48" />        
        <p className="name">{name}</p>
        </li>
    )
}

 
FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
}