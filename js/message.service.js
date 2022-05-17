function getMessages() {
  fetch("blog-001-backe-i5uhpe:3000/messages", {
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      appendMessages(data);
    })
    .catch((error) => {
      console.log("Error", error);
    });
}

function appendMessages(messages) {
  let messageContainer = document.getElementById("message-container");
  messageContainer.innerHTML = "";
  for (message of messages) {
    let messageElement = document.createElement("div");
    messageElement.classList.add(
      "message",
      "p-3",
      "d-flex",
      "flex-column",
      "mb-3",
      "tile-shadow",
      "rounded"
    );
    let author = document.createElement("span");
    author.innerText = message?.author;
    author.classList.add("fs-8", "fw-light", "mb-2");
    let messageText = document.createElement("span");
    messageText.innerText = message.message;
    messageElement.appendChild(author);
    messageElement.appendChild(messageText);
    messageContainer.appendChild(messageElement);
  }
}

async function postMessage(event) {
  event.preventDefault();
  let name = document.getElementById("inputName")?.value;
  let message = document.getElementById("inputMessage")?.value;
  if (name?.length > 0 && message?.length > 0) {
    const response = await fetch("blog-001-backe-i5uhpe:3000/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        author: name,
        message: message,
      }),
    });
    await response.json();
    getMessages();
  }
}

getMessages();
