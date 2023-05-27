import { Profile } from "./Profile/Profile";
import { Statistics } from "./Statistics/Statistics";
import user from './data/user.json';
import data from './data/data.json';

const App = () => {
  return <>
    <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
  />

<Statistics title="Upload stats" stats={data} />
    <Statistics stats={data} />

    </>
}

export default App;

// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };
