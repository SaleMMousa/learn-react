import './style.css'


// eslint-disable-next-line react/prop-types
function Forgotpass({inputtitle,forgottitle}) {
    return (
        <div className='forgot'>
            <div className='chebox'>
                <input type="checkbox"/>
                <label>{inputtitle}</label>
            </div>
            <div>
                <a href="#">{forgottitle}</a>
            </div>
        </div>
        
    )
}

export default Forgotpass
