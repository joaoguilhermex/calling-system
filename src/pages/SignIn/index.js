import './signin.css'

import logo from '../../assets/logo.png'
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/auth';

export default function SignIn(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { signIn, loadingAuth } = useContext(AuthContext);

    function handleSignIn(e){
        e.preventDefault();

        if(email !== '' && password !== ''){
            signIn(email, password);
        }
    }

    return(
        <div className='container-center'>
            <div className='login'>
                <div className='login-area'>
                    <img src={logo} alt='Call system logo'/>
                </div>

                <form onSubmit={handleSignIn}>
                    <h1>Sign In</h1>
                    <input 
                        type='text' 
                        placeholder='email@email.com'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <input 
                        type='password' 
                        placeholder='******'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <button type='submit'>{loadingAuth ? 'Loading...' : 'Access'}</button>
                </form>

                <Link to='/register'>Create account</Link>
                
            </div>
        </div>
    );
}