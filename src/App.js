import React, {useEffect} from 'react';
import './App.css';
import Header from './Components/Header';
import Services from './Components/Services';
import {connect} from 'react-redux';
import {initApp, showMore, showModal} from './redux/reducer'
import Modal from './Components/Modal';
import InfoModal from './Components/InfoModal';

function App({data, initApp, showMore, page, showModal}) {
  console.log(data);

  useEffect(()=> {
    initApp(data);
  },[])


  window.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      if (page < data.length) {
        showMore();
        console.log(data, page);
      } else {
        showModal();
      }
    }
  });
  
  return (
        <div>
          <Header/>
          <Services/>
          <Modal/>
          <InfoModal/>
        </div>
  )
}

const MapStateToProps = (store) => {
  return {
    data: store.filtered_products,
    page: store.page
  }
}

export default connect(MapStateToProps, {initApp, showMore, showModal})(App);