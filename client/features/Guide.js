import React from 'react';

const Guide = () => {
  return (
    <div id='guide-container'>
      <div id='guide-info'>
        <h2 id='guide-title'>
          Unconstrained by rules or objectives, only adventure!
        </h2>
        <div id='guide-words'>
          <ul>
            <li>
              Define Your Setting & Role
              <p>
                Choose a setting and a role, AI will utilize your selection to
                create the initial prompt for a story.
              </p>
            </li>
            <li>
              Choose Your Actions
              <p>
                You can decide what your character says or does. The AI will
                produce responses from other characters, or world events for you
                to respond to. Every adventure is unique and unexpected!
              </p>
            </li>
            <li>
              Chatbox Messages
              <p>
                Please keep your responses short, precise and centered around
                the scenerio for the best possible experience.
              </p>
            </li>
            <li>
              Explore Your Imagination
              <p>Lastly, have fun and explore your childhood imagination!</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Guide;
