import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
const Users = () => {
 // state
 const [users, setUsers] = React.useState([]);
 const [offline, setOffline] = React.useState(false);
 React.useEffect(() => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((users) => {
      setUsers(users);
    })
    .catch((err) => {});
    OfflineListen()
}, []);
 
 // effects
 //OfflineListen();
//  React.useEffect(() => {
//   window.addEventListener("offline", setOffline(false));
//   return () => {
//     window.removeEventListener("offline", setOffline(false));
//   };
// }, []);

function OfflineListen()
{
 window.addEventListener('offline', function(e) { console.log('offline'); setOffline(true); });
 window.addEventListener('online', function(e) { console.log('online'); setOffline(false); });
}
 // render
 return (
   <div>
      {/* add to jsx */}
  {offline ? (
    <div className="banner-offline">The app is currently offline</div>
  ) : null}
     <h2>Users</h2>
     <ul>
       {users.map((user) => (
         <li key={user.id}>
           {user.name} ({user.email})
         </li>
       ))}
     </ul>
   </div>
 );
};
const App = () => (
 <BrowserRouter>
   <Route path="/" exact component={Users} />
 </BrowserRouter>
);
export default App;