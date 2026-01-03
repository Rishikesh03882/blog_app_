import React from 'react'
import { auth } from '../firebase'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { useNavigate } from 'react-router-dom';
import './Login.css'

const Login = () => {

    const navigate = useNavigate();
    const googleClick = async () => {
        try { // Add try...catch for better error handling
            const provider = new GoogleAuthProvider();
            const result = await signInWithPopup(auth, provider)

            console.log(result);
            // Optionally, you might want to save the user data here
            navigate('/blogs')
        } catch (error) {
            console.error("Google Sign-In Error:", error);
            // Handle the error (e.g., show a message to the user)
        }
    }
    return (
        <>
            <div style={{ display: 'flex', justifyContent: "center", alignItems: "center", gap: "5px", height: "100vh" }}>
               
                <img src="https://static.vecteezy.com/system/resources/previews/012/871/371/original/google-search-icon-google-product-illustration-free-png.png" alt="login-with-google" style={{ width: "5%" }} />
                <button
                    style={{ padding: "1.5rem", fontSize: "1.5rem", fontFamily: "sans-serif", fontWeight: "bold", color: "red", borderRadius: "5%" }}
                    onClick={googleClick} 
                >
                    Login with Google
                </button>

            </div>
        </>
    )
}

export default Login