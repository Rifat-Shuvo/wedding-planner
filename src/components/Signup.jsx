import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const Signup = () => {
    const[loginError, setLoginError]=useState('')
    const[signupSucess, setSignupSucess] = useState('')
    const { createUser,googleLogin } = useContext(AuthContext)

    const handleRegister = e => {
        
        e.preventDefault()
        // console.log(e.currentTarget);
        const form = new FormData(e.currentTarget)
        const name = form.get('name')
        const email = form.get('email')
        const password = form.get('password')
        // console.log(email, password,name);
        setLoginError('')
        setSignupSucess('')

        if (password.length<6) {
            setLoginError('password at least 6 charactes')
            return
        }
        else if(!/[A-Z]/.test(password)){
            setLoginError('password must have capital letter')
            return
        }
        else if(!/[!@#$%^&*()\-_.+]/.test(password)){
            setLoginError('password must have special Character')
            return
        }

        createUser(email, password)
            .then(res => {

                console.log(res.user);
                setSignupSucess('Signup Sucessfull.')
            })
            .catch(error => {
                console.error(error)
                setLoginError(error.message)
            })
    }


    const siteLogin = (media) => {
        setLoginError('')
        setSignupSucess('')
        media()
            .then(res => {
                console.log(res);
                setSignupSucess('Signup Sucessfull.')
    })
    .catch(err=>{
        console.log(err);
        setLoginError(err.message)
    })

}

    return (
        <div>
            <div>
                <h1 className='text-4xl my-6 text-center font-semibold text-rose-400'>Please SignUp</h1>

                <form onSubmit={handleRegister} className="md:w-3/4 lg:w-1/2 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Full Name</span>
                        </label>
                        <input type="text" placeholder="Full Name" name="name" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="Email" name="email" className="input input-bordered" required />
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
                    {
                    loginError && <p className='text-red-700 font-bold'>{loginError}</p>
                }
                {
                    signupSucess && <p className='text-green-700 font-bold'>{signupSucess}</p> 
                }
                    <div className="form-control mt-6">
                        <button className="btn btn-error text-white font-bold text-lg">Sign Up</button>
                    </div>
                </form>
                <div className='text-center mt-3'>
                <button onClick={() => siteLogin(googleLogin)} className='btn btn-error text-white'>Continue with Google</button>
                </div>
                <p className='text-center my-4'>Already Have an account? <Link className='text-rose-500 font-semibold' to="/login">Login Now.</Link> </p>

                
            </div>
        </div>
    );
};

export default Signup;