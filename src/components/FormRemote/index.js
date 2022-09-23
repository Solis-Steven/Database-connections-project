import React, { useEffect } from "react";
import "./FormRemote.css"
import { Link, useNavigate } from "react-router-dom"

function FormRemote() {
    const [ serverConnectionState, setServerConnectionState ] = React.useState("");
    const [ databaseState, setDatabaseState ] = React.useState("");
    const [ portState, setPorState ] = React.useState("");
    const [ userState, setUserState ] = React.useState("");
    const [ passwordState, setPasswordState ] = React.useState("");
    const myForm = React.useRef( null );
    const btnSend = React.useRef( null );
    const navigate = useNavigate();

    const serverConnectionChanges = (e) => {
        setServerConnectionState(e.target.value); 
    }

    const databaseChanges = (e) => {
        setDatabaseState(e.target.value); 
    }

    const portChanges = (e) => {
        setPorState(e.target.value); 
    }

    const userNameChanges = (e) => {
        setUserState(e.target.value); 
    }
 
     const passwordChanges = (e) => {
         setPasswordState(e.target.value); 
    }
 
     const onSubmit = (e) => {
         e.preventDefault();

         if(serverConnectionState != "" && databaseState != "" && portState != "" && userState != "" && passwordState != "") {
            navigate("/schema")
         } 
    }
 
     useEffect( () => {
         if (serverConnectionState != "" && databaseState != "" && portState != "" && userState != "" && passwordState != "") {
             btnSend.current.classList.remove("formulario-button__false__remote");
             btnSend.current.classList.add("formulario-button__true__remote");
         } else {
             btnSend.current.classList.remove("formulario-button__true__remote");
             btnSend.current.classList.add("formulario-button__false__remote");
         }
    }, [ userState, passwordState ] );


    return(
        <section className="container">
            <div className="prueba">
            
                <form ref={myForm} className="form" onSubmit={onSubmit}>
                <h2 className="title__remote">Database Remote Connections</h2>
                    <label className="formulario-label__remote">Server connection</label>
                    <input 
                        type="text"
                        className="formulario-input__remote" 
                        name="serverConnection"
                        value={serverConnectionState}
                        onChange={serverConnectionChanges}
                        required>
                    </input>

                    <label className="formulario-label__remote">Database name</label>
                    <input 
                        type="text" 
                        className="formulario-input__remote" 
                        name="databaseName"
                        value={databaseState}
                        onChange={databaseChanges}
                        required>
                    </input>

                    <label className="formulario-label__remote">Port</label>
                    <input 
                        type="text" 
                        className="formulario-input__remote" 
                        name="port"
                        value={portState}
                        onChange={portChanges}
                        required>
                    </input>

                    <label className="formulario-label__remote">User</label>
                    <input 
                        type="text" 
                        className="formulario-input__remote" 
                        name="user"
                        value={userState}
                        onChange={userNameChanges}
                        required>
                    </input>

                    <label className="formulario-label__remote">Password</label>
                    <input 
                        type="password" 
                        className="formulario-input__remote" 
                        
                        name="password"
                        value={passwordState}
                        onChange={passwordChanges}
                        required>
                    </input>
                    
                    <input 
                        ref={btnSend}
                        type="submit" 
                        className={`formulario-button__remote formulario-button__false__remote`}    
                        value="Connect">
                    </input>
                </form>
            </div>
        </section>
    );
}

export { FormRemote };