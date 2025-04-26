document.addEventListener('DOMContentLoaded',carregarUsusarios)

function carregarUsusarios(){
    fetch('http://localhost:8080/usuarios')
    .then(response => {
        if (!response.ok){
            throw new Error("Erro ao buscar ussuarios");
        }
        return response.json()
    })
    .then(usuarios =>{
        const lista = document.getElementById('listaUsuarios')
        lista.innerHTML = ''

        if(usuarios.lenght === 0){
            lista.innerHTML = '<li>Nenhum usuario encontrado.</li> '
            return;
        }

        usuarios.forEach(usuarios =>{
            const item = document.createElement('li')
            item.innerHTML = `<strong>Nome:</strong> ${usuarios.nome}<br>
                              <strong>E-Mail:</strong> ${usuarios.email}<br>`
            lista.appendChild(item)                  
        })
    })
    .catch( erro => {
        document.getElementById('listaUsuarios').innerHTML = 
        '<li>Erro ao carregar usuários.<li>'
    })
}