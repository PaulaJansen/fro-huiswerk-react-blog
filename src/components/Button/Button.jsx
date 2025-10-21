import './Button.css'

function Button({className, type, label, onClick}) {
    return (
        <button className={className} type={type} onClick={onClick}>
            {label}
        </button>
    )
}

export default Button;