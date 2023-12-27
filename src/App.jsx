import './index.css'
import {Component} from './components/Component'

const App = () => {

  const name = "fareed";
  
  return(
    <>
  <h1 className='heading'>
    {name}
  </h1>
  <h1 style={{color:'white'}}>
    Farooq
  </h1>
  <input placeholder='Enter Your name' type="text" /><br /><br />
  <input placeholder='Enter Your Father name' type="text" />

     <Component/>
  </>
)}

export default App