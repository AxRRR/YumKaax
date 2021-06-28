import React, { Fragment, useState } from 'react';
import { Home } from './Home/Home';
import Header from './Layout/Header/Header';
import { Navbar } from './Layout/Navbar';
import { Cart } from './UI/Cart/Cart';
import Login from './UI/Login';

function App() {
  const [showModal, setShowModal] = useState(false);
  const showModalHandler = () => {
    setShowModal(true);
  };
  
  const hideModalHandler = () => {
    setShowModal(false);
  };

  const [showModalCart, setShowModalCart] = useState('hidden');
  
  const showModalCartHandler = () => {
  setShowModalCart(true);
  };

  const hideModalCartHandler = () => {
  setShowModalCart(false);
  };

  return (
    <Fragment>
        {showModal && <Login onClose={hideModalHandler} />}
        
        <Navbar 
          onShowModal={showModalHandler} 
          onVisibility={'visible'}
        /> 
        <Header />
        {/* {showModalCart && <Cart onCloseCartModal={hideModalCartHandler} />} */}
        <Cart onVisibility={'hidden'} />
        <Home />
    </Fragment>
  );

    }
export default App;
