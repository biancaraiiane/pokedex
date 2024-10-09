# Consulta Pokémon - Estudo e Treinamento

![Captura de tela 2024-10-09 004312](https://github.com/user-attachments/assets/685020fc-621c-4931-aee4-6f77fe5fe43a)

## Sobre o Projeto

Este é um projeto simples que utiliza **HTML**, **CSS** e **JavaScript** para realizar consultas na **Pokémon API**. **Este projeto foi copiado de uma fonte existente** como parte do meu processo de **estudo e aprimoramento** de habilidades em desenvolvimento web.

O objetivo do projeto é permitir que o usuário busque informações sobre qualquer Pokémon, usando o nome ou número do Pokémon. As informações retornadas pela API incluem nome, tipo e imagem do Pokémon.

A replicação deste projeto me ajudou a entender melhor o uso de **APIs** em aplicações web, além de reforçar minhas habilidades de manipulação de DOM com JavaScript e estilização com CSS.

## Funcionalidades

- **Consulta Pokémon**: O usuário pode buscar informações sobre um Pokémon, inserindo o nome ou número.
- **Exibição de Dados**: A informação do Pokémon, como nome, tipo e imagem, é exibida de forma dinâmica.
- **Interface Simples e Limpa**: A interface é intuitiva, com um campo de busca e a exibição das informações do Pokémon em tempo real.

## Tecnologias Utilizadas

Este projeto foi replicado utilizando as seguintes tecnologias:

- **HTML5**: Estruturação do conteúdo e criação da interface.
- **CSS3**: Estilização e layout com foco em responsividade e design.
- **JavaScript**: Consumo de APIs e manipulação do DOM.
- **Pokémon API**: API pública para buscar informações sobre Pokémon.

## Código de Destaque

Aqui está um trecho de código que faz a consulta na API e exibe o resultado:

```javascript
const form = document.querySelector('.group-form');
const nameInput = document.getElementById('name');
const imgPokemon = document.getElementById('imgPokemon');
const content = document.getElementById('content');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const pokemonName = nameInput.value.trim().toLowerCase();
    
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        const data = await response.json();
        
        const pokemonImage = data.sprites.front_default;
        const pokemonType = data.types.map(type => type.type.name).join(', ');

        imgPokemon.innerHTML = `<img src="${pokemonImage}" alt="${pokemonName}">`;
        content.innerHTML = `
            <h2>${pokemonName.toUpperCase()}</h2>
            <p>Tipo: ${pokemonType}</p>
        `;
    } catch (error) {
        content.innerHTML = `<p>Pokémon não encontrado. Tente novamente.</p>`;
    }
});
