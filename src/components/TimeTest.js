import React from 'react';

let timeInterval  
class Time extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            time: new Date().toLocaleTimeString()
        }  
        timeInterval = setInterval(() => {
        this.setState({
            time: new Date().toLocaleTimeString()
        });  
      }, 1000);
    }

    componentWillUnmount() {
        console.log('unmount');
        
        clearInterval(timeInterval)
    }


    render() { 
        return (<div>{this.state.time}</div>  );
    }
}
 
export default Time;