import PropTypes from 'prop-types';
import { FriendListItem } from 'components/FriendListItem/FriendListItem';

// export const FriendList = ({ friends }) => {
//     return (<ul class="friend-list">
//         {friends.map(({ id, avatar, name, isOnline }) => {
//             return (<FriendListItem
//             key={id}
//             avatar={avatar}
//             name={name}
//             isOnline={isOnline}
//        />)}
//         )}
// </ul >

//     )
// }

export const FriendList = ({ friends }) => {
  return (
    <ul className="friend-list">
      {friends.map(({ id, avatar, name, isOnline }) => (
        <FriendListItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))}
    </ul>
  )
}

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
}


