const commentsArray = [

    {
      "name": "Victor Pinto",
      "comment": "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",

      "date": '11/02/2023',

    },
    {
        "name": "Christina Cabrera",
        "comment": "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",

                "date": "10/28/2023",
    },
    {
        "name": "Isaac Tadesse",
        "comment": "I can't stop listening. Every time I hear one of their songs the vocals it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can t get enough.",
        "date": "10/20/2023",
    },
  ]
  //What I had before, for posterity
 /*  console.log(commentArray);
  let commentDummies = document.getElementsByClassName("comment__dummy");
  let commentDates = document.getElementsByClassName("comment__date");
  let commentNames = document.getElementsByClassName("comment__name");
  let commentComments = document.getElementsByClassName("comment__comment");
 
  Array.from(commentDates).forEach((element, index) => {
    if (index < commentArray.length){
        element.innerHTML = commentArray[index].date; // Assuming you want to assign respective dates
    }
    });

    Array.from(commentNames).forEach((element, index) => {
        if (index < commentArray.length){
            element.innerHTML = commentArray[index].name; // Assuming you want to assign respective dates
        }
    });

    Array.from(commentComments).forEach((element, index) => {
        if (index < commentArray.length){
            element.innerHTML = commentArray[index].comment; // Assuming you want to assign respective dates
        }
    });
    
    
    function commentFormSubmit(event) {
        const form = event.target;
        const nameValue = form.elements['comment__name-input'].value;
        const commentValue = form.elements['comment__comment-input'].value;
        //Getting today's date and formatting it to match the mockup

        event.preventDefault();
        const fullComment = {"name": nameValue, "comment": commentValue, "date": today};
        console.log(fullComment);
        commentArray.unshift(fullComment);
        console.log(commentArray);
      }
      */
      const formEl = document.querySelector("#comments-form");
      formEl.addEventListener("submit", function (event) {
        // b) prevent default form behaviour to prevent refresh
        event.preventDefault();
      
        // c) make sure you can successfully grab the form inputs value
       // console.log(event.target.commentName.value);
        console.log(event.target.commentName.value);
      
        // optional: store the input values in variables
        const commentName = event.target.commentName.value;

        const comment = event.target.comment.value;
        let today = new Date();
        const dd = String(today.getDate()).padStart(2, '0');
        const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        const yyyy = today.getFullYear();
        today = mm + '/' + dd + '/' + yyyy;
        // d) create new comment object using the form input values
        const newcomment = {
          name: commentName,
          comment: comment,
          date: today,
        };
      
        // e) add the newcomment object to the front of the commentsArray (our source of truth)
        commentsArray.unshift(newcomment);
      
        // f) call the displaycomment() to display the newly updated commentArray
        displayComments();
      
        // g) reset the form
        formEl.reset();
      });
      


      const listEl = document.querySelector("#comments-list");

      function displayComments() {
        while (listEl.firstChild) {
            listEl.removeChild(listEl.firstChild);
          }

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
        dateEl.innerText = commentsArray[i].date;
        itemEl.appendChild(dateEl);
        // c) create name detail element and add to the <li>
        const nameEl = document.createElement("h3");
        nameEl.classList.add("comment__name");
        nameEl.innerText = commentsArray[i].name;
        itemEl.appendChild(nameEl);
      
        // d) create comment detail element and add to the <li>
        //     - adding an comments__detail--special modifier class
        const commentEl = document.createElement("p");
       commentEl.classList.add(
          "comment__name",
          "comment__name--special"
        ); 
       commentEl.innerText = commentsArray[i].comment;
        itemEl.appendChild(commentEl);
      
        // e) create date detail element and add to the <li>

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