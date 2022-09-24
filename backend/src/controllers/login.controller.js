// Importamos la conexión con nuestra base de datos y las consultas
import { getConnection, queries } from "../database/index.js"


export const loadSchemaData = async ( pool, res ) => {

    const response = await client.query("select genSchemaName();")
    const schemaNames = response.rows[0].genschemaname;
    const schemaList = schemaNames.split(',');
    var jsonList = [];
    for (const schema of schemaList) {  
        const reponse2 = await client.query("select genJsonData('"+ schema +"');")  
        const jsonReponse = res.rows[0].genjsondata
        const parsedJson = JSON.parse(jsonReponse)
        jsonList.push(parsedJson);
    }
    await client.end();
    return jsonList;
    
}


export const makeConnection = async ( req, res ) => {
    try {
        const pool = await getConnection( req.body );
        loadSchemaData( pool )
        .then( result  => {
            console.log(result);
        });
    } catch( error ) {
        console.log( "Error de conexion", error.message );
    }
}