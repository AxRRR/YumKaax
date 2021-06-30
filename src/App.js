import React, { Fragment, useState } from 'react';
import { Home } from './Home/Home';
import Header from './Layout/Header/Header';
import { Navbar } from './Layout/Navbar';
import { Cart } from './UI/Cart/Cart';
import Login from './UI/Login';
import { Sidebar } from './UI/Sidebar/Sidebar';

function App() {
  const [showModal, setShowModal] = useState(false);
  const showModalHandler = () => {
    setShowModal(true);
  };
  
  const hideModalHandler = () => {
    setShowModal(false);
  };

  const [showModalCart, setShowModalCart] = useState(false);
  
  const showModalCartHandler = () => {
  setShowModalCart(true);
  };

  const hideModalCartHandler = () => {
  setShowModalCart(false);
  };

  const [showSidebar, setShowSidebar] = useState(false);
  
  const showSidebarHandler = () => {
    setShowSidebar(true);
  };

  const hideSidebarHandler = () => {
    setShowSidebar(false);
  };

  return (
    <Fragment>
        {showModal && <Login onClose={hideModalHandler} />}
        <Navbar 
          onShowModal={showModalHandler} 
          onShowModalCart={showModalCartHandler}
          onShowSidebar={showSidebarHandler}
        /> 
        <Header />
        {showSidebar && 
          <Sidebar 
            onCloseSidebar={hideSidebarHandler}
            onShowModalCart={showModalCartHandler}
        />}
        {showModalCart && <Cart onCloseCartModal={hideModalCartHandler} />}
        <Home />

    </Fragment>
  );

    }
export default App;
