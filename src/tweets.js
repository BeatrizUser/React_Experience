export default (props) => {
    const listadetweets = [
        {nome: "Suelyo", nickname: "Bode", tweet: "Oi galeura! sou o suelyo!"},
        {nome: "Bia", nickname: "Bibinha", tweet: "Oi galeura! sou o Bia!"},
        {nome: "Duda", nickname: "Borobinha", tweet: "Oi galeura! sou o Duda!"},
      ]
      
    function SaveTweets(){
        var TextTweet = document.getElementById("#postTweet-inputarea").text()
        var nomeNome = "nome"
        var nomeNickname = "nickname"
        var nometweet = "tweet"
            listadetweets[nometweet] = TextTweet
            listadetweets[nomeNome] = "Anonimo"
            listadetweets[nomeNickname] = "@anonimo" 
            return
    };

    return (
        <div className='postTweet-content'>
            <div>
            <img className='postTweet-imgUser' src={props.src} alt=''></img>
            </div>
            <div className='postTweet-inputarea'>
                <textarea id='postTweet-input' size="280" placeholder="O que está acontecendo?"></textarea>
                <button id='postTweet-btnEnviar' onClick={SaveTweets()}>Tweetar</button>
            </div>
        </div>
    )
}
