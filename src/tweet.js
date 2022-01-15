import './tweet.css';



function Tweet(props) {
  return (
    <div className='tweet'>
      <div className='UserInfo'>
        <img className='imgUser' src={props.src}></img>
      </div>
      <div>
      <div className='infoname'>
        <span className='name'>{props.name}</span>
        <span className='nameshort'>{props.nameShort}</span>
      </div>
        <p className="contentTweet">{props.tweet}</p>
      </div>
    </div>
    )
}

export default Tweet;
