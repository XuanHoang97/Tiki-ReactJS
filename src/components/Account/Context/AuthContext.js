import React, { createContext, useState } from 'react';

export const AuthContext = createContext()

function AuthContextProvider({ children }) {
    const [login, setLogin] = useState('login')
    const [number, setNumber] = useState()
    const [showModal, setShowModal] = useState(false);
    const [nameAccount, setNameAccount] = useState(false);
    const [alert, setAlert] = useState(false)
    const [account, setAccount] = useState({
        name: '',
        password: ''
    })
    const AuthContextData = {
        login,
        setLogin,
        number,
        setNumber,
        account,
        setAccount,
        showModal,
        setShowModal,
        nameAccount,
        setNameAccount,
        alert,
        setAlert
    }

    return (
        <AuthContext.Provider value={AuthContextData}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;