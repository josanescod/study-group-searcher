import { useState } from 'react';
import { FaDiscord } from 'react-icons/fa'

function App() {
  return (
    <div className="grid place-items-center">
    <p className="text-4xl font-bold underline text-blue-600 decoration-orange-200 mt-24">
      study group searcher <br/>
      <span className="grid place-items-center " style={{color:"rgb(114, 137, 218)"}}><FaDiscord/></span>
    </p>
    
    </div>
  );
}

export default App;
