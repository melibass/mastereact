function Greeting({text, children}){
    console.log(children)
    return (
     <>
    <h2 className="title">{text}</h2>
 

    
     <hr />
     
     {children}

     </>
    )
}

Greeting.defaultProps = {
    text: "valor generico"
}

export default Greeting;