//@ts-nocheck
import "./login.css"
import {useAuth} from "./AuthContext.tsx";
import {useState} from "react";



const Login = () =>
{
    const {login,setLogin}=useAuth();
    const [username,serUsername]=useState('');
    const [password,setPassword]=useState('')
    const  defaultUsername ='admin';
    const defaultPassword='admin';


    const handleSignIn =()=>
    {
        const url = `http://localhost:8000/mykeycloak/gettoken?username=${username}&password=${password}`;

        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to login');
                }
                return response.json();
            })
            .then(data => {
                // Assuming the API returns a token
                const token = data.token;
                setLogin(!login);
            })
            .catch(error => {
                console.error('Error:', error);
                alert('Failed to login. Please try again.');
            });
    };


    const handleUsernameChange = (event) => {
        serUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };




    return (
        <div className="LoginContainer w-[100vw] h-[100vh]">
                <div className="inputContainer flex flex-col gap-[16px] justify-center items-center h-[100%]">


                    <div className="flex flex-row justify-between items-center bg-[#F5F5F5] rounded-full pr-2">
                     <input type="text" placeholder="username"
                            className="  px-[24px] py-[16px] w-100
                            h-100 outline-none border-none bg-transparent"
                           value={username} onChange={handleUsernameChange}/>
                        <img src="./Login/person.svg" alt="" className="w-[24px] "/>
                    </div>

                    <div className="flex flex-row justify-between items-center bg-[#F5F5F5] rounded-full pr-2">
                     <input type="text" placeholder="password"
                            className="  px-[24px] py-[16px] w-100
                             h-100 outline-none
                             border-none bg-transparent"
                            value={password} onChange={handlePasswordChange}/>
                        <img src="./Login/eye.svg" alt="" className="w-[24px] cursor-pointer "/>
                    </div>

                    <button type="submit" className="bg-transparent border-[1px] solid border-[#f5f5f5] rounded-full px-[24px] py-[16px]
                     text-white text-[16px] w-[254px]" onClick={handleSignIn}>Sign in</button>

                </div>


        </div>
    );
};

export default Login;