import React, { useState, useEffect } from "react"
import { NavLink , useNavigate} from 'react-router-dom';
import axiosInstance from "../utils/axios"
//import { loginAction } from "../redux/actions/loginAction"
//import { useHistory, Link } from "react-router-dom"
// import Header from "./Header";
import { useSelector, useDispatch } from "react-redux"

const Login = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  })

  
  const dispatch = useDispatch()

  const [errorMsg, setErrorMsg] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  // useEffect(() => {
  //   // if (error) {
  //   //   console.log("error", error)
  //   //   setErrorMsg(error.msg)
  //   // }
  // }, [error])

  // useEffect(() => {
  //   // if (data) {
  //   //   if (data.data) {
  //   //     setForm({ email: "", password: "" })
  //   //     console.log("data", data)
  //   //     history.push("/")
  //   //   }
  //   // }
  // }, [data])

  useEffect(() => {
    const token = localStorage.getItem("token");
    if(token){
        navigate("/", {replace:true});
    }
   },[]);

  const handleChange = (e) => 
  {
    
    const value = e.target.value
    setForm({
      ...form,
      [e.target.name]: value,
    })
    console.log(form)
  }

  const submitHandler = () => 
  {
    if(form.email!="" && form.password!="")
    {
      console.log("login submitted")
      const postBody = {
        email:form.email,
        password:form.password
      }
      // try
      // {
        dispatch({
          type:"LoginRequest"
        })

        axiosInstance()
        .post("/login", postBody)
        .then((response) => 
        {
          localStorage.token = response.data.token;
          console.log("response from LOGINAction", response.data);     
          dispatch({
            type:"LoginSuccess",
            payload: response.data.data
          })
          setError(false);
        setSuccess(true);
        setTimeout(() => {
          navigate("/")}, 1000);
          
        })
        .catch((error) => {
          console.log("error from LOGINAction", error)
          dispatch({
            type:"LoginFailure",
            payload: error
          })
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
            "https://images.unsplash.com/photo-1541945595194-4e2320efa02f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80" +
            ")",
        }}
      ></div>
      <div className='contents order-1 order-md-2'>
        <div className='container'>
          <div className='row align-items-center justify-content-center' style={{margin: "0px 350px"}}>
            <div className='col-md-7'>
              {/* {data ? `Welcome ${data.username}` : "Login"} */}
              <h4 className='mb-4'>
                <center>Login</center> 
              </h4>
              {success ? (
                <div class='alert alert-success' role='alert'>
                  Login Successfull!
                </div>
              ) : null}
              {error ? (
                <div class='alert alert-danger' role='alert'>
                  {errorMsg}
                </div>
              ) : null}

              <form action='#' method='post'>
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
                  <p>You agree to the Terms & Conditions by Logging in.</p>
                  {/* <label className="control control--checkbox mb-0"><span className="caption">Remember me</span>
                  <input type="checkbox" checked="checked"/>
                  <div className="control__indicator"></div>
                </label> */}
                  {/* <span className="ml-auto"><a href="#" className="forgot-pass">Forgot Password</a></span>  */}
                </div>

                <input
                  type='button'
                  value='Sign In'
                  disabled={!form.email || !form.password}
                  className='btn btn-block btn-primary'
                  onClick={submitHandler}
                />
                <br />
                {/* {loading ? <p>Loading..</p> : null} */}
                <p className='text-center'>
                  Don't have an account? <a href='/register'>Register</a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
