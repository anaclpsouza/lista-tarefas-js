let contador = 0;
let input = document.getElementById('inputTarefa');
let btnAdd = document.getElementById('btn-add');
let main = document.getElementById('areaLista');

function addTarefa() {
    let valorInput = input.value;
    
    if ((valorInput !== "") && (valorInput !== null) && (valorInput !== undefined)) {
        ++contador;

        let novoItem = `<div id="${contador}" class="item">
            <div onclick="marcarTarefa(${contador})" class="item-icone"> <span id="icone_${contador}" class="material-symbols-outlined unfill">circle</span></div>
            <div onclick="marcarTarefa(${contador})" class="item-nome">${valorInput}</div>
            <div class="item-botao">
                <button onclick="deletar(${contador})" class="delete"><span class="material-symbols-outlined">
                        delete
                    </span></button>
            </div>
        </div>`;

        main.innerHTML += novoItem;

        input.value = "";
        input.focus();

    }
}

input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        btnAdd.click();
    }
})

function deletar(id) {
    var tarefa = document.getElementById(id);
    tarefa.remove();
}

function marcarTarefa(id) {
    let item = document.getElementById(id);
    let icone = document.getElementById("icone_" + id);

    
    if (!item.classList.contains("clicado")) {
        item.classList.add("clicado");
        icone.classList.remove("unfill");
        icone.classList.add("fill");
        icone.textContent = "check_circle";

        item.parentNode.appendChild(item);
    } else {
        item.classList.remove("clicado");
        icone.classList.remove("fill");
        icone.classList.add("unfill");
        icone.textContent = "check";
    }
}