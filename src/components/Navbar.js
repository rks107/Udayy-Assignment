import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
          <div>
            <nav>
              <div className='nav__username'>
                <Link to='/profile'>
                  <div className='user'>
                    <img
                      src='https://image.flaticon.com/icons/svg/2154/2154651.svg'
                      alt='user-dp'
                      id='user-dp'
                    />
                    <span>John Doe</span>
                  </div>
                </Link>
              </div>
              <div className='nav__search'>
                <img
                  className='search-icon'
                  src='https://image.flaticon.com/icons/svg/483/483356.svg'
                  alt='search-icon'
                />
                <input placeholder='Text Box1' />
              </div>
              <div className='nav__search'>
                <img
                  className='search-icon'
                  src='https://image.flaticon.com/icons/svg/483/483356.svg'
                  alt='search-icon'
                />
                <input placeholder='Text Box2' />
              </div>
              <div className='nav__links'>
                <ul>
                  <li>
                    <Link to='/signin'>Log-In</Link>
                  </li>
                  {/* <li>
                    <Link to='/signup'>Log-Out</Link>
                  </li> */}
                  <li>
                    <Link to='/register'>Register</Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        );
    }
}

export default Navbar;