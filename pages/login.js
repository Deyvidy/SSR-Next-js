import React, { useEffect } from 'react';
import Login from '../components/register/Login';
import { useDispatch, useSelector } from 'react-redux'
import Router from 'next/router'
import { login } from "../state/actions/AuthActionCreator";

import Layout from '../components/MyLayout.js'

function LoginPage ( ) {
    const  logado  = useSelector( state => state.AuthReducer)
    const state = useSelector( state => state)
    const  dispatch  = useDispatch();

    useEffect(() => {
        console.log(state);
        console.log(dispatch)
        if(logado.isLoggedIn === true){
            Router.push('/');
        }
    },[])

    const handleLoginSubmit = value => dispatch(login(value))

    const teste = () => { 
        // dispatch(pokemon(value))
    }

    return (        
        <Layout title={'Login'} description={'This is My Login page'}>            
            <Login onChange={handleLoginSubmit}/> 
            <button onClick={teste}>
                teste
            </button>  
        </Layout>        
    )
}

LoginPage.getInitialProps = async function( context  ) {
    return {
        data: {name:'teste'}
    };
};

export default LoginPage;

