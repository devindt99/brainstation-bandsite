import BandSiteApi from "./band-site-api.js";

const api = new BandSiteApi("9ec48fe6-56e1-433e-814d-b0d45822534b");

let commentsArray = [];

const formEl = document.querySelector("#comments-form");
formEl.addEventListener("submit", function (event) {
  event.preventDefault();

  const commentName = event.target.commentName.value;
  const comment = event.target.comment.value;
  let today = new Date().toLocaleDateString("en-US");

  const newComment = {
    name: commentName,
    comment: comment,
    timestamp: Date.now(), // Mimic the API's timestamp for consistency
  };

  // Directly add the new comment to the DOM
  addCommentToDOM(newComment);


  formEl.reset();
});

function addCommentToDOM(comment) {
  const itemEl = document.createElement("li");
  itemEl.classList.add("comment__dummy");

  const thumbnailEl = document.createElement("img");
  thumbnailEl.classList.add("comment__thumbnail");
  itemEl.appendChild(thumbnailEl);

  const nameEl = document.createElement("h3");
  nameEl.classList.add("comment__name");
  nameEl.innerText = comment.name; // Ensure this matches the object property
  itemEl.appendChild(nameEl);

  const dateEl = document.createElement("p");
  dateEl.classList.add("comment__date");
  dateEl.innerText = new Date(comment.timestamp).toLocaleDateString(); // Assuming timestamp is available
  itemEl.appendChild(dateEl);

  const commentEl = document.createElement("p");
  commentEl.classList.add("comment__name", "comment__name--special"); // Might want to adjust the class for the comment text
  commentEl.innerText = comment.comment; // Ensure this matches the object property
  itemEl.appendChild(commentEl);

  listEl.insertBefore(itemEl, listEl.firstChild); // Add new comment to the top of the list
}




      const listEl = document.querySelector("#comments-list");

 // Assuming api is an instance of BandSiteApi already created
// const api = new BandSiteApi('your_api_key_here');

async function displayComments() {
  // Clear existing comments
  while (listEl.firstChild) {
    listEl.removeChild(listEl.firstChild);
  }

  try {
    // Fetch comments from API
     commentsArray = await api.getComments();

    for (let i = 0; i < commentsArray.length; i++) {
      const itemEl = document.createElement("li");
      console.log(itemEl);
      itemEl.classList.add("comment__dummy");
      listEl.appendChild(itemEl);
      const thumbnailEl = document.createElement("img");
      thumbnailEl.classList.add("comment__thumbnail");
      itemEl.appendChild(thumbnailEl);
      const dateEl = document.createElement("p");
      dateEl.classList.add("comment__date");
      // Assuming the API returns a date in a format that needs conversion
      // Convert the timestamp or date from the API to a readable format if needed
      dateEl.innerText = new Date(commentsArray[i].timestamp).toLocaleDateString();
      itemEl.appendChild(dateEl);
      const nameEl = document.createElement("h3");
      nameEl.classList.add("comment__name");
      nameEl.innerText = commentsArray[i].name;
      itemEl.appendChild(nameEl);
      const commentEl = document.createElement("p");
      commentEl.classList.add("comment__name", "comment__name--special");
      commentEl.innerText = commentsArray[i].comment;
      itemEl.appendChild(commentEl);
    }
  } catch (error) {
    console.error('Error fetching comments:', error);
    // Handle error (e.g., show an error message)
  }
}

    displayComments()
 /*      
      <li class="comment__dummy" id="comment__dummy1">
      <div class="comment__line">
          <img class="comment__thumbnail"/>
          <div class="comment__name-date-wrapper"><h3 class="comment__name"></h3><p class="comment__date" id="comment__date1"></p></div>
      </div>
      <div class="comment__comment-wrapper">
          <p class="comment__comment">
          </p>
      </div>
      
  </li> */