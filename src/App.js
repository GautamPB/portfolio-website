import './App.css'
import NavigationBar from './components/NavigationBar/NavigationBar'
import Home from './components/Home/Home'
import About from './components/About/About'
// import Projects from './components/Projects/Projects'
// import Work from './components/Work/Work'
// import Resume from './components/Resume/Resume'
// import Contact from './components/Contact/Contact'
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
            {/* <Projects />
            <Work />
            <Resume />
            <Contact /> */}
        </div>
    )
}

export default App
