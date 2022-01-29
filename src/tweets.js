var listadetweets = [
    {
        user:`Pedro`,
        usernickname:`@Pedro`,
        photoprofile: 0,
        tweet: "Fala aew galeurinha!",
    },
]


function tweets(){
        return listadetweets.map((tweet, i) =>{
            return (
                <div className='tweet'>
                    <div className='UserInfo'>
                        <img className='imgUser' src={tweet.photoprofile} alt=''></img>
                    </div>
                    <div className='tweet-content'>
                        <div className='infoname'>
                            <span className='name'>{tweet.user}</span>
                            <span className='nameshort'>{tweet.usernickname}</span>
                        </div>
                            <p className="contentTweet">{tweet.tweet}</p>
                            <img className='barrinha' src={barrinhatweet}></img>
                    </div>
                </div>
            )
        })
    }


function tweetar(tweet){
    $("#postTweet-btnEnviar").click(function(){
        var tweet = $("#postTweet-input").val()
        var index = Math.floor(Math.random()*(max-0+1)+0);
        var tweet = question.nomedememoria + index
        memoria[nomechave] = tweet
        tweets()
        console.log(tweet)
})
}