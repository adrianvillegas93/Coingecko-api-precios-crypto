import { useEffect, useState } from "react";
// import "./App.css";
import axios from "axios";
import TableCoins from "./components/TableCoins";

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');

  // async function getData() {
  // const response = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1`, {
  //   'mode': 'cors',
  //   'headers': {
  //     'Access-Control-Allow-Origin': '*',
  //   }
  // });
  //   const data = await response.json();
  //   console.log(data);
  //   setCoins(data);
  // }

  //La otra forma es con axios
  async function getData() {
    const response = await axios.get(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1`,
      {
        mode: "cors",
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
    console.log(response.data);
    setCoins(response.data);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <h1 className="text-center pt-4">Coin market</h1>

        <input type="text" placeholder='Search a Coin' className="form-control bg-dark text-light mt-4 text-center" onChange={e => setSearch(e.target.value)} />

        <TableCoins coins={coins} search={search} />
      </div>
    </div>
  );
}

export default App;
