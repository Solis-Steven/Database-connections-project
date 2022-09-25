var plantEncoder = require("plantuml-encoder")

// const test = `
// @startuml
// class Class2 {
//     +field1: String
//     +field12: String
//     +method1(): void
//     +method2(): void
// }
// @enduml
// `
import { loadSchemaData } from ""
// const sd = `
// @startuml
// class +``+.actividades{
// 	-integer id
// 	-character varying nombre
// 	-timestamp without time zone fecha_ini
// 	-timestamp without time zone fecha_fin
// 	-integer id_congreso
// }
// @enduml
// `
console.log(loadSchemaData())
var encoded = plantEncoder.encode(loadSchemaData)
console.log(encoded)
console.log("http://www.plantuml.com/plantuml/img/" + encoded)