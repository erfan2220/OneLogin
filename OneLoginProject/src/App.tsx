//@ts-nocheck
import Login from "./Pages/login/login";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Menu from "./Components/Menu/Menu";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter, Routes, Route, Outlet, useNavigate } from 'react-router-dom';
import {useState} from "react";
import {AuthProvider,useAuth} from "./Pages/login/AuthContext";


const Layout =({ repeatedLogin, count, setCount })=>
{

    const { login, setLogin } = useAuth()
    const navigate = useNavigate();

    if (!login && repeatedLogin)
    {
        return <Login />;
    }

    if (!login && count === 1)
    {
        setCount(2);
        return <Login />;
    }


    return(
        <div>
            <Menu/>
            <Outlet/>
            <Footer/>
        </div>
    )
}

function App() {
    const [repeatedLogin, setRepeatedLogin] = useState(true);
    const [count, setCount] = useState(1);


  return (
    <AuthProvider>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={
                    <Layout repeatedLogin={repeatedLogin}
                            setRepeatedLogin={setRepeatedLogin}
                            setCount={setCount}
                            count={count}/>}>
                    <Route index element={<Dashboard />} />
                    <Route path="/dashboard" element={<Dashboard />} />


                </Route>
            </Routes>
        </BrowserRouter>
    </AuthProvider>
  )
}

export default App
