import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const Login = () => {
    const[user,setUser] = useState(null)
    const { signIn, googleLogin } = useContext(AuthContext)
    const location = useLocation()

    const navigate = useNavigate()
    // console.log('login',location);


    const handleLogin = e => {
        e.preventDefault()
        //console.log(e.currentTarget);
        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')
        // console.log(email,password);
        signIn(email, password)
            .then(result => {
                const loginUser = result.user
                console.log(result.user);
                setUser(loginUser)
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                console.error(error)
            })
    }

    const siteLogin = (media) => {
        media()
            .then(res => {
                const loginUser = result.user
                console.log(res);
                setUser(loginUser)
                navigate(location?.state ? location.state : '/')
    })
    .catch(err=>{
        console.log(err);
    })

}

return (
    <div>

        <div>
            <h1 className='text-4xl my-6 text-center font-semibold text-rose-400'>Please Login</h1>

            <form onSubmit={handleLogin} className="md:w-3/4 lg:w-1/2 mx-auto">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-error text-white font-bold text-lg">Log in</button>
                </div>
            </form>
            <div className='text-center mt-3'>
                <button onClick={() => siteLogin(googleLogin)} className='btn btn-error text-white'>Continue with Google</button>
            </div>
            <p className='text-center my-4'>Don't Have an account? <Link className='text-rose-500 font-semibold' to="/register">SignUp Now.</Link> </p>
        </div>
    </div>
);
};

export default Login;