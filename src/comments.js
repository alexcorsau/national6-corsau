export function renderComments(commentsList, postHtmlRef) {
    const container = document.createElement("div");
    container.style.paddingLeft = "20px";
    
    for (const commentData of commentsList) {
        renderComment(commentData,container);
    }
    postHtmlRef.appendChild(container);
}
    
function renderComment(commentData, container) {
    const comment = document.createElement("div");
    const commentUser = document.createElement("h5");
    const commentContent = document.createElement("p");
    
    comment.appendChild(commentUser);
    comment.appendChild(commentContent);
    
    container.appendChild(comment);
    
    commentUser.innerText = commentData.username;
    commentContent.innerText = commentData.content;
}