 
 
import './App.css'
import Button from './components/Button'
import CounterBtn from './components/CounterBtn'
import Form from './components/Form'
 
function App() {
 
  return (
    <div className='App'>
    <Button text={"clickMe"} onClick={()=>alert("helo")} className='red'  />
    <Form />
    <CounterBtn />
    </div>
  )
}

export default App
