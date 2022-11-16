import { useState, useEffect } from 'react';
import { FaDiscord } from 'react-icons/fa';

import Search from './components/Search';
import List from './components/List';
import Footer from './components/Footer';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState([]);

  function fetchData() {
    (async function () {
      const e = await fetch(`./data/data.json`);
      return await e.json();
    })().then((e) => {
      //console.log(e);
      setData(e);
    });
  }
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    //console.log(event.target.value);
  };

  const searchedStories = data.filter((story) =>
    story.title.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase().includes(searchTerm.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase()));

  //fetchData()
  useEffect(() => {
    fetchData();
  }, []);


  return (
    <div className="grid place-items-center">
     
      {/*<p className="text-4xl font-bold underline text-blue-600 decoration-orange-200 mt-24">
        study group searcher
      </p>*/}
      {/*<span className="grid place-items-center text-4xl" style={{ color: "rgb(114, 137, 218)" }}><FaDiscord /></span>*/}
      {/*<label className="mt-5 mb-5" htmlFor="search"><span className="text-2xl">Asignatura: </span></label>
      <input id="search" type="text" />*/}
      <Search onSearch={handleSearch} search={searchTerm} />
      <br />
      <List list={searchedStories} />
      {/*<button onClick={fetchData} className="mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Button
    </button>*/}
      <br />
      <Footer />
    </div>
  );
}

export default App;
