import './App.css'
import NavigationBar from './components/NavigationBar/NavigationBar'
import Home from './components/Home/Home'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
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
            <div className="lg:mt-[35rem] mt-[112rem]">
                <Projects />
            </div>
            <Contact />
        </div>
    )
}

export default App
