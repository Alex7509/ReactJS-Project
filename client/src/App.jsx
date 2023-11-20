import { Routes, Route } from "react-router-dom";

import { NavBar } from "./components/NavBar"
import { Footer } from "./components/Footer"
import { Home } from "./components/Home"

function App() {


    return (
        <>
            <NavBar />

            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
            
            <Footer />
        </>
    )
}

export default App
