
function toggleMenu() {
    var nav = document.getElementById("main-nav");
    if (nav.style.display === "flex") {
      nav.style.display = "none";
    } else {
      nav.style.display = "flex";
    }
  }
  
  function sendMessage() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var messageList = document.getElementById("message-list");
  
    if (name && email && message) {
      var li = document.createElement("li");
      li.innerHTML = "<strong>" + name + "</strong>: " + message;
      messageList.appendChild(li);
      document.getElementById("contact-form").reset();
    }
  }
  
  window.onload = function () {
    var menuToggle = document.getElementById("menu-toggle");
    menuToggle.onclick = toggleMenu;
  
    var sendMessageButton = document.getElementById("send-message");
    sendMessageButton.onclick = sendMessage;
  };
  
