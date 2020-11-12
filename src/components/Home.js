import React, { Component } from 'react';

class Home extends Component {
    render() {
        console.log("Home Props", this.props);
        return (
            <div>
                Home
            </div>
        );
    }
}

export default Home;