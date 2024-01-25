import React from 'react';
import './App.css';
import Greet from './components/Greet';
import Hello from './components/Hello';
import Message from './components/Message';
import Welcome from './components/Welcome';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';

function App() {

  return (
    <div className="App">
      <ParentComponent />
      {/* <EventBind /> */}
      {/* <FunctionClick /> */}
      {/* <ClassClick/> */}
      {/*<Counter />*/}
      {/*<Message/>*/}
      {/*
      <Greet name='Starting' called='Initializing'>
      <p>This is children props</p>
    </Greet>
      <Greet name='Processing' called='Mid Journey'>
        <button>Action</button>
      </Greet>*/}
      {/* <Greet name='Ending' called='Good Bye' />
      <Welcome name='Starting' called='Initializing' /> */}
      {/* <Greet name='Processing' called='Mid Journey' />
      <Greet name='Ending' called='Good Bye' />
      */}

    </div>
  );
}

export default App;
