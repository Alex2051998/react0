import React, {useEffect, useState} from 'react';
import {userService} from "../../services/User.service";
import User from "../user/User";

const Users = ({getPosts}) => {
   const [users, setUsers] = useState([]);

   useEffect(()=> {
       userService.getAll().then(({data}) => setUsers(data));
   }, [])
    return (
        <div>
            {users.map(user => <User key={user.id} user={user} getPosts={getPosts}/>)}
        </div>
    );
};

export default Users;