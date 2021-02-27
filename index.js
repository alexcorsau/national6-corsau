console.log("JavaScript - AJAX");

const articleListHtml = document.querySelector(".article-list");

// document.getElementById("get-data").addEventListener("click",function (){
//     console.log("Before Fetch");
//     fetch("http://127.0.0.1:5501/testingJSON.json")
//         .then(handleFetchResponse)
//         .then(useJSONResponse);
//     console.log("After Fetch");
// });

//more Readability??

document.getElementById("get-data").addEventListener("click",onClick);

async function onClick(){
    let responseFromFile = await (await fetch("http://127.0.0.1:5501/testingJSON.json")).json();
    console.log("Line 19",responseFromFile);
    useJSONResponse(responseFromFile);

    // let jsonObject = await responseFromFile.json();
    // useJSONResponse(jsonObject);
    
}


// function handleFetchResponse(response){
//     console.log("Line 31:",response);
//     return response.json();
// }

function useJSONResponse(json) {
    console.log("Line 36: ",json);
    renderArticles(json);
}

function renderArticles(articleList){
    articleListHtml.innerText = "";
    for (const articleData of articleList) {
        console.log("Line 43:",articleData);
        renderArticle(articleData);
    }
}

function renderArticle(articleData){
    const article = document.createElement("div");
    const articleTitle = document.createElement("h3");
    const articleContent = document.createElement("p");
    article.appendChild(articleTitle);
    article.appendChild(articleContent);
    articleListHtml.appendChild(article);
    articleTitle.innerText = articleData.title;
    articleContent.innerText = articleData.content;
}