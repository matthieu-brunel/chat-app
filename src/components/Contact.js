import React from 'react';
import './chat.css';




class Contact extends React.Component {
    constructor(props){
        super(props);
        this.state= {
            online : false};
    }
    render(){
    return (
        <div className = "Contact">
            <img className = "avatar" src={this.props.avatar} />
           <div className = "name status" onClick = { event => {
            {this.state.online ? this.setState ({online : false}) : this.setState ({online : true})}}}>
        
            
            <p>{this.props.name} </p>
            <p  className = "  status-text"> {this.state.online ? <span className = "status-online"></span>:<span className = "status-offline"></span>} <span>{this.state.online ? "online":"offline"}</span> </p>
             
            </div>
            
       </div>
   );
           }
  }
export default Contact;
















