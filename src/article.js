import { renderComments } from "./comments";
import { getApiCommentsData } from "./utils/api";

const articleListHtml = document.querySelector(".article-list");

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

    // getApiCommentsData(articleData.id,(json)=>{console.log(json)});
    getApiCommentsData(articleData.id,(json)=>{
        console.log(json);
        renderComments(json,article);
    });
  }
  