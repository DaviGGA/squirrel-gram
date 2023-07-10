import './style.css'

function Input(props) {

    const type = props.type ? props.type : "text"
    const placeholder = props.placeholder ? props.placeholder : "" 

    return(
        <input
            className="input"
            type={type}
            placeholder={placeholder}
        />
    )
}

export default Input;