
import { Route,Routes } from "react-router-dom";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import './App.css';

function App() {
  return (
    <>
    <div className="container">
    <Routes>    
      <Route path="/" element={<SignIn/>}></Route>
      <Route path="/signUp" element={<SignUp/>}></Route>
    </Routes>
    </div></>
  );
}

export default App;
