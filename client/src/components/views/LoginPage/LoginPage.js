import React, {useState} from 'react'
import {useDispatch} from 'react-redux'; //redux 사용
import { loginUser } from '../../../_actions/user_actions';
import {useNavigate} from 'react-router-dom';
import Auth from "../../../hoc/auth";

function LoginPage() {

    const dispatch = useDispatch();
    let navigate = useNavigate();

    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")

    const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value)
    }
    const onPasswordHandler = (event)=>{
        setPassword(event.currentTarget.value)
    }

    
    const onSubmitHandler = (event) =>{
        event.preventDefault(); //리프레시 되는 것을 방지

        let body = {
            email : Email,
            password : Password
        }

        dispatch(loginUser(body))
        .then(response =>{
            if(response.payload.loginSuccess) {
                navigate('/');
            }else {
                alert('Error');
            }
        })
    }


    return (
        <div style = {{
            display : 'flex', justifyContent:'center', alignItems : 'center',
            width: '100%' , height:'100vh'
        }}>
            <form style={{ display:'flex', flexDirection:'column'}}
                onSubmit={onSubmitHandler}
            >
                <label>Email</label>
                <input type= "email" value = {Email} onChange={onEmailHandler}></input>
                <label>Password</label>
                <input type= "password" value ={Password} onChange={onPasswordHandler}></input>
                <br />
                <button onClick={onSubmitHandler}>
                    Login
                </button>
            </form>


        </div>
    )
}

export default Auth(LoginPage, false);
