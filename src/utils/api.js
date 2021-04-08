function getApiData(url,callback) {
    fetch(url)
    .then( r => r.json())
    .then(callback);
}

export function getApiPostsData(callback) {
    getApiData("https://simple-json-server-scit.herokuapp.com/posts",callback);
}

export function getApiCommentsData(postId,callback) {
    getApiData(`https://simple-json-server-scit.herokuapp.com/comments?postId=${postId}`,callback);
}