import { posts } from "./data.js";

// get the input for the main
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
                    <img id="likeIt" class="icon" src="./images/icon-heart.png">
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
    `);
    
    container.innerHTML = list;
}

function updateLikeText (post,index) {
    let likesContainer = document.querySelectorAll(".likes-container p");
    likesContainer[index].textContent = `${post.likes} likes`;
}

function handleLikes(posts) {
    // Get the input for ALL the like icon
    let likeIcons = document.querySelectorAll('#likeIt');
    
    // Use forEach to loop throught and get the specific icon element
    likeIcons.forEach((icon, index) => {

    // Individual post from posts using the index from forEach
    let post = posts[index];
    
    // Eventlistner for each icon
    icon.addEventListener("click", function() {
            if(post.isLiked === true && post.likes >= 0){
                post.isLiked = false;
                post.likes -=1;
                icon.classList.remove("isLiked");
            } else if(post.isLiked === false && post.isLiked >= 0){
                post.isLiked = true;
                post.likes += 1;
                icon.classList.add("isLiked");            
            }
            // Update the text in the card with the changed values for likes
            updateLikeText(post,index);
        });        
   });   
}

loadCards(posts);
handleLikes(posts);









