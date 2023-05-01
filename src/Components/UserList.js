import React from 'react'

const UserList = ({list}) => {
  return (
    <ul className="list-group list-group-horizontal-lg">
   { list.map ((user)=> ( <li class="list-group-item "> 

   <p>ID: {user.id}</p>
        <p>Name: {user.name}</p>
        <p>Username: {user.username}</p>
        <p>Email: {user.email}</p>
        <p>Address: {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}</p>
        <p>Phone: {user.phone}</p>
        <p>Website: {user.website}</p>
   
   
   
   
   
   </li>))}
    </ul>
  );
};

export default UserList;