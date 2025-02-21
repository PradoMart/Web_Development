//importando individualmente
// import {sum, multiply} from "./calc.js"

//importando tudo
// import * as calc from "./calc.js"

//importando a class q contem os metodos
import { Calc } from "./calc.js"
const calc = new Calc()

console.log(calc.sum(4,6))
console.log(calc.multiply(4,6))