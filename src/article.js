export function renderArticles(articleList) {
    articleListHtml.innerText = "";
  
    for (const articleData of articleList) {
      console.log(articleData);
      renderArticle(articleData);
    }
  }
  
  function renderArticle(articleData) {
    const article = document.createElement("div");
    const articleTitle = document.createElement("h3");
    const articleContent = document.createElement("p");
  
    article.appendChild(articleTitle);
    article.appendChild(articleContent);
  
    articleListHtml.appendChild(article);
  
    articleTitle.innerText = articleData.title;
    articleContent.innerText = articleData.content;
  }
  