import Header from "./components/Header"
import Footer from "./components/Footer"
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