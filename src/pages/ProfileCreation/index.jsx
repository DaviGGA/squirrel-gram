import '../../css/login-signup-pages.css'
import PurpleCard from '../../components/PurpleCard'
import ProfileCreationCard from '../../components/ProfileCreationCard';

function ProfileCreation() {
    
    return (
        <div className="wrapper">
            <div className='container'>
                <PurpleCard/>
                <ProfileCreationCard/>
            </div>
        </div>
    )

}

export default ProfileCreation;