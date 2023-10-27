import React from "react";

const FormContact = () => {
    return(
<>
<div class="cardForm">
    <div class="chat-header">Chat</div>
      <div class="chat-window">
        <ul class="message-list"></ul>
      </div>
      <div class="chat-input">
          <input type="text" class="message-input" placeholder="Type your message here"/>
          <button class="send-button">Envoyer</button>
      </div>
    </div>
  
</>
    );
};

export default FormContact;