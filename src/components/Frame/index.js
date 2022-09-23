import React from "react";
import "./Frame.css"
import { Link } from "react-router-dom"
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

function Frame() {
    return(
        <section className="frame-container">
            <div className="frame-flex">

                <div className="tables">
                    {
                        db.map( table => (
                            <div  className="single-table">
                                <Table schemaInformation={table}/>
                            </div>
                        ) )
                    }
                </div>

                <div className="frame-footer">
                    <Link  to="/" className="footer-btn" >Go back</Link>
                    <Link  to="" className="footer-btn" >Next</Link>
                </div>
            </div>
        </section>
    );
}

export { Frame };