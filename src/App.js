import './App.css';
import ParentLifeCycle from "./Components/LifeCycle/ParentLifeCycle";
import ChildLifeCycle from './Components/LifeCycle/ChildLifeCycle';
import Toggle from './Components/Toggle.jsx';
import InputSubmit from './Components/InputSubmit';
import IndependentComponent from './Components/IndependentComponent';
import FormComponent from './Components/Forms/FormComponent'
import SimpleComponent from './Components/Arrays_Lists/SimpleComponent';
import ContextHome from './Components/Context/ContextHome';

const App = () => {
  return (
    <div className="App">
    <ContextHome/>
      </div>
  );
}

export default App;
