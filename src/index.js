import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Tweet from './tweet';
import reportWebVitals from './reportWebVitals';
import imgUser1 from "./assets/toilet ban.png"
import imgUser2 from "./assets/foto2.jpg"
import PostTweet from "./postTweet"

ReactDOM.render(
  <React.StrictMode>
    <div className='containerTweets'>
    <PostTweet user="default" src={imgUser2}/>
    <Tweet name= "Pedro" nameShort= "@pedroca" tweet= "Fala Mundo!" src={imgUser1}/>
    <Tweet name= "Julia" nameShort= "@julinha" tweet= "Pum!" src={imgUser1}/>
    <Tweet name= "Bia" nameShort= "@bibinha" tweet= "Catchau!" src={imgUser1}/>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
