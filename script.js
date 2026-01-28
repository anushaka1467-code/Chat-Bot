const API_KEY = "PASTE_YOUR_API_KEY_HERE"; // <-- PUT YOUR KEY HERE

async function sendMessage() {
  let input = document.getElementById("userInput");
  let msg = input.value.trim();
  if (!msg) return;

  let chatBox = document.getElementById("chat-box");

  // Show user message
  chatBox.innerHTML += `<div><b>You:</b> ${msg}</div>`;
  input.value = "";

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: msg }] }]
        })
      }
    );

    const data = await response.json();
    const reply = data.candidates[0].content.parts[0].text;

    // Show bot reply
    chatBox.innerHTML += `<div><b>Bot:</b> ${reply}</div><br>`;
    chatBox.scrollTop = chatBox.scrollHeight;

  } catch (error) {
    chatBox.innerHTML += `<div><b>Bot:</b> Error connecting to AI ❌</div>`;
  }
}
