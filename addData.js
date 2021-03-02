console.log("JavaScript");
console.log("CRUD Operation - Create  // Create Read Update Delete");

document
.getElementById("add-article-button")
.addEventListener("click",function(){

    //const articleId = document.getElementById("article-id").value;
    const articleTitle = document.getElementById("article-title").value;
    const articleContent = document.getElementById("article-content").value;
    //console.log(articleId);
    console.log(articleTitle);
    console.log(articleContent);

    if(articleTitle&&articleContent){
        const payload = {
            // id : articleId,
             title: articleTitle,
             content: articleContent
         }
    
    

    console.log("Payload object:",payload);
    console.log("Payload object strigyfied",JSON.stringify(payload));

    fetch("https://simple-json-server-scit.herokuapp.com/posts",{
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(payload) // body data type must match "Content-Type" header
        }).then(getData);
    }
})