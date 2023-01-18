import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import MainPage from "./pages/mainPage/MainPage";
import ContactsPage from "./pages/contactsPage/ContactsPage";
import AboutPage from "./pages/aboutPage/AboutPage";
import NavBar from "./components/navBar/NavBar";
import LastPage from './pages/lastPage/LastPage';

function App() {
    return (
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route index element={<MainPage/>}/>
                <Route path="/contacts" element={<ContactsPage/>}/>
                <Route path="/about" element={<AboutPage/>}/>
                <Route path='/last' element={<LastPage/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
