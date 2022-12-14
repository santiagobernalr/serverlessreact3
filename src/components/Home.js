import React from "react";
import {useNavigate, useLocation} from 'react-router-dom';


function Home() {
  const location = useLocation();
  var email = location.state.user

  const navigate = useNavigate();

  const navigateToMyJokes = () => {
    navigate('/myjokes',  {state: {
      user: email,
  }});
  };


  const navigateToGetJokes = async() => {
    navigate('/getjokes',  {state: {
      user: email,
  }});
  };
  const navigateToLogIn = async() => {
    navigate('/');
  };

  
  

  return (
    <div className="login-box">
      <h2>Home</h2>
      <div className="button_cen">
      <button onClick={navigateToGetJokes} className="buttonx">
        Get Jokes 
        </button>
        <button onClick={navigateToMyJokes} className="buttonx">
        My Jokes 
        </button>
        <button onClick={navigateToLogIn} className="buttonx">
        Log Out 
        </button>
        </div>
    </div>
  );
}

export default Home;
