// Get the submit button and input field
var rasamsg
const submitBtn = document.getElementById("sendMsg");
const inputField = document.getElementById("textInput");

// function userMsg()
// {
 
//     var userMsgDiv = document.createElement("div");
//     userMsgDiv.classList.add("chat", "outgoing");
//     userMsgDiv.innerHTML = `
//       <div class="details">
//         <p class="user-msg">${inputValue}</p>
//       </div>
//     `;
//     chatBox.appendChild(userMsgDiv);

// }

// Add event listener to submit button
submitBtn.addEventListener("click", (event) => {
  // Prevent the default form submission behavior
  event.preventDefault();
  
  // Get the value of the input field
  const inputValue = inputField.value;
  console.log(inputValue);
  fetch("/rasachat/" + inputValue + "/")
  .then((response) => response.json())
  .then((data) => {  
   rasamsg=data.msg
   console.log(data.msg)
  var subButtonUserResponse = document.createElement("div");
  subButtonUserResponse.classList.add("chat", "incoming");
  subButtonUserResponse.innerHTML = `
  <img src="/static/images/logo-figma.png" alt="" />
  <div class="details">
 <p class="user-msg">${rasamsg}</p>
  </div>

    `;
  chatBox.appendChild(subButtonUserResponse);


   chatBox.scrollTop = chatBox.scrollHeight;
  })

  var chatBox = document.querySelector(".chat-box");
  var userMsgDiv = document.createElement("div");
  userMsgDiv.classList.add("chat", "outgoing");
  userMsgDiv.innerHTML = `
    <div class="details">
      <p class="user-msg">${inputValue}</p>
    </div>
    <img src="/static/images/logo-figma.png" alt="" />
  `;
  chatBox.appendChild(userMsgDiv);
  // Clear the input field
  inputField.value = "";

  chatBox.scrollTop = chatBox.scrollHeight;
});


