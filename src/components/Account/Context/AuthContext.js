import React, { createContext, useState } from 'react';

export const AuthContext = createContext()

function AuthContextProvider({ children }) {
    const [login, setLogin] = useState('login')
    const [number, setNumber] = useState()
    const [alert, setAlert] = useState(false)
    const [account, setAccount] = useState({
        name: '',
        password: ''
    })
    let keyNumber;
    let keyBackspace;
    const [keyRandom, setKeyRandom] = useState(String(Math.ceil(Math.random() * 1000000).toFixed(0)))
    const [keyInput, setKeyInput] = useState()
    const [keycode, setKeycode] = useState({
        one: '',
        two: '',
        three: '',
        four: '',
        five: '',
        six: ''
    })
    const AuthContextData = {
        login, setLogin,
        number, setNumber,
        account, setAccount,
        alert, setAlert,
        keycode, setKeycode,
        keyRandom, setKeyRandom,
        keyInput, setKeyInput,
        keyNumber, keyBackspace
    }

    return (
        <AuthContext.Provider value={AuthContextData}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;