import React from "react";
import "./Form.css"

function Form() {
    // Creamos el estado de nuestro formulario
    const [ userNameState, setUserNameState ] = React.useState("");
    const [ passwordState, setPasswordState ] = React.useState("");
    const myForm = React.useRef( null );

    const userNameChanges = (e) => {
       setUserNameState(e.target.value); 
    }

    const passwordChanges = (e) => {
        setPasswordState(e.target.value); 
    }

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(userNameState);
        console.log(passwordState);
        setUserNameState("");
        setPasswordState("");
    }

    return(
        <section className="container">
            <div className="prueba">
            
                <form ref={myForm} className="form" onSubmit={onSubmit}>
                <h2 className="title">Database connections</h2>
                    <label className="formulario-label">Username for the connection</label>
                    <input 
                        type="text"
                        className="formulario-input" 
                        placeholder="Username" 
                        name="userName"
                        value={userNameState}
                        onChange={userNameChanges}>
                    </input>

                    <label className="formulario-label">Password for the connection</label>
                    <input 
                        type="password" 
                        className="formulario-input" 
                        placeholder="Password"
                        name="password"
                        value={passwordState}
                        onChange={passwordChanges}>
                    </input>
                    
                    <input type="submit" className="formulario-button" value="Connect"></input>
                </form>
            </div>
        </section>
    )
}

export { Form };