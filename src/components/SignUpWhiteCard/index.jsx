import '../../css/login-signup-components.css'
import Input from '../Input';
import Button from '../Button';

function SignUpWhiteCard() {
    
    return (
        <div className='white-card'>
            <div className='img-wrapper'>
                <img className='logo' src="public/squirrel-with-acorn.svg" alt=""/>
            </div>
            <h1 className='title'>Crie sua conta aqui</h1>
            <p className='sub-title'>
            Compartilhe momentos, faça novas amizades e descubra conteúdos inspiradores.
            </p>
            <form action="">
                <Input type="email" placeholder="Email"/>
                <Input type="password" placeholder="Senha"/>
                <Input type="password" placeholder="Confirme sua senha"/>
                <Button className='signup-button' text="Registrar"/>
            </form>
            <p className='login'>Já possui conta?<a> Clique aqui</a></p>           
        </div>
    )
    
}

export default SignUpWhiteCard;