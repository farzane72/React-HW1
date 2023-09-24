
function Button({text,fucButton,classMore}) {
  

    return (
      <button onClick={fucButton} className={`px-4 py-1 rounded  text-sm ${classMore} `}>
            {text}
         
      </button>
    )
  }
  
  export default Button
  