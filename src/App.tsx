import React from "react"
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import "./styles.css"

const App = () =>{
    const status: string = "I am working, super :)"

    return(
       <>
        <h1>{status}</h1>
        <Header />
        <Footer />
       </>
    )
}

export default App