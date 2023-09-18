import './style.css'
import Button from '../../components/button'
import Forgotpass from '../../components/Forgotpass'
import Input from '../../components/input'
import Footerimg from '../../components/footerimg'



function Signin() {
return (
    <>
        <div className='sign-in'>
            <h1>Sign in</h1>
            <p>Sign in and start managing your candidates!</p>
            <Input type = "text" value="Login" />
            <Input type = "text" value="Password" />
            <Forgotpass inputtitle = "Remember me" forgottitle ="Forgot password?"/>
            <Button title="Login"/>
        </div>
        <Footerimg />
    </>
)
}



export default Signin