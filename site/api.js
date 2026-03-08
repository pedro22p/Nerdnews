// A URL da sua API
const url = 'https://saurav.tech/NewsAPI/top-head.php?country=br'; // Exemplo
const container = document.getElementById('resultado');

// Função para buscar dados
async function getData() {
    try {
        const response = await fetch(url);
        const data = await response.json(); // Converte resposta para JSON

        // Manipula o DOM para exibir os dados
        container.innerHTML = `<p>Nome: ${data[0].name}</p>`;
    } catch (error) {
        console.error('Erro:', error);
        container.innerHTML = 'Erro ao carregar API.';
    }
}

getData(); // Executa a função
