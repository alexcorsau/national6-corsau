import { renderArticles } from "./article";
import { getApiPostsData } from "./utils/api";

console.log("javascript-AJAX-CRUD-homework-solution-modularization");

document.getElementById("get-data").addEventListener("click", () => {getApiPostsData(renderArticles)});


