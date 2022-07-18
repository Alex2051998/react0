import './App.css';
import Posts from "./components/posts/Posts";
import Comments from "./components/comments/Comments";

function App() {
  return (
    <div className={'block'}>
        <div className={'left'}>
            <h1>Posts</h1>
            <Posts/>
        </div>
        <div className={'right'}>
            <h1>Comments</h1>
            <Comments/>
        </div>
    </div>
  );
}

export default App;
