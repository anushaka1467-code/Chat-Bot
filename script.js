async function sendMessage() {
  let input = document.getElementById("userInput");
  let message = input.value;
  if (!message) return;

  let chatBox = document.getElementById("chat-box");
  chatBox.innerHTML += "<b>You:</b> " + message + "<br>";

  let res = await fetch("http://127.0.0.1:5000/chat", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({message})
  });

  let data = await res.json();
  chatBox.innerHTML += "<b>Bot:</b> " + data.reply + "<br>";

  input.value = "";
}
