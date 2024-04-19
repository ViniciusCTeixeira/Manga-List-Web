function showLoader() {
    document.getElementById('loader').style.display = 'block';
}

function hideLoader() {
    document.getElementById('loader').style.display = 'none';
}

function ajax(url, formData, callback) {
    let xhr = new XMLHttpRequest();

    xhr.open('GET', "http://127.0.0.1:5000/" + url, true);
    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            callback(xhr);
        }
    };

    xhr.send(formData);
}

function ajaxPost(url, formData, callback) {
    let xhr = new XMLHttpRequest();

    xhr.open('POST', "http://127.0.0.1:5000/" + url, true);

    let formDataObject = new FormData();
    for (let key in formData) {
        formDataObject.append(key, formData[key]);
    }

    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            callback(xhr);
        }
    };

    xhr.send(formDataObject);
}

function ajaxPut(url, formData, callback) {
    let xhr = new XMLHttpRequest();

    xhr.open('PUT', "http://127.0.0.1:5000/" + url, true);

    let formDataObject = new FormData();
    for (let key in formData) {
        formDataObject.append(key, formData[key]);
    }

    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            callback(xhr);
        }
    };

    xhr.send(formDataObject);
}

function ajaxDelete(url, formData, callback) {
    let xhr = new XMLHttpRequest();

    xhr.open('DELETE', "http://127.0.0.1:5000/" + url, true);
    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            callback(xhr);
        }
    };

    xhr.send(formData);
}

function listGeneros(itens) {
    let tabela = document.getElementById('generos').getElementsByTagName('tbody')[0];
    tabela.innerHTML = '';

    itens.forEach(function(item) {
        let novaLinha = tabela.insertRow();
        novaLinha.insertCell(0).textContent = item.id;
        novaLinha.insertCell(1).textContent = item.created;
        novaLinha.insertCell(2).textContent = item.name;
        novaLinha.insertCell(3).textContent = "Faça uma busca";
    });
}

function listGenero(item) {
    let tabela = document.getElementById('generos').getElementsByTagName('tbody')[0];
    tabela.innerHTML = '';

    let novaLinha = tabela.insertRow();
    novaLinha.insertCell(0).textContent = item.id;
    novaLinha.insertCell(1).textContent = item.created;
    novaLinha.insertCell(2).textContent = item.name;
    novaLinha.insertCell(3).textContent = item.mangas.length;

}

function buscaGeneros() {
    ajax(
        'genres',
        null,
        function(resposta) {
            if(resposta.status == 200){
                listGeneros(JSON.parse(resposta.response).data)
            }
        }
    )
}

function buscaGenero(id) {
    ajax(
        'genre?id='+id,
        null,
        function(resposta) {
            if(resposta.status == 200){
                listGenero(JSON.parse(resposta.response))
            }else{
                alert("Nenhum genero encontrado!")
            }
        }
    )
}

function addGenero(name) {
    ajaxPost(
        'genres',
        {"name": name},
        function(resposta) {
            if(resposta.status == 201){
                buscaGeneros()
            }else{
                alert(JSON.parse(resposta.response).mesage)
            }
        }
    )
}

function removeGenero(id) {
    ajaxDelete(
        'genres?id=' + id,
        null,
        function(resposta) {
            if(resposta.status == 200){
                buscaGeneros()
            }else{
                alert(JSON.parse(resposta.response).mesage)
            }
        }
    )
}

function atualizaGenero(id, nome) {
    ajaxPut(
        'genres',
        {"id": id, "name": nome},
        function(resposta) {
            if(resposta.status == 200){
                buscaGeneros()
            }else{
                alert(JSON.parse(resposta.response).mesage)
            }
        }
    )
}

