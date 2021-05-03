import './App.css'
import NavigationBar from './components/NavigationBar/NavigationBar'
import Home from './components/Home/Home'
import About from './components/About/About'

function App() {
    return (
        <div className="App">
            <NavigationBar />
            <Home />
            <About />
        </div>
    )
}

export default App
