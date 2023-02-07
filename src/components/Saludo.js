function Saludo (){
    const user = "Jane Doe";

    const add = (n1, n2) => n1+n2;
    return (
     <>
    <h2 className="title">Hello { user }!</h2>
    <h2> {5 > 4 ? "Hola" : "Chau" }</h2>
    {10>20? <h4>Hola que tal?</h4> : <h5>Saludos no mas</h5>}
        {add (23,45)}
        
     <label htmlFor="test">Name:</label>
     <input type="text" id="test"></input>
     <hr />
     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
     </p>

     </>
    )
}

export default Saludo;