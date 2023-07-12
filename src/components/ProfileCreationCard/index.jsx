import '../../css/login-signup-components.css'
import './style.css'
import Input from '../Input';
import Button from '../Button';

function ProfileCreationCard() {
    return (
        <div className='white-card'>
            
            <h1 className='title'>Estamos quase lá!</h1>
            <p className='sub-title'>
            Falta somente cadastrarmos algumas informações sobre você.
            </p>
            <div className='img-wrapper'>
                <img className='profile-picture' src="public/blank-profile-picture.svg" alt=""/>
            </div>
            <form action="">
                <div className='name-div'>
                    <div className='name'>
                        <Input className="input-height w-25" type="text" placeholder="Nome"/>
                    </div>
                    <div className='surname'>
                        <Input className="input-height w-75" type="text" placeholder="Sobrenome"/>
                    </div>                         
                </div>            
                <Input className="input-height" type="text" placeholder="Nome de usuário"/>
                <Input className="input-height" type="date" placeholder="Data de nascimento"/>
                <Button className='login-button' text="Cadastrar"/>
            </form>                    
        </div>
    )
}

export default ProfileCreationCard;