import { useState, useEffect } from 'react';
import 'bulma/css/bulma.css';
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
      setData(e);
    });
  }
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);   
  };

  const searchedStories = data.filter((story) =>
    story.title.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase().includes(searchTerm.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase()));
 
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="columns is-centered mt-6">
      <div className="column is-half is-centered">
        <div className="columns is-mobile">
          <div className="column is-full">
            <div className="box p-0">
              <div className="card events-card">
                <div className="card-table">
                  <div className="content">
                    <Search onSearch={handleSearch} search={searchTerm} />
                    <List list={searchedStories} />
                  </div>
                </div>
                <Footer />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
