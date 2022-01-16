import './tweet.css';
import barrinhatweet from "./assets/barrinha do tweet.jpg"



function Tweet(props) {
  return (
    <div className='tweet'>
      <div className='UserInfo'>
        <img className='imgUser' src={props.src} alt=''></img>
      </div>
      <div className='tweet-content'>
      <div className='infoname'>
        <span className='name'>{props.name}</span>
        <span className='nameshort'>{props.nameShort}</span>
      </div>
        <p className="contentTweet">{props.tweet}</p>
        <img className='barrinha' src={barrinhatweet}></img>
      </div>
    </div>
    )
}

export default Tweet;
