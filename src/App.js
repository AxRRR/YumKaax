import React, { Fragment, useState } from 'react';
import { Home } from './Home/Home';
import { Navbar } from './Layout/Navbar';
import Login from './UI/Login';
import { Previous } from './UI/Previous';

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
        <Home />
        <Previous />
    </Fragment>
  );

    }
export default App;
