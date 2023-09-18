import './style.css'



// eslint-disable-next-line react/prop-types
function Input({type,name,value,placeholder}) {
    return (
        <div className='input'>
            <input type ={type} placeholder={placeholder} name={name} value={value} />
        </div>
        
    )
}

export default Input