import './App.css';
import Form1 from "./components/form1/Form1";
import Form2 from "./components/form2/Form2";

function App() {
    return (
        <div>
            <h2>Add user</h2>
            <Form1/>
            <hr/>
            <h2>Add post</h2>
            <Form2/>
        </div>
    );
}

export default App;
