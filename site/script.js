// URL da API de notícias (exemplo funcional)
const url = "https://saurav.tech/NewsAPI/top-headlines/category/technology/us.json";

const container = document.getElementById("news-container");

async function getNews() {

    container.innerHTML = "<p>Carregando notícias...</p>";

    try {
        const response = await fetch(url);
        const data = await response.json();

        container.innerHTML = "";

        if (data.articles && data.articles.length > 0) {

            data.articles.forEach(article => {

                const newsItem = document.createElement("div");
                newsItem.className = "news-item";

                const title = article.title || "Sem título";
                const description = article.description || "Descrição não disponível";
                const source = article.source?.name || "Fonte desconhecida";
                const date = article.publishedAt
                    ? new Date(article.publishedAt).toLocaleDateString("pt-BR")
                    : "Data desconhecida";

                newsItem.innerHTML = `
                    <h3>${title}</h3>
                    <p>${description}</p>
                    <p><strong>Fonte:</strong> ${source}</p>
                    <p><strong>Data:</strong> ${date}</p>
                    <a href="${article.url}" target="_blank">Leia mais</a>
                `;

                container.appendChild(newsItem);
            });

        } else {
            container.innerHTML = "<p>Nenhuma notícia encontrada.</p>";
        }

    } catch (error) {
        console.error(error);
        container.innerHTML = "<p>Erro ao carregar notícias.</p>";
    }
}

getNews();