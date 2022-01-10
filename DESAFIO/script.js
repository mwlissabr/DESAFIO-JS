window.onload = function() {


    ( ()=> {

        const fru = document.querySelectorAll("#produtos > li");
        const cestaCliente = document.querySelector("#cestaDoCliente");
        const valorTotal = document.querySelector("#mostraTotalCompra");
        const cestaFrutas = 0;
        let totalzinho = 0;

        fru.forEach (function (list) {
        list.addEventListener ('click', function(elemento))
        let listCliente = document.createElement ('li');
    
        if(list == elemento) {
            cestaCliente.appendChild(listCliente).setAttribute("data-preco");

            totalzinho += Number(elemento.dataset.preco);
            valorTotal.value = totalzinho.toFixed(2);

            cestaCliente.appendChild(listCliente).textContent = elemento.dataset.valorTotal;

        }

        } )
        
    } ) 

}

/*Olá professor, eu tentei muito terminar o desafio, mas eu apenas não consegui entender 
muito bem o JS. Fiquei confusa em muitas partes e não sei direito como usar os elementos
da forma correta ou como encaixar eles. Tive muita dificuldade com esses desafios,
mesmo assistindo a maioria das aulas 2x ainda não consegui entender direito. */