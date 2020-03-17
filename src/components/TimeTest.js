import React from 'react';

class Time extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            time: new Date().toLocaleTimeString()
        }  
        setInterval(() => {
        this.setState({
            time: new Date().toLocaleTimeString()
        });  
      }, 1000);
    }


    render() { 
        return (<div>{this.state.time}</div>  );
    }
}
 
export default Time;