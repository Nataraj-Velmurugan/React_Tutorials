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
import ErrorBoundary from './Components/Error/ErrorBoundary';
import ErrorChild from './Components/Error/ErrorChild'
import RefDOMComponent from './Components/Refs_DOM/RefDOMComponent';
import RefFunc from './Components/Refs_DOM/RefFunc';
import HocComponent from './Components/HOC/hocComponent';
import ButtonHOCComponent from './Components/HOC/ButtonHOCComponent';
import AltPureComp from './Components/Pured/AltPureComp';
import Create from './Components/CRUD/Create';
import UseStateFunc from './Components/Func/UseStateFunc';
import UseEffectFunc from './Components/Func/UseEffectFunc';


const App = () => {
  return (
    <>
    <UseEffectFunc/>
    </>

  );
}

export default App;


