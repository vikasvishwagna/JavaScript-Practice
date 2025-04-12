
let messages = [
  { from: "Vikas", text: "Hey!", isRead: false },
  { from: "John", text: "Hi!", isRead: true },
  { from: "Vikas", text: "Are you free?", isRead: false },
  { from: "Meena", text: "Good morning!", isRead: true },
  { from: "John", text: "Let's catch up.", isRead: false },
];

// ✅ 1. Show all Unread Messages
let unreadMessages = messages.filter(msg => !msg.isRead);

console.log("📩 Unread Messages:");
unreadMessages.forEach(msg => {
  console.log(`${msg.from}: ${msg.text}`);
});

// ✅ 2. Mark all messages from "Vikas" as read
messages.forEach(msg => {
  if (msg.from === "Vikas") {
    msg.isRead = true;
  }
});

console.log("\\n✅ All messages from Vikas marked as read.");

// ✅ 3. Count Total Messages Sent by Each User
let messageCount = {};

messages.forEach(msg => {
  messageCount[msg.from] = (messageCount[msg.from] || 0) + 1;
});

console.log("\\n📊 Message Count per Sender:");
for (let sender in messageCount) {
  console.log(`${sender}: ${messageCount[sender]} message(s)`);
}

// ✅ 4. Display All Messages with Read Status
console.log("\\n📜 All Messages:");
messages.forEach(msg => {
  let status = msg.isRead ? "✅ Read" : "📩 Unread";
  console.log(`${msg.from}: ${msg.text} - ${status}`);
});

/**🧾 Description:
Simulate a message list (like WhatsApp):

Show unread messages

Mark messages as read

Count total messages sent by each user */