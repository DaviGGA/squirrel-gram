import '../../css/login-signup-pages.css'
import LoginWhiteCard from '../../components/LoginWhiteCard';
import PurpleCard from '../../components/PurpleCard';

function Login() {
    return (
        <div className="wrapper">
            <div className='container'>
                <PurpleCard/>
                <LoginWhiteCard/>
            </div>
        </div>
        
    )
}

export default Login;