

let send = document.querySelector("#send");
let comments_section = document.querySelector("#comment_section")
send.addEventListener('click',addComments)

function addComments(){
    let counter = 0
    val = document.getElementById("textbox").value
    console.log(val)
    comments_section.innerHTML += "<div class='comment'><div id='votes'>" +
    "<button class='button_img'><img src='http://localhost:8000/images/icon-plus.svg' class='vote'></button>" +
     "<p id='counter'>0<p/>" +
    "<button class='button_img'><img src='http://localhost:8000/images/icon-minus.svg'class='vote'>" + 
    "</button></div>"+
     "<p id='text'>"+ val +"<p/>" + "<button id='reps'><img src='http://localhost:8000/images/icon-reply.svg' ></button></div>"

}


/////////////////////// Comment section




      const commentContainer = document.querySelector('.comment-container');
        const newCommentText = document.querySelector('#new-comment-text');
        const sendCommentButton = document.querySelector('#send-comment');

        sendCommentButton.addEventListener('click', () => {
            const commentText = newCommentText.value.trim();
            if (commentText !== '') {
                createCommentBox(commentText);
                newCommentText.value = '';
            }
        });

        function createCommentBox(text) {
            const commentBox = document.createElement('div');
            commentBox.className = 'comment-box';

            const commentHeader = document.createElement('div');
            commentHeader.className = 'comment-header';

            const replyButton = document.createElement('button');
            replyButton.className = 'reply-button';
            replyButton.textContent = 'Reply';

            const counter = document.createElement('div');
            counter.className = 'counter';

            const increaseButton = document.createElement('button');
            increaseButton.className = 'increase';
            increaseButton.textContent = '+';

            const valueSpan = document.createElement('span');
            valueSpan.className = 'value';
            valueSpan.textContent = '0';

            const decreaseButton = document.createElement('button');
            decreaseButton.className = 'decrease';
            decreaseButton.textContent = '-';

            const commentTextElement = document.createElement('div');
            commentTextElement.className = 'comment-text';
            commentTextElement.textContent = text;

            const editElement = document.createElement('button');
            editElement.className = 'edit-buttons';
            editElement.textContent = 'Edit';

            const updateButtonElement = document.createElement('button');
            updateButtonElement.className = 'updateComment';
            updateButtonElement.textContent = 'Update';

            
          

            commentHeader.appendChild(replyButton);
            counter.appendChild(increaseButton);
            counter.appendChild(valueSpan);
            counter.appendChild(decreaseButton);
            commentHeader.appendChild(counter);
            commentBox.appendChild(commentHeader);
            commentBox.appendChild(commentTextElement);
            commentBox.appendChild(editElement);
            commentBox.appendChild(updateButtonElement);


            commentContainer.appendChild(commentBox);

            let counterValue = 0;

            increaseButton.addEventListener('click', () => {
                counterValue++;
                valueSpan.textContent = counterValue;
            });

            decreaseButton.addEventListener('click', () => {
                if (counterValue >0){
                    counterValue--;
                    valueSpan.textContent = counterValue;
                }
                
            });
        }












        // function editComment(editButton) {
        //     const comment = editButton.parentElement.parentElement;
        //     const commentText = comment.querySelector('p');
        //     const editButtons = comment.querySelector('.edit-buttons');
        //     const updateButton = editButtons.querySelector('button:nth-child(2)');

        //     commentText.contentEditable = true;
        //     commentText.style.border = '1px solid #007bff';
        //     editButton.style.display = 'none';
        //     updateButton.style.display = 'inline-block';
        // }

        // function updateComment(updateButton) {
        //     const comment = updateButton.parentElement.parentElement;
        //     const commentText = comment.querySelector('p');
        //     const editButtons = comment.querySelector('.edit-buttons');
        //     const editButton = editButtons.querySelector('button:nth-child(1)');

        //     commentText.contentEditable = false;
        //     commentText.style.border = 'none';
        //     editButton.style.display = 'inline-block';
        //     updateButton.style.display = 'none';
        // }




// Scroll to top button

let btn1 = document.querySelector("#to_top")
function scrll() {

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        btn1.style.display = "block";

    }
    else {
        btn1.style.display = "none";
    }

}

window.onscroll = function () {
    scrll();
}

function scrolltoTop() {

    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

btn1.addEventListener('click', scrolltoTop);


//Dark mode button
let btn2 = document.querySelector("#dark_mode");

function darkmode() {
    const darkMode = document.querySelector("body");
    darkMode.classList.toggle("dark-mode");
}

function storageCheck() {
    let darkMode = localStorage.getItem('dark-mode') === 'true';
    localStorage.setItem('dark-mode', !darkMode);

    if (darkMode) {
        darkmode();
    }
    else {
        darkmode();
    }
}

if (localStorage.getItem('dark-mode') === 'true') {
    darkmode()
}

btn2.addEventListener("click", storageCheck);