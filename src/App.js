import React ,{useState} from 'react'
import Features from './components/Features'
import GetStarted from './components/GetStarted'
import Header from './components/Header'
import Hero from './components/Hero'
import Pricing from './components/Pricing'
import Sidenav from './components/Sidenav'
import Trend from './components/Trend'

function App() {
 const [isOpen, setisOpen] = useState(false); 

 const Toggle = ()=>{
   setisOpen(!isOpen);
 }
  return (
    <div className='App h-auto min-h-screen bg-black text-white'>
{isOpen ? <Sidenav Toggle = {Toggle} /> : null}
<div className="container  w-10/12 mx-auto">
  <Header Toggle = {Toggle}/>
<Hero/>
</div>
<Trend/>
<Features/>
<Pricing/>
<GetStarted />

  </div>
  )
}

export default App