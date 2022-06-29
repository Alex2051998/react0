import './App.css';
import Users from "./components/users/Users";
import UserDetails from "./components/userDetails/UserDetails";
import {useState} from "react";
import Spacexs from "./components/spacexs/Spacexs";

function App() {
    const [user, setUser] = useState(null);

    const userDetails = (user) => {
        setUser(user);
    }
    return (
        <div>
            <div className={"block"}>
                <Users userDetails={userDetails}/>
                {user && <UserDetails user={user}/>}
            </div>
            <hr/>
            <div>
                <Spacexs/>
            </div>

        </div>
    );
}

export default App;
