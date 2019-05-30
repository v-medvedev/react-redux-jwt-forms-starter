import axios from 'axios';
import { AUTH_USER, AUTH_ERROR } from './types';

export const signin = (formProps, cb) => async dispatch => {
    try {
        const response = await axios.post('http://localhost:3080/signin', formProps);
        dispatch({ type: AUTH_USER, payload: response.data.token });
        localStorage.setItem('token', response.data.token);
        cb();
    } catch (e) {
        dispatch({ type: AUTH_ERROR, payload: 'Invalid login credentials' });
    }
};

export const signup = (formProps, cb) => async dispatch => {
    try {
        const response = await axios.post('http://localhost:3080/signup', formProps);
        dispatch({ type: AUTH_USER, payload: response.data.token });
        localStorage.setItem('token', response.data.token);
        cb();
    } catch (e) {
        dispatch({ type: AUTH_ERROR, payload: 'Email is in use' });
    }
};

export const signout = () => {
    localStorage.removeItem('token');
    return {
        type: AUTH_USER,
        payload: ''
    };
};
