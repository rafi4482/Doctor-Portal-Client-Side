import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';


const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [loginError, setLoginError] = useState('');
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';


    const handleLogin = data => {
        console.log(data);
        setLoginError('');
      
    }

    return (
        <div className='h-[800px] flex card-body items-center text-center'>
            <div className='w-96 p-7 '>
                <h2 className='text-xl text-center mt-8'>Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Email</span></label>
                        <input type="text"
                            {...register("email", {
                                required: "Email Address is required"
                            })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Password</span></label>
                        <input type="password"
                            {...register("password", {
                                required: "Password is required",
                                minLength: { value: 6, message: 'Password must be 6 characters or longer' }
                            })}
                            className="input input-bordered w-full max-w-xs" />
                              <label className="label text-center justify-center"> <span className="label-text">Forgot Password?</span></label>
                        {errors.password && <p className='text-red-600 '>{errors.password?.message}</p>}
                  
                    </div>
                    <input className='btn btn-warning w-1/2' value="Login" type="submit" />
                    
                    <div>
                        {loginError && <p className='text-red-600 text-center'>{loginError}</p>}
                    </div>
                </form>
                <p className='text-center mt-6'>New to Doctors Portal? <Link className='text-secondary' to="/signup">Create new Account</Link></p>
                <div className="divider">OR</div>
                <button className='card-body btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;