import React from 'react';
import IsoButton from './common/button/isoButton';
import Input from './common/input/Input';
// import { ChangeEvent } from 'react'; 
import IsoHeader from './composite/header/Header';


const loginStyle = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
        height: "80vh"
    };
const headerStyle = {
      marginTop: "0px",
      marginLeft: "0px"
};
const appStyle = {
  display: "flex"
};
  
function App() {
  return (
    <div className="App" style={appStyle}>
        <div className="header" style={headerStyle}><IsoHeader/></div>
          
          <div className="login" style={loginStyle}>
            <Input label="email" type="input" placeholder="Enter your email"  />
            <Input label="Password" type="password" placeholder="Enter your password" /> 
            <IsoButton name="Login" action={()=>{console.log("login")}}/>
          </div>
    </div>
  );
}

export default App;
