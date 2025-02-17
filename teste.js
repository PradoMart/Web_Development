/*let hour = 12;

try{
    if (hour <= 12){
        console.log("Bom dia!");
    } else if(hour >= 13 && hour <= 18){
        console.log("Boa tarde!");
    } else{
        console.log("Boa noite!");
    }

} catch(error){
    console.log(error);
}finally{
    console.log("Fim");
}*/

// function message(){
//     console.log("Olá, é bom ter vc aqui.")
// }

// message();

/**
 * 
 * @param {*} userName 
 */
function message(userName) /*userName é parametro*/ {
    console.log("Olá", userName);
}

message("Rodrigo") /* Rodrigo é argumento */;

function execute(taskName, callback){
    console.log("Executando tarefa: ", taskName);

    callback();
}

function callback(){
    console.log("Tarefa finalizada.");
}

execute("Download do arquivo...", callback);