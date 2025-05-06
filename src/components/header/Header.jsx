import React from 'react';
import { Link } from 'react-router';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import LogoutBtn from './Logout';
import Container from '../container/container';
import Input from '../Input';



function Header() {
  // const authStatus = useSelector(state => state.auth.status);
// console.log('header======', authStatus);

  const navigate = useNavigate();
  const navItems = [
    {
      name: 'Home',
      // slug: "/",
      active: true
    }, 
  //   {
  //     name: "Login",
  //     // slug: "/login",
  //     active: !authStatus,
  // },
  // {
  //     name: "Signup",
  //     slug: "/signup",
  //     active: !authStatus,
  // },
  {
      name: "All Posts",
      slug: "/all-posts",
      // active: authStatus,
  },
  // {
  //     name: "Add Post",
  //     slug: "/add-post",
  //     active: authStatus,
  // },
  ]

  return (
    <>
      <header className='py-1 shadow bg-white'>
        <Container>
          <nav className='flex items-center'>
            <div className='mr-4'>
              <Link to='/'>
                <h1 className='text-3xl font-bold text-green-600 hover:text-green-600'>3D</h1>
              </Link>
            </div>
            <Input type='search' placeholder='Search...' className='mr-4 h-8'/>
            <ul className='flex ml-auto items-center'>
              {navItems.map((navItem)=> (
                navItem.active ? (
                  <li key={navItem.name}>
                    <button
                      className='inline-block px-4 py-1 duration-200 hover:bg-blue-100 rounded-full text-sm'
                      onClick={() => {
                        const nav = navItem.slug;
                        navigate(nav);
                      }}>{navItem.name}</button>
                  </li>) : null
              ))}
              {
                <li>
                  <LogoutBtn/>
                </li>
              }
            </ul>
          </nav>
        </Container>
      </header>
    </>
  )
}

export default Header;