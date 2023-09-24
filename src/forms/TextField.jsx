import { useState } from "react"

function TextField(props) {
  const [focused,SetFocused]=useState(true)
  // const [invalid,SetInvalid]=useState()
   const  {onChange,svg,errorMessage,...input}=props
  //TextField({value,onChange,input}) {
function handleBlur(e){
  SetFocused(true)
}
// function handleInvalid(e){
//   SetInvalid(true)
// }

    return (
      <div className=' flex flex-col gap-2 relative'>
         {/* <input type={input.type} placeholder={input.placeholder} name={input.name} value={value} onChange={onChange}
          className={`pl-8 py-2 bg-white rounded-sm placeholder:pl-1 placeholder:capitalize outline-none ${{focused} ?" border border-red-600":""}`} /> */}

         <input {...input}   onChange={onChange} onBlur={handleBlur} focused={focused.toString()}
          className={`pl-8 py-2 bg-white rounded-md placeholder:pl-1  placeholder:capitalize outline-none border invalid:border-red-300 peer `}/>   
         <span className="absolute left-2 top-2">{svg}</span>
         
          
          <span   className={`absolute left-2 top-10 text-[12px] text-red-600 invisible peer-invalid:visible `}> {errorMessage}</span>
         
         
      </div>
    )
  }
  
  export default TextField
  
  // invalid:border-red-300 peer
  //peer-invalid:visible
//invalid[focused="true"]
//peer-[&:not(:placeholder-shown):not(:focus):invalid]:block