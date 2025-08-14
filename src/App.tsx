import './App.css'
import { Navbar } from './components/Text/Navbar/Navbar'
import { Text } from './components/Text/Text'
import OrangeBenefit from './components/OrangeBenefit/OrangeBenefit'
import OrangeCards from './components/OrangeCards/OrangeCards'
import SeedsSection from './components/SeedsSection/SeedsSection'
import MenuBenefit from './components/MenuBenefit/MenuBenefit'

function App() {
  return (
    <>
     <div id='app-container'>
      <div id='scrollable' className="container">
        <Navbar/>
        <Text/>
        <OrangeBenefit/>
        <OrangeCards/>
        <SeedsSection/>
        <MenuBenefit/>
        
      </div>
    </div>
    </>
   
  )
}

export default App
