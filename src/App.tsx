import Header from "@components/Header"
import Footer from "@components/Footer"
import "./styles.css"
import { Routes, Route } from "react-router-dom"
import About from "@components/About"
const App = () => {
    const status: string = "I am working, super :)"

    return (
        <>
            <h1>{status}</h1>
            <Header />
            <Routes>
                <Route path="/about" Component={About} />
            </Routes>
            <Footer />
        </>
    )
}

export default App