import React from "react";
import "./Frame.css"
import { Link, useLocation } from "react-router-dom"
import { Table } from "../Table";


const db = [
    {
        schemaName: 'public',
        tables: [
            {
                tableName: "planetas",
                attributes: [
                    {
                        columnName: "color",
                        dataType: "varchar"
                    },

                    {
                        columnName: "antiguedad",
                        dataType: "int"
                    }
                ]
            },
            {
                tableName: "nebulosas",
                attributes: [
                    {
                        columnName: "color",
                        dataType: "varchar"
                    }
                ]
            }
        ]
    },

    {
        schemaName: 'poo',
        tables: [
            {
                tableName: "estrellas",
                attributes: [
                    {
                        columnName: "cantidadHidrogeno",
                        dataType: "bigint"
                    },

                    {
                        columnName: "masa",
                        dataType: "int"
                    }
                ]
            }
        ]
    }
]

function Frame( ) {
    const location = useLocation();
    return(
        <section className="frame-container">
            <div className="frame-flex">

                <div className="tables">
                    {
                        location.state.map( table => (
                            <Table schemaInformation={ table }/>
                        ) )

                        // <Table schemaInformation={ location.state[1] }/>

                    }
                </div>

                <div className="frame-footer">
                    <Link  to="/" className="footer-btn" >Go back</Link>
                    <Link  to="" className="footer-btn" >Generate diagram</Link>
                </div>
            </div>
        </section>
    );
}

export { Frame };