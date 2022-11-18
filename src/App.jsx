import { useState, useEffect } from 'react';

import Search from './components/Search';
import List from './components/List';
import Footer from './components/Footer';
import ToogleTheme from './components/ToogleTheme';

function App() {
  const html = document.querySelector('html');
  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState([]);
  const [active, setActive] = useState(true);
  const [theme, setTheme] = useState('light-theme');

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
    html.style.backgroundColor = "white";
    fetchData();
  }, []);

  const handleChangeActive = () => {
    active ? (
      setActive(false),
      setTheme('dark-theme'),
      html.style.backgroundColor = "#363636"

    ) : (
      setActive(true),
      setTheme('light-theme'),
      html.style.backgroundColor = "white"

    );

  };

  return (
    <div className={`columns is-centered mt-6 ${theme}`} >
      <div className="column is-half is-centered">
        <div className="columns is-mobile">
          <div className="column is-full">
            <div className="box p-0">
              <div className="card events-card">
                <div className="card-table">
                  <div className="content">
                    <ToogleTheme active={active} onChangeActive={handleChangeActive} />
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
