import React from 'react';
import './chat.css';




const Contact = ({Name, Avatar, Online}) => {
    return (
        <div className = "Contact">
            <img className = "avatar" src={Avatar} />
           <div className = "name status">
            <p>{Name} </p>
            <p  className = "  status-text"> {Online ? <span className = "status-online"></span>:<span className = "status-offline"></span>} {Online ? "online":"offline"} </p>
          </div>
            
            
       </div>
   );
}
export default Contact;
















