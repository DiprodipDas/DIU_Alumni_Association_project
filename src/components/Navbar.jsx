import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const Navbar = () => {

    const { user, logout } = useAuth()
    console.log(user)


    const handleLogOut = () => {
        logout();
    }
    return (
        <div className="navbar max-w-screen-3xl bg-white mx-auto px-5 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/about'>About Us</Link></li>
                        <li><Link to='/contact'>Contact</Link></li>
                        <li><Link to='/blog'>Blogs</Link></li>
                        <li>
                            <details>
                                <summary>Alumni Directory</summary>
                                <ul className="p-2">
                                    <li><Link to='/'>Faculty of Science & Engineering</Link></li>
                                    <li><Link to='/'>Faculty of Arts & Social Sciences</Link></li>
                                    <li><Link to='/'>Faculty of Business Studies</Link></li>
                                    <li><Link to='/'>Faculty of Law</Link></li>
                                </ul>
                            </details>
                        </li>
                    </ul>
                </div>
                <Link to='/' className="text-xl font-bold flex items-center">
                    <img src="/logo1.png" alt="" />
                    <span className='ml-2 hidden sm:block'></span>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About Us</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                    <li><Link to='/blog'>Blogs</Link></li>
                    <li>
                        <details>
                            <summary>Alumni Directory</summary>
                            <ul className="p-2 z-50">
                                <li><Link to='/'>Faculty of Science & Engineering</Link></li>
                                <li><Link to='/'>Faculty of Arts & Social Sciences</Link></li>
                                <li><Link to='/'>Faculty of Business Studies</Link></li>
                                <li><Link to='/'>Faculty of Law</Link></li>
                            </ul>
                        </details>
                    </li>
                </ul>
            </div>
            <div className="navbar-end">

                {
                    user ? (<>
                        <div className='inline-flex m-auto'><h6 className='text-sm text-gray-500 '>{user.email}</h6>
                        </div>
                        <Link to='/dashboard' className="btn border-green-600 text-green-600 hover:bg-red-600 hover:text-white px-8 hidden sm:flex">Dashboard</Link>
                        <button onClick={handleLogOut} className="btn bg-green-600 hover:bg-red-600 text-white ml-4">Log Out</button></>
                    ) : (<><Link to='/login' className="btn border-green-600 text-green-600 hover:bg-red-600 hover:text-white px-8 hidden sm:flex">Log in</Link>
                        <Link to='/membership' className="btn bg-green-600 hover:bg-red-600 text-white ml-4">Our Membership Plan</Link></>)
                }

            </div>
        </div>
    )
}

export default Navbar