import { useContext, useState } from 'react'
import Box from './components/Box'
import Generic from './components/Generic'
import UseState from './components/UseState'
import { themeContext } from './components/UseContext'
import UseReducer from './components/UseReducer'
import ReduxSlice from './components/ReduxSlice'
import ReduxReducer from './components/ReduxReducer'


function App() {
  const [count, setCount] = useState<number>(0)
  const [value, setValue] = useState<number | string>(" ")

  const myFunc = (a: string, b: string) => {
    return a + b   //console.log(a+b)
  }

  // useContext

  const { theme, toggleTheme } = useContext(themeContext)




  return (
    <>
      <div className={`mainDiv ${theme} `}>
        <Box heading={"Box Heading"} count={count} onClick={() => setCount(count + 1)} func1={myFunc} >
          <h2>
            i am chilren in box
          </h2>
        </Box>
        <Generic label='Search' value={value} setVal={setValue} />
        <UseState />

        <h1>{theme}</h1>
        <button onClick={toggleTheme}>changeTheme</button>
        <hr />
        <UseReducer />
        <ReduxSlice />
        <ReduxReducer />
      </div>
    </>
  )
}

export default App
