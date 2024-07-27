// import React, { useEffect,useNavigate } from 'react';
import Home from './Components/Pages/Home/Home';
import Login from './Components/Pages/Login/Login';
import {Route,Routes, } from 'react-router-dom';
import Player from './Components/Pages/Player/Player';
// import { onAuthStateChanged } from 'firebase/auth';
// import { auth } from './firebase';

const App = () => {

  // const navigate=useNavigate();

  // useEffect(()=>{
  //   onAuthStateChanged(auth,async(user)=>{
  //     if(user){
  //       console.log("User Logged In");
  //       navigate("/")
  //     }else{
  //       console.log("User Logged Out");
  //       navigate("login")
  //     }
  //   })
  // })
  return (
    <div>
      <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route exact path='/login' element={<Login />}/>
        <Route exact path='/player/:id' element={<Player />}/>
      </Routes>
    </div>
  )
}

export default App;