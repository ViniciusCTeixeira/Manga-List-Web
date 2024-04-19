window.addEventListener('load', function() {
    hideLoader();
});

document.querySelectorAll('input[type="number"]').forEach(input => {
    input.addEventListener('input', function() {
        input.value = input.value.replace(/\D/g, '');
        if(input.value == ''){
            if(input.id == 'genero-id'){
                buscaGeneros()
            }
            if(input.id == 'autor-id'){
                buscaAutores()
            }
        }
    });
});

document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

document.getElementById('genero-search').addEventListener('click', function(e) {
    e.preventDefault();

    let id = document.getElementById('genero-id').value;

    if (id){
        buscaGenero(id)
    }else{
        alert("Para buscar, informe o ID do genero!")
    }

});

document.getElementById('genero-add').addEventListener('click', function(e) {
    e.preventDefault();

    let name = document.getElementById('genero-nome').value;

    if (name){
        addGenero(name)
    }else{
        alert("Para adicionar, informe o nome do genero!")
    }

});

document.getElementById('genero-remove').addEventListener('click', function(e) {
    e.preventDefault();

    let id = document.getElementById('genero-id').value;

    if (id){
        removeGenero(id)
    }else{
        alert("Para remover, informe o ID do genero!")
    }

});

document.getElementById('genero-update').addEventListener('click', function(e) {
    e.preventDefault();

    let id = document.getElementById('genero-id').value;
    let name = document.getElementById('genero-nome').value;

    if (id){
        if (name){
            atualizaGenero(id, name)
        }else{
            alert("Para atualizar, informe o nome do genero!")
        }
    }else{
        alert("Para atualizar, informe o ID do genero!")
    }

});

document.getElementById('autor-search').addEventListener('click', function(e) {
    e.preventDefault();

    let id = document.getElementById('autor-id').value;

    if (id){
        buscaAutor(id)
    }else{
        alert("Para buscar, informe o ID do autor!")
    }

});

document.getElementById('autor-add').addEventListener('click', function(e) {
    e.preventDefault();

    let name = document.getElementById('autor-nome').value;

    if (name){
        addAutor(name)
    }else{
        alert("Para adicionar, informe o nome do autor!")
    }

});

document.getElementById('autor-remove').addEventListener('click', function(e) {
    e.preventDefault();

    let id = document.getElementById('autor-id').value;

    if (id){
        removeAutor(id)
    }else{
        alert("Para remover, informe o ID do autor!")
    }

});

document.getElementById('autor-update').addEventListener('click', function(e) {
    e.preventDefault();

    let id = document.getElementById('autor-id').value;
    let name = document.getElementById('autor-nome').value;

    if (id){
        if (name){
            atualizaAutor(id, name)
        }else{
            alert("Para atualizar, informe o nome do autor!")
        }
    }else{
        alert("Para atualizar, informe o ID do autor!")
    }

});