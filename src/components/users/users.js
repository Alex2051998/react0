import React, {useEffect, useState} from 'react';

import User from "../user/user";
import {userService} from "../../services/userService";
import "../../App.css";
import UserDetails from "../userDetails/userDetails";
// import {postService} from "../../services/postService";
// import Posts from "../posts/posts";

const Users = ({getPostId, setFlag}) => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState(null);


  useEffect(()=>{
     userService.getAll().then(({data}) => setUsers(data))
  }, []);

    const getDetails = async (id) => {
        const {data} = await userService.getById(id);
        setUser(data);
        setFlag(false);
    }



    return (
        <div>
            <div className={"users"}>
                <div className={"usersLeft"}>
                    {users && users.map(user => <User key={user.id} user={user} getDetails={getDetails} />)}
                </div>
                <div className={"usersRigth"}>
                    {user && <UserDetails key={user.id} user={user} getPostId={getPostId} />}
                </div>
            </div>
        </div>
    );
};

export default Users;