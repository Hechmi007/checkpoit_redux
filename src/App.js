import Header from "./Components/Header";
import './App.css';
import Tasks from "./Components/Tasks"
import { useSelector } from "react-redux/es/exports";
import Filter from "./Components/Filter";
function App() {

let tasks=useSelector(state=>state.Task.tasks)
let filter=useSelector(state=>state.Task.filter)
console.log(filter)
  return (
    <div className="container">
      <Header/>
      <Tasks tasks={filter=="done"?tasks.filter(el=>el.reminder==true):filter=="undone"?tasks.filter(el=>el.reminder==false):tasks} ></Tasks>
      <Filter></Filter>
    </div>
  );
}

export default App;
