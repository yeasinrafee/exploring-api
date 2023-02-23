const getData = function(){
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(datas => displayComments(datas));
}

function displayComments(datas){
    const commentContainer = document.getElementById('comment-container');

    for(let data of datas){
        const comments = document.createElement('div');
        comments.classList.add('comments');

        comments.innerHTML = `
            <h2>Post No: ${data.postId}</h2>
            <h4>Name: ${data.name}</h4>
            <p>Comment: ${data.body}</p>
            <p>${data.email}</p>
        `;
        commentContainer.appendChild(comments);
    }
}