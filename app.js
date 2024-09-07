// Função para pesquisar dinossauros e exibir os resultados na página.
function pesquisar() {
    // Obter a seção onde os resultados serão exibidos.
    let section = document.getElementById("resultados-pesquisa");
  
    let campoPesquisa = document.getElementById("campo-pesquisa").value
    
    campoPesquisa = campoPesquisa.toLowerCase()
    // String para armazenar os resultados da pesquisa.
    let resultados = "";
    let titulo = "";
    let tags = "";
    let descricao = "";
  
    // Iterar sobre cada dinossauro na lista.
    for (let dado of dinossauros) {
        titulo = dado.titulo.toLowerCase()
        tags = dado.tags.toLowerCase()
        descricao = dado.descrição.toLowerCase()

        if (campoPesquisa == "") {
            section.innerHTML = "<p>Resultado Não Encontrado</p>"
            return
        }

        if ( titulo.includes(campoPesquisa) || tags.includes(campoPesquisa) || descricao.includes(campoPesquisa) ) {
// Construir o HTML para cada item de resultado.
resultados += `
<div class="item-resultado">
    <h2>
        <a href= # target="_blank">${dado.titulo}</a>
    </h2>
    <p class="imagem">${dado.imagem}</p>
    <p class="periodo">${dado.periodo}</p>
    <p class="alimentação">${dado.alimentacao}</p>
    <p class="tamanho">${dado.tamanho}</p>
    <p class="fosseis">${dado.localizacaoFosseis}</p>
    <p class="descricao-meta">${dado.descrição}</p>
    <p class="link"><a href= ${dado.link} target="_blank"><strong>Mais Informações</strong></a></p>
</div>
`
}
if (!resultados) {
    resultados = "<p>Resultado não encontrado</p>"
}
// Atualizar o conteúdo da seção com os resultados.
section.innerHTML = resultados;
}
}