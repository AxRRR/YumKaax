import React, { Fragment, useState } from 'react';
import { Home } from './Home/Home';
import Header from './Layout/Header/Header';
import { Navbar } from './Layout/Navbar';
import Login from './UI/Login';

function App() {
const [showModal, setShowModal] = useState(false);
const showModalHandler = () => {
  setShowModal(true);
};

const hideModalHandler = () => {
  setShowModal(false);
};

  return (
    <Fragment>
        {showModal && <Login onClose={hideModalHandler} />}
        <Navbar onShowModal={showModalHandler} /> 
        <Header />
        <Home />
    </Fragment>
  );

    }
export default App;
