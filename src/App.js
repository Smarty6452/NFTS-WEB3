import "./App.css";
import Header from "./components/Header";
// import CollectionCard from "./components/CollectionCard";
import { useState, useEffect } from "react";
import axios from "axios";
import PunkList from "./components/PunkList";
import Main from "./components/Main";

function App() {
  const [punkListData, setPunkListData] = useState([]);
  const [selectedPunk, setSelectedPunk] = useState(1);

  useEffect(() => {
    const getMyNfts = async () => {
      const openseaData = await axios.get(
        "https://testnets-api.opensea.io/assets?asset_contract_address=0xA35fE9e6Af5e9abF90542BC9130658BB5DaBb6fF&order_direction=asc"
      );
      console.log(openseaData.data.assets);
      setPunkListData(openseaData.data.assets);
    };
    getMyNfts();
  }, []);

  return (
    <div className="app">
      <Header />
      {punkListData.length > 0 && (
        <>
          <Main punkListData={punkListData} selectedPunk={selectedPunk} />
          <PunkList
            punkListData={punkListData}
            setSelectedPunk={setSelectedPunk}
          />
        </>
      )}

      {/* <CollectionCard
        id={0}
        name={"Bandana Punk"}
        traits={[{ value: 7 }]}
        image="https://lh3.googleusercontent.com/toxZYzQUM0Plei1X-EeM5CKB_zWqcKRy1yJ5gVmWSesBsGA4mrQ4D_cNA1fom6uDXxJj29yvXoHDHOz1AuNasaViDXmKZy9CuDd6pw=s0"
      /> */}
    </div>
  );
}

export default App;
