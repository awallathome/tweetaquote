import data from "./data/quotes.json";
import "./App.css";

function App() {
  const random = data[Math.floor(Math.random() * data.length)];
  const randomQ = random.quote;
  const randomQA = "-" + random.author;
  const randomTweet = `${randomQ} + ${randomQA}`;
  const randomTweetLink = `https://twitter.com/intent/tweet?text=${randomTweet}`;
  return (
    <div className="App">
      <header className="App-header">
        <div id="quote-box">
          <div id="text">"{random.quote}"</div>
          <div id="author">-{random.author}</div>
          <div>
            <a id="new-quote" target="_self" href="">
              Click for a new quote
            </a>
          </div>
          <div>
            <a
              target="_blank"
              class="twitter-share-button"
              href={randomTweetLink}
              data-size="large"
            >
              Tweet this!
            </a>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
