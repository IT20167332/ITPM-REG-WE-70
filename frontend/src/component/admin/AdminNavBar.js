import React from 'react'
import {Link} from 'react-router-dom';
import './AdminNavBar.css'

function AdminNavBar() {
    return (
        <div className='navbar-div'>
            <nav className='navbar-nav'>
                <ul className='navbar-ul'>
                    <li className='navbar-li'>
                        <Link to='/AdminPanel' className='navbar-link'>
                            Dashboard
                        </Link>
                    </li>
                    <li className='navbar-li'>
                        <Link to='/AdminPanel/addpost' className='navbar-link'>
                            Add Post
                        </Link>
                    </li>
                    <li className='navbar-li'>
                        <Link className='navbar-link' to="/AdminPanel/postmanagement">
                            Post Management
                        </Link>
                    </li>
                    <li className='navbar-li'>
                        <Link to='/AdminPanel/category' className='navbar-link' >
                            Category management
                        </Link>
                    </li>

                </ul>
            </nav>
            
        </div>
    )
}

export default AdminNavBar
