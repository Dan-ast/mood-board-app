import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


export function MoodBoardItem({color, image, description, alt}) {
  return (
    <div className="mood-board-item" style={{
      backgroundColor: color,
    }}>
      <img className="mood-board-image" src={image} alt={alt}/>
      <h3 className="mood-board-text">{description}</h3>
    </div>
  )
}

export function MoodBoard() {
  return (
    <div>
      <h1 className="mood-board-heading">Destination Mood Board</h1>
      <div className="mood-board">
        <MoodBoardItem color="#272343" image="https://cdn.freecodecamp.org/curriculum/labs/pathway.jpg" description="Caribbean" alt="Tropical pathway leading to turquoise Caribbean waters" />
        <MoodBoardItem color="#272343" image="https://cdn.freecodecamp.org/curriculum/labs/shore.jpg" description="Gawadar Beach" alt="Sandy shore of Gawadar Beach with gentle waves" />
        <MoodBoardItem color="#272343" image="https://cdn.freecodecamp.org/curriculum/labs/grass.jpg" description="Cape Town" alt="Green grassy hills overlooking Cape Town landscape" />
        <MoodBoardItem color="#272343" image="https://cdn.freecodecamp.org/curriculum/labs/ship.jpg" description="Suez Canal" alt="Large cargo ship passing through the Suez Canal" />
        <MoodBoardItem color="#272343" image="https://cdn.freecodecamp.org/curriculum/labs/santorini.jpg" description="Santorini" alt="White buildings and blue domes of Santorini against the sea" />
        <MoodBoardItem color="#272343" image="https://cdn.freecodecamp.org/curriculum/labs/pigeon.jpg" description="Istanbul" alt="Pigeons flying over historic Istanbul architecture" />
      </div>
    </div>
  );
}