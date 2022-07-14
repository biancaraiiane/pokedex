var formulario = document.querySelector("form")

formulario.addEventListener("submit", function (e) {
    e.preventDefault()

    //url de pesquisa
let urlForm = "https://pokeapi.co/api/v2/pokemon/"

let nome = document.getElementById("name")


// Concatena a url com input (nome que sera digitado)
urlForm = urlForm + this.name.value


//Deixar o que o usuário irá digitar no input em minusculo
urlForm = urlForm.toLocaleLowerCase()


let imagem = document.getElementById("imgPokemon")
let resposta = document.getElementById("content")

// resposta em html
let html = ""; 

//fetch é um comando para fazer a pesquisa 
fetch(urlForm)
    .then(resposta => resposta.json())
    .then(function(data){
        console.log(data)
        html = "Nome: " + maiuscula(data.name) + "<br>"
        html =  html + "Tipo: " + maiuscula(data.types[0].type.name)
        resposta.innerHTML = html


        imagem.innerHTML = "<img src='" + data.sprites.front_default + "'><img src='" + data.sprites.back_default + "'>"
    })
    
.catch(function(err) {
        console.log(err)
        if(err == 'SyntaxError: Unexpected token N in JSON at position 0'){
            html = 'Pokémon não encontrado'
        } else{
            html = 'Erro:' + err
        }
        resposta.innerHTML = html
    })


});


//Deixa a primeira letra maiuscula
function maiuscula(val){
    return val[0].toUpperCase() + val.substr(1)
}






































/*fetch(urlForm)
    .then(resposta => resposta.json())
    .then(function(data){
        console.log(data)
        html = "Nome: " + firstLetterUp(data.name) + '<br>'
        html = html + 'Tipo: ' + firstLetterUp(data.types[0].type.name)

        resposta.innerHTML = html

        imagem.innerHTML = "<img src='"+ data.sprites.front_default + "'> <img src='" + data.sprites.back_default + "'>"
        })
    .catch(function(err){
        console.log(err)
    })

    //essa função é para ficar maiuscula a primeira letra

function firstLetterUp(val){
    return val[0].toUpperCase() + val.substr(1)

}

*/

