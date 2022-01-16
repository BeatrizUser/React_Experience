import './postTweet.css';



function postTweet(props) {
  return (
    <div className='postTweet-content'>
        <div>
        <img className='postTweet-imgUser' src={props.src} alt=''></img>
        </div>
        <div className='postTweet-inputarea'>
            <textarea className='postTweet-input' size="280" placeholder="O que está acontecendo?"></textarea>
            <button className='postTweet-btnEnviar'>Tweetar</button>
        </div>
    </div>
    )
}

export default postTweet;
