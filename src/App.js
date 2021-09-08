import React, { Component, Suspense } from 'react'
import './App.css';
import ParentLifeCycle from "./Components/LifeCycle/ParentLifeCycle";
import ChildLifeCycle from './Components/LifeCycle/ChildLifeCycle';
import Toggle from './Components/Toggle.jsx';
import InputSubmit from './Components/InputSubmit';
import IndependentComponent from './Components/IndependentComponent';
import FormComponent from './Components/Forms/FormComponent'
import SimpleComponent from './Components/Arrays_Lists/SimpleComponent';
import ContextHome from './Components/Context/ContextHome';
import LazyFunc from './Components/Lazy_Loading/LazyFunc';
import Loader from './Components/Lazy_Loading/Loader';

const LazyClass = React.lazy(() => import ('./Components/Lazy_Loading/LazyClass'));

const App = () => {
  return (
    <div className="App">
      <LazyFunc />
      <Suspense fallback={<Loader/>}>
        <LazyClass />
      </Suspense>
    </div>
  );
}

export default App;
