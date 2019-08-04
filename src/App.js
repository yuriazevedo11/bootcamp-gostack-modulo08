import React, { useState } from 'react';

function App() {
  const [techs, setTechs] = useState(['ReactJS', 'React Native']);
  const [newTech, setnewTech] = useState('');

  function handleAdd() {
    setTechs([...techs, newTech]);
    setnewTech('');
  }

  return (
    <>
      <ul>
        {techs.map(tech => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
      <input
        type="text"
        value={newTech}
        onChange={e => setnewTech(e.target.value)}
      />
      <button type="button" onClick={handleAdd}>
        Adicionar
      </button>
    </>
  );
}

export default App;
