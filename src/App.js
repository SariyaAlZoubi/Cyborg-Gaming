import { Container } from "./components/index"
import { Header  } from "./sections/index"
import {Home , Profile} from './Pages/index'
import { BrowserRouter as Router ,Route,Routes } from "react-router-dom"
import './App.css'

export default function App() {
    return (
    <>
        <Router>
            <Header/>
            <Container>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/profile' element={<Profile/>}/>
                </Routes>
            </Container>
        </Router>
        {/* <Footer/> */}
    </>
    )
}