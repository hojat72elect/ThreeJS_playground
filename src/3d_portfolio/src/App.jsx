import {BrowserRouter} from "react-router-dom";

import {About, Contact, Experience, Feedbacks, Tech, Works} from "./components/index.js";
import Hero from "./hero/Hero.jsx";
import Navbar from "./navbar/Navbar.jsx";
import StarsCanvas from "./components/canvas/Stars.jsx";

const App = () => {
    return (
        <BrowserRouter>
            <div className='relative z-0 bg-primary'>
                <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
                    <Navbar/>
                    <Hero/>
                </div>
                <About/>
                <Experience/>
                <Tech/>
                <Works/>
                <Feedbacks/>
                <div className='relative z-0'>
                    <Contact/>
                    <StarsCanvas/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
