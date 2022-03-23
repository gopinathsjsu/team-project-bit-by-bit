import React, { useEffect, useState } from "react"
import { NavLink , useNavigate} from 'react-router-dom';
import axiosInstance from "../utils/axios"
//import { registerAction } from "../redux/actions/registerAction"
// import { GlobalContext } from "../context/Provider"
//import { useHistory, Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"

const Register = () => {
  
  const navigate = useNavigate();
  // const { auth } = authState
  // const { loading, error, data } = auth

  //const history = useHistory()

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  })

  const [errorMsg, setErrorMsg] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  // useEffect(() => {
  //   if (error) {
  //     console.log("error", error)
  //     setErrorMsg(error.msg)
  //   }
  // }, [error])

  // useEffect(() => {
  //   if (data) {
  //     setForm({ username: "", email: "", password: "" })
  //     // setTimeout(() => {
  //     //   history.push("/login")
  //     // }, 2000)
  //   }
  // }, [data])

  const handleChange = (e) => {
    const value = e.target.value
    setForm({
      ...form,
      [e.target.name]: value,
    })
  }

  const submitHandler = (e) => 
  {

    if(form.email!="" && form.password!="" && form.username!="")
    {
      axiosInstance()
      .post("/signUp", form)
      .then((response) => 
      {
        console.log("response from registerAction", response.data)
        setError(false);
        setSuccess(true);
        setTimeout(() => {
          navigate("/login")}, 2000);
      })
      .catch((error) => {
        console.log("error from registerAction", error);
        setError(true);
        setSuccess(false);
        setErrorMsg(error.response.data.msg);
      })
      
    }
  
  }

  return (
    <div className='d-lg-flex half'>
      <div
        className='bg order-2 order-md-1'
        style={{
          backgroundImage:
            "url(" +
            "https://images.pexels.com/photos/7585763/pexels-photo-7585763.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" +
            ")",
        }}
      ></div>
      <div className='contents order-1 order-md-2'>
        <div className='container'>
          <div className='row align-items-center justify-content-center' style={{margin: "0px 350px"}}>
            <div className='col-md-7'>
              <h4 className='mb-4'>
                <center>Register</center> 
              </h4>
              {success ? (
                <div class='alert alert-success' role='alert'>
                  Account Created Successfully!
                </div>
              ) : null}
              {error ? (
                <div class='alert alert-danger' role='alert'>
                  {errorMsg}
                </div>
              ) : null}
              {/* <p className="mb-4">Lorem ipsum dolor sit amet elit. Sapiente sit aut eos consectetur adipisicing.</p> */}
              <form action='#' method='post'>
                <div className='form-group username'>
                  <label for='username'>Fullname</label>
                  <input
                    type='text'
                    className='form-control'
                    style={{ fontWeight: "normal" }}
                    placeholder='Enter your Name'
                    id='name'
                    name='username'
                    value={form.username}
                    onChange={handleChange}
                  />
                </div>
                <div className='form-group email'>
                  <label for='email'>Email</label>
                  <input
                    type='email'
                    className='form-control'
                    placeholder='your-email@gmail.com'
                    id='email'
                    name='email'
                    value={form.email}
                    onChange={handleChange}
                  />
                </div>
                <div className='form-group password mb-3'>
                  <label for='password'>Password</label>
                  <input
                    type='password'
                    className='form-control'
                    placeholder='Enter Password'
                    id='password'
                    name='password'
                    value={form.password}
                    onChange={handleChange}
                  />
                </div>

                <div className='d-flex mb-2 align-items-center'>
                  <p>You agree to the Terms & Conditions by signing up.</p>
                  {/* <label className="control control--checkbox mb-0"><span className="caption">Remember me</span>
                  <input type="checkbox" checked="checked"/>
                  <div className="control__indicator"></div>
                </label> */}
                  {/* <span className="ml-auto"><a href="#" className="forgot-pass">Forgot Password</a></span>  */}
                </div>

                <input
                  type='button'
                  value='Sign up'
                  onClick={submitHandler}
                  disabled={!form.username || !form.email || !form.password}
                  className='btn btn-block btn-primary'
                />
                <br />
                  <p className='text-center'>
                    Already have an account? <NavLink to='/login'>Login</NavLink>
                  </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
