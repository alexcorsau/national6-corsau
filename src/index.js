import { renderArticles } from "./article";

console.log("javascript-AJAX-CRUD-homewolrk-solution-modularisation");

const articleListHtml = document.querySelector(".article-list");

document.getElementById("get-data").addEventListener("click", function () {
  fetch("https://simple-json-server-scit.herokuapp.com/posts")
    .then(handleFetchResponse)
    .then(useJSONResponse);
});

function handleFetchResponse(response) {
  console.log("response", response);
  return response.json();
}

function useJSONResponse(json) {
  console.log(json);

  renderArticles(json);
}

