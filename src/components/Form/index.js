import React from "react";
import "./Form.css"

function Form() {
    return(

    <section className="container">
        <div className="prueba">
        
            <form className="form">
            <h2 className="title">Database connections</h2>
                <label className="formulario-label">Username or address for the connection</label>
                <input type="text" className="formulario-input" placeholder="Username"></input>
                <label className="formulario-label">Password for the connection</label>
                <input type="password" className="formulario-input" placeholder="Password"></input>
                <input type="submit" className="formulario-button" value="Connect"></input>
            </form>
        </div>
    </section>
    );
}

export { Form };