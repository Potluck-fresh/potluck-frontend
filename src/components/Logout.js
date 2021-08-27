import React, { useEffect } from 'react'

const Logout = (props) => {
    useEffect(()=> {
                localStorage.removeItem("token");
                // props.history.push('/login');
        
    }, []);
    
return(<div></div>)
}

export default Logout