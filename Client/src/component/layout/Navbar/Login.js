import {useState,useEffect,useRef} from 'react'
import {useNavigate} from 'react-router-dom'
import login_styles from './login.module.css'
import axios from 'axios'
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {FaRegUserCircle} from 'react-icons/fa'
export const Login = () => {
// toast.configure();
    const navigate = useNavigate()
    const [user,setUser] = useState(JSON.parse(localStorage.getItem('user')))

    const [registerForm,setRegisterForm] = useState(false)

    const login = async (e) => {
        e.preventDefault()
        const data = {email:e.target.email.value,password:e.target.password.value}
        console.log(data)
        await axios.post('/api/auth/login',data).then((res)=>{
            console.log(res.data)
            if(res.data.success){
                setUser(res.data.user);
                localStorage.setItem('user',JSON.stringify(res.data.user))
            }
            toast.success(res.data.message)
        }).catch((err)=>{console.log(err)})
    }

    useEffect(()=>{
        setUser(JSON.parse(localStorage.getItem('user')))
        setRegisterForm(false)
    },[])


    const logout = () => {
        localStorage.clear()
        setUser()
    }

    const viewregister = () => {
        if(!user){
            setRegisterForm(!registerForm)
        }
        else{
            toast.warning("Session Exists")
        } 
    }

    const newuser = async(e) => {
        e.preventDefault()
        const data = {name:e.target.name.value,email:e.target.email.value,password:e.target.password.value,phone:e.target.phone.value,address:e.target.address.value}
        console.log(data)
        await axios.post('/api/auth/register',data).then((res)=>{
            console.log(res.data)
            if(res.data.success===true){
                setRegisterForm(false)
                if(res.data.user){
                    setUser(res.data.user);
                    localStorage.setItem('user',JSON.stringify(res.data.user))
                }
            }
            toast.success(res.data.message)
        }).catch((err)=>{console.log(err)})
    }



    return (
        <>
        {console.log(user)}
        {registerForm ? 
        
        <form onSubmit={newuser} className={`${login_styles.loginform} active`} >
        <h3>Sign Up</h3>
        <input type="text" id="name" placeholder="Enter your name" className={login_styles.box}/>
        <input type="email" id="email" placeholder="Enter your email" className={login_styles.box}/>
        <input type="password" id="password" defaultValue="" placeholder="Enter your password" className={login_styles.box}/>
        <input type="text" id="phone" placeholder="Enter your Mobile No" className={login_styles.box}/>
        <input type="text" id="address" placeholder="Enter your Address" className={login_styles.box}/>
        <input type="submit" value="Register" className={login_styles.btn}/>
        <p>Already have an account? <a onClick={viewregister} href='#login'>Login</a></p>
      </form>
        
        :   user ?


        //profile
        
        <div className={`${login_styles.loginform} active`}>
            <div className={login_styles.userform}>
            <p className={login_styles.userfornt}><FaRegUserCircle/></p>
        <p >{user.name}</p>
        </div>
        <p>{user.phone}</p>
        <p>{user.address}</p>
        <p className={login_styles.logout}>
        <button onClick={logout}> Logout </button></p>
        </div> 
        
        : 

        //login
        <form onSubmit={login} className={`${login_styles.loginform} active`} >
        <h3>Login form</h3>
        <input type="email" id="email" placeholder="Enter your email" className={login_styles.box}/>
        <input type="password" id="password" placeholder="Enter your password" className={login_styles.box}/>
        {/* <div className={login_styles.remember}>
            <input type="checkbox" name="" id="remember-me"/>
            <label for="remember-me">Remember me</label>
        </div> */}
        <input type="submit" value="Login now" className={login_styles.btn}/>
        <p>Forgot password? <a href='#pwd'>click here</a></p>
        <p>Don't have an account? <a onClick={viewregister} href='#register'>Register</a></p>
      </form>}
      </>
        
    )
}