
import Counter from "./components/.counter";
import Colors from "./components/colors";
import './app.css'
import ToDo from "./components/todo";
import SignUp from "./components/signUp";


function App() {
  return <div className="App">
  <Counter/>
  <br></br>
  
  <hr/>
  <Colors/>
  <br></br>
  <hr/>
<ToDo/>
<SignUp/>
  </div>;
}

 export default App;





