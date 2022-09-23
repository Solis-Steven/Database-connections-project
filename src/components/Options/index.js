import React from "react";
import "./Options.css"

function Options( props ) {
    return(
        <>
            <th>{props.schemaName}<input type="checkbox"></input></th>
            <th>{props.tableName}<input type="checkbox"></input></th>
            <th>{props.attributesInformation.columnName}<input type="checkbox"></input></th>
            <th>{props.attributesInformation.dataType}<input type="checkbox"></input></th>
        </>
    );
}

export { Options };