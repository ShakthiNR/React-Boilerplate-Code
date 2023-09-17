import Header from "@components/header"
import Footer from "@components/footer"
import About from "@components/about"
import "./styles.css"
import { Routes, Route } from "react-router-dom"

const App = () => {
    const title: string = "React - configured with Webpack V5"

    return (
        <>
            <h1>{title}</h1>
            <Header />
            <Routes>
                <Route path="/about" Component={About} />
            </Routes>
            <Footer />
        </>
    )
}

export default App