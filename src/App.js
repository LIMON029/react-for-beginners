import { useState, useEffect } from 'react';

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [dollars, setDollars] = useState(0);
  const [nowPrice, setNowPrice] = useState(1);
  const [nowCoin, setNowCoin] = useState("");

  useEffect(() => {
    fetch('https://api.coinpaprika.com/v1/tickers')
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
        setNowPrice(json[0].quotes.USD.price);
        setNowCoin(json[0].symbol);
      });
  }, []);

  const onChangeDollar = (event) => {
    setDollars(event.target.value);
  };

  const onSelection = (event) => {
    setNowPrice(coins[event.target.value-1].quotes.USD.price);
    setNowCoin(coins[event.target.value-1].symbol);
  };

  return (
    <div>
      <h1>The Coins{loading ? "" : `(${coins.length})`}</h1>
      {loading
        ? <strong>Loading...</strong>
        : <div>
            <input type="number" placeholder='Input the money to convert.' value={dollars} onChange={onChangeDollar}/>
            <span> USD&nbsp;&nbsp;&nbsp;&nbsp;→&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <input type="number" placeholder='Result' value={dollars !== 0 ? dollars/nowPrice : 0} disabled/>
            <span> {nowCoin}</span>
            <select style={{"display": "block", marginTop: 10}} onChange={onSelection}>
              {coins.map((coin) => <option value={coin.rank} key={coin.rank}>{coin.name} ({coin.symbol}) : {coin.quotes.USD.price} USD</option>)}
            </select>
          </div>}
    </div>
  );
}

export default App;
