import React, { useState } from "react";
import "./FAQChatbot.css";

const faqs = [
  { question: "What is Ecoloops?", answer: "Ecoloops is a platform for..." },
  { question: "How do I create an account?", answer: "Click on signup and fill the form." },
  { question: "How can I view my order history?", answer: "Go to your account and select 'Order History'." },
  // Add more FAQs as needed
];

const FAQChatbot = () => {
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi! Ask me anything about Ecoloops." }
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    const userMessage = { from: "user", text: input };
    setMessages((msgs) => [...msgs, userMessage]);

    // Find a matching FAQ
    const found = faqs.find(faq =>
      faq.question.toLowerCase().includes(input.toLowerCase())
    );
    setTimeout(() => {
      setMessages((msgs) => [
        ...msgs,
        {
          from: "bot",
          text: found ? found.answer : "Sorry, I don't know the answer to that yet."
        }
      ]);
    }, 500);
    setInput("");
  };

  return (
    <div className="faq-chatbot">
      <div className="faq-chatbot-window">
        {messages.map((msg, idx) => (
          <div key={idx} className={`faq-chatbot-msg ${msg.from}`}>
            {msg.text}
          </div>
        ))}
      </div>
      <div className="faq-chatbot-input">
        <input
          type="text"
          value={input}
          placeholder="Type your question..."
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === "Enter" && handleSend()}
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default FAQChatbot;