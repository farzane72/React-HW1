
import Button from "../components/button/button"
import TextField from "./TextField"
import { Svgs } from "../../public/svgs/svgs"
import { useRef } from "react"
import { useState } from "react"

function SignUp() {
  //first way let usernameRef=useRef()

  //---------------second way------------------------------------------------------------------------------------------------------------------
  // const [email,setEmail]=useState("")
  // const [username,setUsername]=useState("")
  // const [password,setPassword]=useState("")
  // const [rptPassword,setRptPassword]=useState("")

  //----------------third way---------------------------------------------------------------------------------------------------------------
  const [values,setValues]=useState({
    
    email:"",
    username:"",
    password:"",
    rptPassword:""
  })
  const inputs=[
    {
      id:1,
      name:"email",
      type:'email',
      placeholder:'email',
      svg:Svgs.email,
      errorMessage:"it should be valid email adress",
      required:true,
      


    },
    {
      id:2,
      name:"username",
      type:'text',
      placeholder:'username',
      svg:Svgs.users,
      errorMessage:'Username should be 3-16 characters and shouldnt include any special charactors!',
      pattern:"^[a-zA-Z0-9]{3,16}$",

    },
    {
      id:3,
      name:"password",
      type:'password',
      placeholder:'password',
      svg:Svgs.password,
      errorMessage:"Password should be 4-20 charactors and include at least 1 letter ,1 number and 1 special character",
      required:true,
      pattern:`^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{4,20}$`


    },
    {
      id:4,
      name:"rptPassword",
      type:'password',
      placeholder:'rptPassword',
      svg:Svgs.rptPassword,
      errorMessage:"Password don't match!",
      required:true,
      pattern:values.password


    },

    
  ]
  function handleOnChange(e){
    setValues({...values,[e.target.name]:e.target.value})
    
  }
    
  
    
  
 

  function handleSubmit(e){
    e.preventDefault()
    // console.log(usernameRef.current);


    // let dataForm={
    //   email,
    //   username,
    //   password,
    //   rptPassword

   // }
    //console.log(dataForm);


    console.log(values);


  }

    return (
      <div className=" ">
        <div className="sm:min-w-[400px] md:min-w-[500px] mx-auto border rounded-md bg-cyan-100 p-4    ">

         <div className="flex gap-2 justify-center">
          <Button text="Sign In" classMore="text-cyan-900 " />
          <Button text="Sign Up" classMore="bg-cyan-900 text-white" />
         

         </div>
         <form  className="flex flex-col gap-10  mt-4 " onSubmit={e=>handleSubmit(e)}>
          {/* first way */}
          {/* <TextField type="email" placeholder="email" svg={Svgs.email} refer={usernameRef} /> */}


          {/* ---------------------second way-------------------------------------------------------------------------------------------------- */}

          {/* <TextField type="email" placeholder="email" svg={Svgs.email} value={email}  onchange={(e)=>setEmail(e.target.value)}
            />
          <TextField type="text" placeholder="username" svg={Svgs.users} value={username}  onchange={(e)=>setUsername(e.target.value)}/>
          <TextField type="password" placeholder="password" svg={Svgs.password} value={password}  onchange={(e)=>setPassword(e.target.value)} />
          <TextField type="password" placeholder="RptPassword" svg={Svgs.rptPassword} value={rptPassword}  onchange={(e)=>setRptPassword(e.target.value)} />
           */}


          {/* //-----------------------------third way------------------------------------------------------------------------------------------ */}


          {/* <TextField type="email" placeholder="email" svg={Svgs.email} value={values.email}  onchange={(e)=>setValues({...values,email:e.target.value})}
            />
          <TextField type="text" placeholder="username" svg={Svgs.users} value={values.username}  onchange={(e)=>setValues({...values,username:e.target.value})}/>
          <TextField type="password" placeholder="password" svg={Svgs.password} value={values.password}  onchange={(e)=>setValues({...values,password:e.target.value})} />
          <TextField type="password" placeholder="RptPassword" svg={Svgs.rptPassword} value={values.rptPassword}  onchange={(e)=>setValues({...values,rptPassword:e.target.value})} />
           */}
          {/* //-----------------------------final way--------------------------------------------------------- */}

          { inputs.map((input)=>(
             <TextField {...input}  key={input.id} 
             value={values[input.name]} onChange={(e)=>handleOnChange(e)}/>
          )
            

          )
        }
         
          
          <Button  text="Sign Up" classMore="bg-cyan-900 text-white" />
          
          
          </form>
           
        </div>
      </div>
    )
  }
  
  export default SignUp
  