
import AddStudent from "./AddStudent";


import Home from "./Home";
import {BrowserRouter as Router , Routes , Route, Link} from "react-router-dom"
import Header from "./Header";
 


function App() {
  return (
    <Router>
    <Header/>
    <div className="justify-center">
<div className="p-10 justify-between">

    <h3 className="ml-[50%] mb-5 text-sm font-semibold">Students</h3>
    

      <Link className=" text-sm font-semibold tracking-wide" to="/">View Student </Link>

</div>
    
      <Link className="pl-10 mb-10 text-sm font-semibold tracking-wide"  to="/addStudent">Add Student</Link>
    <Routes>
<Route path="/" element={<Home/>}/>
  
<Route path="/addStudent" element={<AddStudent/>}/>


    </Routes>
    </div>

    
    </Router>
  );
}

export default App;
