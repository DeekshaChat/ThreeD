import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { Outlet } from 'react-router-dom';
import SubHeader from './components/header/SubHEader';

function App() {
  const [count, setCount] = useState(0)

//   return <div className='h-screen w-screen bg-gray-400 flex content-between'>
//   <div className='w-full block'>
//     <Header/>
//     <main>
//       <Outlet/>
//     </main>
//     <Footer/>
//   </div>
//  </div>
return <div className='min-h-screen bg-white flex flex-wrap content-between'>
    <div className='w-full block'>
      <Header/>
      <SubHeader/>
      <main>
        <Outlet/>
      </main>
      <Footer/>
    </div>
   </div>
}

export default App;
