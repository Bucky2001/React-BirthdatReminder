import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [person, setPerson] = useState(data);
  return (
    <main>
      <section className="container">
        <h3>{person.length} Birthdays Today</h3>

        <List data={person} />
        <button type="button" onClick={() => setPerson([])}>
          CLear All
        </button>
      </section>
    </main>
  );
}

export default App;
