let amigos = [];
 
function adicionarAmigo() {
    let input = document.getElementById('amigo');
    let nome = input.value;

        if (nome == '') {
            alert('Por favor, insira um nome no campo');
            input.value = '';
            return;
        } 
        
        else if (amigos.includes(nome)){
            alert('Esse nome já foi adicionado!');
            input.value = '';
        return;
        }
        else {
            amigos.push(nome);
            input.value = '';
            mostrarAmigos();
    }
    }
function mostrarAmigos() {
        let lista = document.getElementById('listaAmigos');
        lista.innerHTML = '';
    
        for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement('li');
        li.textContent = amigos[i];
        lista.appendChild(li);
    };
    }

function sortearAmigo() {
    let i = Math.floor(Math.random() * amigos.length);
    let sorteado = amigos[i];
    document.getElementById('resultado').innerHTML =
 '<li>Amigo sorteado: ' + sorteado + '</li>';
}