console.log("JavaScript - AJAX");
console.log("Create Read Update Delete  - CRUD");
console.log("CRUD Operation - Create step");

// in this course we attempt to add new data on the server using its API
// in order for us to understand how the server work we need to take a look at the library from which the server is built
// our server is built with "JSON Server" and its documentation is "https://github.com/typicode/json-server"
// our main server page can be found at "https://simple-json-server-scit.herokuapp.com/" 


// for us to put data on the server we need to wait for the user do click on add button
document
  .getElementById("add-article-button")
  .addEventListener("click", function () {
    // in order de get input from the user we use "input" tag in the html file
    // here in JS file we target those inputs and get the values ad the time of user click on add button

    const articleTitle = document.getElementById("article-title").value;
    console.log("articleTitle", articleTitle);

    const articleContent = document.getElementById("article-content").value;
    console.log("articleContent", articleContent);

    // we need this condition so that we don't send null values on the server
    if (articleTitle && articleContent) {
      const payload = {
        title: articleTitle,
        content: articleContent,
      };

      console.log("Payload:", payload);
      console.log("Payload Text:", JSON.stringify(payload));

      // "fetch" can be use for getting data from server as well as sending data to the server
      // when we make request to a server can use on of these methods: GET, POST, PATCH, PUT, DELETE
      // by default "fetch" is using GET method
      // in this case because we need to send data as well as creating a new article we need to use the POST method
      // in addition to the url argument we need to specify the request object as well
      // the acutal data the we want to send to the server we must put it into the body key of the request object
      // because we can only send text over http we need to transform the JavaScript values into a string by using JSON.stringify 

      fetch("https://simple-json-server-scit.herokuapp.com/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload), // body data type must match "Content-Type" header
      }).then(getData);
    }
  });
