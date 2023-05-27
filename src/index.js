import React from 'react';
import ReactDOM from 'react-dom/client';
// import user from './user.json';
// import { App } from 'components/App';
import './index.css';
import App from './components/App'; 


// ReactDOM.createRoot(document.getElementById('root')).render(<App/>);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);


// -------------------------------------------

// const root = document.getElementById('root');

// const p = <p id='test-ID' classNameName='paragraph'>Hi there!</p>

// const div = <div name='main' id='main-ID' classNameName='main-div'>
//   {p}
// </div>

// const Profile = () => {
//   return (<div className="profile">
//     <div className="description">
//       <img
//         src={user.avatar}
//         alt="User avatar"
//         className="avatar"
//       />
//       <p className="name">{user.username}</p>
//       <p className="tag">{user.tag}</p>
//       <p className="location">{user.location}</p>
//     </div>

//     <ul className="stats">
//       <li>
//         <span className="label">Followers </span>
//         <span className="quantity">{user.stats.followers}</span>
//       </li>
//       <li>
//         <span className="label">Views </span>
//         <span className="quantity">{user.stats.views}</span>
//       </li>
//       <li>
//         <span className="label">Likes </span>
//         <span className="quantity">{user.stats.likes}</span>
//       </li>
//     </ul>
//   </div>)
// }

// const div = React.createElement('div', { name: 'main', id: 'main-ID', classNameName: 'main-div' }, 'Hi there! ', 'React ', 'is ', 'cool');

// console.log('div :>> ', div);




