console.log("JavaScript - AJAX");
console.log("CRUD Operation - Read");
// The scope of this lesson is to fetch some data from a server and use it to dynamically render data to the user
// We show the data to the user by creating new html elements and ad them to the existing html objects

// "articleListHtml" will hold the new elements we will create for showing data
// we need an existing reference so we can bind to it the new elements
const articleListHtml = document.querySelector(".article-list");

// we will get/fetch the data when user click on a button
document.getElementById("get-data").addEventListener("click", getData);

function getData() {
  // "fetch" is a JavaScript function that tells the browser the make a request the specified address in the argument
  fetch("https://simple-json-server-scit.herokuapp.com/posts")
    // "this .then" is responsible for linking a callback function to the event trigger by the browser when the server responds back
    .then(handleFetchResponse)
    // "this .then" is responsible for linking a callback function to the event trigger by the parser of the body of the response
    // we need to parse the response so we can transform it from a string in form of a JSON to an actual JavaScript value, which in this case is a list of objects
    .then(useJSONResponse);
}

// because "handleFetchResponse" is used as a callback function in the first then of "fetch" the parameter will be the response from the servers
function handleFetchResponse(response) {
  console.log("response", response);
  // .json() is responsible for parsing in an asynchronous way the body of the server response, from a JSON string to a JavaScript value
  return response.json();
}

// because  "useJSONResponse" is used in the second then of "fetch" the parameter will be the actual JavaScript value parsed from the body of the server
// only in this function we can actually use the data to render dynamically something
function useJSONResponse(json) {
  console.log(json);

  // by calling "renderArticles" we will render to page the articles from the server
  renderArticles(json);
}

function renderArticles(articleList) {
  // we need to remove the "No data" text in our html list container
  articleListHtml.innerText = "";

  // the server responds with a list of objects
  // every object represents a article
  // every article has the same structure (id, title, content)
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

  // after creating the necessary html structure for a article items, we need to populated with data
  // we use the "articleData" as data source
  articleTitle.innerText = articleData.title;
  articleContent.innerText = articleData.content;
}