function listAutores(itens) {
    let tabela = document.getElementById('autores').getElementsByTagName('tbody')[0];
    tabela.innerHTML = '';

    itens.forEach(function(item) {
        let novaLinha = tabela.insertRow();
        novaLinha.insertCell(0).textContent = item.id;
        novaLinha.insertCell(1).textContent = item.created;
        novaLinha.insertCell(2).textContent = item.name;
        novaLinha.insertCell(3).textContent =  "Faça uma busca";
    });
}

function listAutor(item) {
    let tabela = document.getElementById('autores').getElementsByTagName('tbody')[0];
    tabela.innerHTML = '';

    let novaLinha = tabela.insertRow();
    novaLinha.insertCell(0).textContent = item.id;
    novaLinha.insertCell(1).textContent = item.created;
    novaLinha.insertCell(2).textContent = item.name;
    novaLinha.insertCell(3).textContent = item.mangas.length;
}

function buscaAutores() {
    ajax(
        'authors',
        null,
        function(resposta) {
            if(resposta.status == 200){
                listAutores(JSON.parse(resposta.response).data)
            }
        }
    )
}

function buscaAutor(id) {
    ajax(
        'author?id='+id,
        null,
        function(resposta) {
            if(resposta.status == 200){
                listAutor(JSON.parse(resposta.response))
            }else{
                alert("Nenhum autor encontrado!")
            }
        }
    )
}

function addAutor(name) {
    ajaxPost(
        'authors',
        {"name": name},
        function(resposta) {
            if(resposta.status == 201){
                buscaAutores()
            }else{
                alert(JSON.parse(resposta.response).mesage)
            }
        }
    )
}

function removeAutor(id) {
    ajaxDelete(
        'authors?id=' + id,
        null,
        function(resposta) {
            if(resposta.status == 200){
                buscaAutores()
            }else{
                alert(JSON.parse(resposta.response).mesage)
            }
        }
    )
}

function atualizaAutor(id, nome) {
    ajaxPut(
        'authors',
        {"id": id, "name": nome},
        function(resposta) {
            if(resposta.status == 200){
                buscaAutores()
            }else{
                alert(JSON.parse(resposta.response).mesage)
            }
        }
    )
}

function listMangas(itens) {
    let responseDiv = document.getElementById('response');

    itens.forEach(function(item) {
        let mangaDiv = document.createElement('div');
        mangaDiv.classList.add('manga');

        let img = document.createElement('img');
        img.src = item.image;
        img.alt = item.name;

        let mangaDetailsDiv = document.createElement('div');
        mangaDetailsDiv.classList.add('manga-details');

        let h3 = document.createElement('h3');
        h3.textContent = item.name;

        let p1 = document.createElement('p');
        p1.classList.add('descricao')
        p1.textContent = item.description;

        let p2 = document.createElement('p');
        p2.textContent = 'Generos: ';
        item.genres.forEach(function (genre){
            p2.textContent = p2.textContent + genre.name + ', '
        })

        let p3 = document.createElement('p');
        p3.textContent = 'Autores: ';
        item.authors.forEach(function (author){
            p3.textContent = p3.textContent + author.name + ', '
        })

        mangaDiv.appendChild(img);

        mangaDetailsDiv.appendChild(h3);
        mangaDetailsDiv.appendChild(p1);
        mangaDetailsDiv.appendChild(p2);
        mangaDetailsDiv.appendChild(p3);

        mangaDiv.appendChild(mangaDetailsDiv);
        responseDiv.appendChild(mangaDiv);
    });

    document.querySelectorAll('.manga-details .descricao').forEach(anchor => {
        if (anchor.scrollHeight > anchor.clientHeight) {
            while (anchor.scrollHeight > anchor.clientHeight) {
                anchor.textContent = anchor.textContent.replace(/\s+\S*$/, '');
            }
            anchor.textContent += '...';
        }
    });
}

function buscaMangas() {
    ajax(
        'mangas',
        null,
        function(resposta) {
            if(resposta.status == 200){
                listMangas(JSON.parse(resposta.response).data)
            }
        }
    )
}