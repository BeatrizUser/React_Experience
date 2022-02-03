import React from "react";
import tweets from "./tweets";
import "./tweet.css"
import barrinhatweet from "./assets/barrinha do tweet.jpg"
import photoprofile from "./assets/foto2.jpg"

export default (props) => {
  function GetTweets(){
    return tweets.map((tweet, i) =>{
        return (
            <div className='tweet'>
                <div className='UserInfo'>
                    <img className='imgUser' src={photoprofile} alt=''></img>
                </div>
                <div className='tweet-content'>
                    <div className='infoname'>
                        <span className='name'>{tweet.nome}</span>
                        <span className='nameshort'>@{tweet.nickname}</span>
                    </div>
                        <p className="contentTweet">{tweet.tweet}</p>
                        <img className='barrinha' src={barrinhatweet}></img>
                </div>
            </div>
        )
    })
  }

  return (
    <div>
      <span>{GetTweets()}</span>
    </div>
  );
};