import './style.css';
import Input from '../Input';
import Button from '../Button';

function ProfileCreationCard() {
    return (
        <div className='white-card'>
            <div className='img-wrapper'>
                <img className='logo' src="public/squirrel-with-acorn.svg" alt=""/>
            </div>
            <h1 className='title'>Bem-vindo de Volta!</h1>
            <p className='sub-title'>
                Reconecte-se com sua comunidade online e compartilhe 
                momentos especiais com amigos e familiares
            </p>
            <form action="">
                <Input type="email" placeholder="Email"/>
                <Input type="password" placeholder="Senha"/>
                <a>Esqueci minha senha</a>
                <Button className='login-button' text="Login"/>
            </form>
            <p className='create-account'>Não possui conta?<a> Clique aqui</a></p>
            

        </div>
    )
}

export default ProfileCreationCard;