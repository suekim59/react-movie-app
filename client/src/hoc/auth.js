import React, { useEffect } from 'react';
import {useDispatch} from 'react-redux';
import {auth} from '../_actions/user_actions';
import { useNavigate } from 'react-router-dom';

export default function (SpecificComponent, option, adminRoute = null) {
    //option::null : 아무나 들어갈 수 있는 페이지
    //option::true : 로그인 한  사람만 들어갈 수 있는 페이지
    //option::false : 로그인 한 사람은 출입이 불가능한 페이지
    function AuthenticationCheck(props) {

        const dispatch = useDispatch();
        let navigate = useNavigate();

        useEffect(() => { 
            dispatch(auth()).then(response => {
                console.log(response)
                //로그인 하지 않은 상태
                if(!response.payload.isAuth) {
                    if(option){
                        navigate('/login')
                    }
                //로그인 한 상태 
                }else {
                    if(adminRoute && !response.payload.isAdmin){
                        navigate('/')
                    }else {
                        if(option === false){
                            navigate('/')
                        }
                    }
            }})
        }, [])
        return (
            <SpecificComponent />
        )
    }
    return AuthenticationCheck
}