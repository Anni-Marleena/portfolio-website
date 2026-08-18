import React, {useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Navigationbar from './components/Navigationbar'
import HomeSection from './components/HomeSection'

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 100,
    });
  }, []);

  return (
    <div className='bg-[#111827] min-h-screen'>
      <Navigationbar/>
      <HomeSection />
    </div>
  )
}

export default App