import React, { useState, useEffect } from 'react';
import Accordion from './Components/Accordion/Accordion';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Modal from './Components/Modal/Modal';
import useModal from './Components/Modal/useModal';
import ErrorBoundry from './Components/ErrorBoundry';
import './App.css';


export default function App() {
  const [db, setDB] = useState([]);
    
  const addNewSection = (title, body) => {
    setDB([...db, { id: (db.length+1), title, body }])
  }

  useEffect( () => {
    let url = './data/sections.json';
    fetch(url)
      .then(response => response.json())
      .then(sections => setDB(sections))
  }, [])

  const {isShowing, toggle} = useModal();
    return (
        <main className="App">
          <Navbar/>
            <section className="accordion__section">
              
              <button className="button-default" onClick={toggle}>
                Add New Section
              </button>
              <Modal isShowing={isShowing} hide={toggle} newSection={addNewSection}/>
              
              {db.map((item) => (
                <ErrorBoundry>
                  <Accordion {...item} />
                </ErrorBoundry>
              ))}
              
            </section>
          <Footer/>
        </main>
    )
}
