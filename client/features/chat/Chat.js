import React from 'react';
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const Chat = () => {
  const location = useLocation();
  const { roleName, setting } = location.state;

  const [input, setInput] = useState(''); //input html element
  const [messageHistory, setMessageHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const chatScrollEnd = useRef(null);
  // const[song, setSong] = useState
  // if (setting === 'cyberpunk') {
  //   setSong('/Internet-Dungeon-Crawler/public/song1.mp3')
  // }

  useEffect(() => {
    const sendInitialScenario = async () => {
      const scenario = `You are the dungeon master and I am the player. The setting is ${setting}. You are free to come up with the specific scenario. My character is a ${roleName}. I will input a prompt with my actions, and you will reply with the consequences of my actions in the game's universe. AI will construct the details of the gaming session to provide an immersive experience, and will now begin with only narration introducing player to the scenario. Please try to keep responses to 200 tokens or less.`;

      setMessageHistory([{ role: 'system', content: scenario }]); //first value in message history array
      const initialMessage = [{ role: 'system', content: scenario }];
      const response = await sendMessage(initialMessage);

      // updating message history with first response
      setMessageHistory(prevMessageHistory => [
        ...prevMessageHistory,
        { role: 'assistant', content: response },
      ]);
    };
    sendInitialScenario();
  }, []);

  // Scroll to bottom of chat window on messageHistory update
  useEffect(() => {
    chatScrollEnd.current.scrollIntoView({ behavior: 'smooth' });
  }, [messageHistory]);

  // User submitting a message
  const handleSend = async () => {
    setMessageHistory(prevMessageHistory => [
      ...prevMessageHistory,
      { role: 'user', content: input },
    ]);

    const currentMessageHistory = [
      ...messageHistory,
      { role: 'user', content: input },
    ];
    setInput('');

    chatScrollEnd.current.scrollIntoView({ behavior: 'smooth' });

    // send message history to bot with user submission and update it with the bot's response
    const response = await sendMessage(currentMessageHistory);
    setMessageHistory(prevMessageHistory => [
      ...prevMessageHistory,
      { role: 'assistant', content: response },
    ]);
  };

  // Request to backend
  const sendMessage = async arrayOfMessages => {
    setIsLoading(true);
    const response = await axios.post('/api/generate', { arrayOfMessages });
    setIsLoading(false);
    return response.data;
  };

  const Message = ({ message }) => {
    if (message.role === 'assistant') {
      return (
        <div className='ai-messages'>
          <p>{message.content}</p>
        </div>
      );
    } else if (message.role === 'user') {
      return (
        <div className='user-messages'>
          <p>
            {'> '}
            {message.content}
          </p>
        </div>
      );
    }
  };

  const ChatHistory = ({ messageHistory }) => {
    return (
      <>
        {messageHistory.map((message, index) => (
          <Message key={index} message={message} />
        ))}
      </>
    );
  };

  return (
    <div id='chat-container'>
      <div id='chat'>
        <div id='filler-fix'></div>
        <ChatHistory messageHistory={messageHistory} />
        {isLoading && <p>Loading...</p>}
        <div ref={chatScrollEnd} id='chat-end'></div>
      </div>
      <div id='input-field'>
        <input
          type='text'
          name='input'
          placeholder='What do you do?'
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => {
            if (e.key === 'Enter') {
              handleSend();
            }
          }}
          tabIndex={0}
        />
      </div>
    </div>
  );
};

export default Chat;


{/* <audio controls loop autoplay id="myAudio">
  <setSong type="audio/mpeg">
  Your browser does not support the audio element.
</audio> */}