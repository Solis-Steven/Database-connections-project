import React from "react";
import { Options } from "../Options";
import "./Table.css"


function Table( schema ) {
    return(
        <table className="table-container">
            <thead className="table-head">
                <tr>
                    <th>schemaName</th>
                    <th>tableName</th>
                    <th>attributeName</th>
                    <th>dataType</th>
                    {/* <th>constraintName</th>
                    <th>constraintType</th> */}
                </tr>
            </thead>
            <tbody className="table-body">
                {
                    schema.schemaInformation.tables.map( attributes => {
                        const tableName = attributes.tableName;
                        return attributes.atributes.map( attribute => (
                            <tr>
                                <Options schemaName={schema.schemaInformation.schemaName} tableName={tableName} attributesInformation={attribute} />
                            </tr>
                        ))
                    })
                }
            </tbody>
        </table>
    );
}

export { Table };