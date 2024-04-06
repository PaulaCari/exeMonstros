
const monstros = [  //aray
    {
        id: 1,
        nome: ' Nemesio',
        altura: 1.78,
        habilidades: ' Este mosntro é muito Inteligente!',
        foto: 'https://previews.123rf.com/images/auxins/auxins2301/auxins230100780/196710496-monstruos-lindos-de-dibujos-animados-de-ilustraci%C3%B3n-sobre-fondo-aislado-creados-con-tecnolog%C3%ADa.jpg'
    },

    {
        id: 2,
        nome: ' Luisfer',
        altura: 1.82,
        habilidades: ' Monstro Come tudooooo que esta na frente!',
        foto: 'https://robohash.org/luisfer'
    },

    {
        id: 3,
        nome: ' Evis',
        altura: 1.50,
        habilidades: ' Monstro do fogo!',
        foto: 'https://robohash.org/evis'
    },

    {
        id: 4,
        nome: ' Cari',
        altura: 1.78,
        habilidades: ' Monstro é muito Amorosa!',
        foto: 'https://us.123rf.com/450wm/auxins/auxins2301/auxins230100783/196710419-monstruos-lindos-de-dibujos-animados-de-ilustraci%C3%B3n-sobre-fondo-aislado-creados-con-tecnolog%C3%ADa.jpg?ver=6'
    },
]
const sectionDosMonstros = document.querySelector('.monstros')  //querySelector seleciona um elemento
const todosOsMonstros = monstros.map((cadamonstro) => {   //map sig mapear os moustros do bd.js epega item por item
    return ` <div>

        <p>Nome${cadamonstro.nome}</p>
        <p>Altura${cadamonstro.altura}</p>
        <p class="habilidades">Habilidades${cadamonstro.habilidades}</p>  
        <img src="${cadamonstro.foto}">

        </div>`
})

sectionDosMonstros.innerHTML = todosOsMonstros //innert quando quero algo do html e quero colocar no js

//efeito para o button
const botao = document.querySelector('.btn')
botao.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark') //aqui ele procura a tag html e procura pela classe dark
})

/*mensagem  para o usuario quando vai fechar a janela  É posivel que as alterações feitas não seja, salvar*/
window.onbeforeunload = function(){
    return "Quer realmente sair dapagina";
}
//console.log(sesaoDosMousntros)