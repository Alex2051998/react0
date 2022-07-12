import './App.css';
import {Link, Route, Routes} from "react-router-dom";

import HomePage from "./pages/homePage/HomePage";
import TodosPage from "./pages/todosPage/TodosPage";
import AlbumsPage from "./pages/albumsPage/AlbumsPage";
import CommentsPage from "./pages/commentsPage/CommentsPage";
import PostsPage from "./pages/postsPage/PostsPage";


function App() {
    return (
        <div>
            <div>
                <h2>Menu</h2>
                <ul>
                    <li><Link to={'/'}>home</Link></li>
                    <li><Link to={'/todos'}>todos</Link></li>
                    <li><Link to={'/albums'}>albums</Link></li>
                    <li><Link to={'/comments'}>comments</Link></li>
                </ul>
                <h2>Content</h2>
                <Routes>
                    <Route path={'/'} element={<HomePage/>}/>
                    <Route path={'/todos'} element={<TodosPage/>}/>
                    <Route path={'/albums'} element={<AlbumsPage/>}/>
                    <Route path={'/comments'} element={<CommentsPage/>}>
                           <Route path={':postId'} element={<PostsPage/>}/>
                    </Route>
                </Routes>
            </div>
        </div>
);
}

export default App;
