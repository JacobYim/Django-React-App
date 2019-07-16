import * as actionTypes from './actionTypes'
import Axios from 'axios';
// this file let you know which changes gonna be happened
export const authStart = () => {
    // taking no parameters
    return {
        // set the type of stat to AUTH_START
        type : actionTypes.AUTH_START
    }
}

export const authSuccess = token => {
    //taking the token
    return {
        // set the type of state to AUTH_SUCCESS
        type : actionTypes.AUTH_SUCCESS,
        // set the coming token to current state's token
        token : token
    }
}

export const authFail = error => {
    //taking the error
    return {
        // set the type of state to AUTH_SUCCESS
        type : actionTypes.AUTH_Fail,
        // set the coming token to current state's token
        error : error
    }
}

export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationDate')
    return {
        type : actionTypes.AUTH_LOGOUT
    };
}

export const checkAuthTimeout = expirationTime => {
    return dispatch => {
        // setTimeout function is excuting code with delay
        // setInterval() function is executiong the code with the interval
        setTimeout (()=> {
            dispatch(logout())
        }, expirationTime * 1000)
    }
}

export const authLogin = (username, password) => {
    // here the dispatch means reflecting the change to the root of ReactDom
    return dispatch => {
        dispatch(authStart());
        axios.post('http://localhost:8000/rest-auth/login',{
            username : username,
            password : password
        })
        .then(res => {
            const token = res.data.key;
            const expirationDate = new Date (new Date() + 3600 * 1000);

            // localStorage : perminently stay in browser until deleting manually
            // sessionStorage : temporary stay in browser until deleting manually or closing browser
            localStorage.setItem('token' , token);
            localStorage.setItem('expirationDate' , expirationDate);
            dispatch(authSuccess(token));

        })
        .catch(err => {
            dispatch(authFail(err))
        })
    }
}

export const authSignup = (username, email, password1, password2) => {
    // here the dispatch means reflecting the change to the root of ReactDom
    return dispatch => {
        dispatch(authStart());
        axios.post('http://localhost:8000/rest-auth/registration/',{
            username : username,
            email : email,
            password1 : password1,
            password2 : password2
        })
        .then(res => {
            const token = res.data.key;
            const expirationDate = new Date (new Date() + 3600 * 1000);

            // localStorage : perminently stay in browser until deleting manually
            // sessionStorage : temporary stay in browser until deleting manually or closing browser
            localStorage.setItem('token' , token);
            localStorage.setItem('expirationDate' , expirationDate);
            dispatch(authSuccess(token));
            dispatch(checkAuthTimeout(3600));
        })
        .catch(err => {
            dispatch(authFail(err))
        })
    }
}



