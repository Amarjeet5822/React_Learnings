import React, { useState, useEffect } from 'react';
import authService from './appwrite_service/auth';
import './App.css';
import { useDispatch } from 'react-redux';
import { login, logout } from './store/authStore';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

function App() {
    //   console.log(import.meta.env.VITE_APPWRITE_URL)
    const [loading, setLoading ] = useState(true);
    const dispatch = useDispatch();

    useEffect(()=>{
        authService.getCurrentUser()
        .then((userData)=>{
            if (userData) {
                dispatch(login({userData}))
            } else {
                dispatch(logout())
            }
        }) // .catch I have to mention
        .finally(()=> {setLoading(false)})

        },[])
    
    return !loading ? (
        <div>
            <Header />
            <main>

            </main>
            <Footer />
        </div>
    ) : null

}
export default App
