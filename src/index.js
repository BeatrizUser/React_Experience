import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Tweet from './tweet';
import reportWebVitals from './reportWebVitals';
import imgUser1 from "./assets/toilet ban.png"

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <div className='containerTweets'>
    <Tweet name= "Pedro" nameShort= "@pedrozero" tweet= "Agora, aos 22 anos meu irmão morador do Rj descobriu que Tijuca e Barra da Tijuca não é o mesmo lugar!" src={imgUser1}/>
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
