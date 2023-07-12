import '../../css/login-signup-pages.css'
import SignUpWhiteCard from '../../components/SignUpWhiteCard'
import PurpleCard from '../../components/PurpleCard';

function SignUp() {
    return (
        <div className="wrapper">
            <div className='container'>
                <PurpleCard/>
                <SignUpWhiteCard/>
            </div>
        </div>
        
    )
}

export default SignUp;