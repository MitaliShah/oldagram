import { posts } from "./data.js";

// get the inputs required
let container = document.querySelector("#container");

function loadCards (posts) {
    let list = posts.map(({ name, username, location, avatar, post, comment, likes }) => `
        <section>
            <div class="avatar-container">
                <img class="avatar-img" src="${avatar}">
                <div class="avatar-info">
                    <p class="avatar-name">${name}</p>
                    <p class="avatar-location">${location}</p>
                </div>
            </div>
            <div>
                <img class="post-img" src="${post}">
            </div>
            <div class="bottom-info">
                <div class="icons-container">
                    <img class="icon" src="./images/icon-heart.png">
                    <img class="icon" src="./images/icon-dm.png">
                    <img class="icon" src="./images/icon-comment.png">
                </div> 
                <div class="likes-container">
                    <p>${likes} likes</p>
                </div>
                <div class="comment-container">
                    <p><span class="username">${username}</span>${comment}</p>
                </div>
            </div>    
        </section>
    `)    
    container.innerHTML = list;
}

loadCards(posts);






