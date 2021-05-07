import './App.css'
import NavigationBar from './components/NavigationBar/NavigationBar'
import Home from './components/Home/Home'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init({
    duration: 600,
})

function App() {
    return (
        <div className="App">
            <NavigationBar />
            <Home />
            <About />
            <Projects />
        </div>
    )
}

export default App
