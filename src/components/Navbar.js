import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
          <div>
            <nav>
              <div className='nav__username'> Rohit </div>
              <div className='nav__textbox'> Text Box1 </div>
              <div className='nav__textbox'> Text Box1 </div>
              <div className='nav__logout'> Login/Logout </div>
            </nav>
          </div>
        );
    }
}

export default Navbar;