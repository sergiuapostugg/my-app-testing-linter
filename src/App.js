import logo from './logo.svg'
import './App.css'

function App() {
  console.log('Warning')
  return (
    <div className="App">
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p className="What about new errors?">

        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
        <p className='Okay, I introduced some errors'>
          No errors here
        </p>
      </header>
    </div>
  )
}

export default App
