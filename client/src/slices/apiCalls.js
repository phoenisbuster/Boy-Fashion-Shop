import {loginStart, loginSuccess, loginFailure} from './userSlice'
import { publicRequest } from '../requestMethods'

export const login = async (dispatch, user) => {
    dispatch(loginStart())
    try {
        const res = await publicRequest.post('/auth/login', {email: user.email, password: user.password});
        dispatch(loginSuccess(res.data.user))
        localStorage.setItem('token', res.data.token);
        console.log(res.data.token)
    } catch(err){
        dispatch(loginFailure())
    }
}

