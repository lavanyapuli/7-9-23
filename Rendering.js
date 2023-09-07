import React ,{useState} from 'react';
function Rendering(){
    const[isLoggedIn,setIsLoggedIn] =useState(false);
    const handleLoginToggle =() =>{
        setIsLoggedIn(!isLoggedIn);
    };
    return (
        <div>
            <h1>CONDITIONAL RENDERING</h1>
            {isLoggedIn ?(
                <p>Welcome , lavanya! you are logged in.</p>
            ) :(
                <p>please login to your account.</p>
            )
            }
            <button onClick={handleLoginToggle}>
                {isLoggedIn ? 'Logout' :'Login'}
            </button></div>
    );
}
export default Rendering;