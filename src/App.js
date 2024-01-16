import './App.css';
import Greet from './components/Greet';
import Hello from './components/Hello';
import Message from './components/Message';
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
    <Message/>  
  
      {/*
      <Greet name='Starting' called='Initializing'>
      <p>This is children props</p>
      </Greet>
      <Greet name='Processing' called='Mid Journey'>
        <button>Action</button>
      </Greet>
      <Greet name='Ending' called='Good Bye' />

      <Greet name='Starting' called='Initializing' />
      <Greet name='Processing' called='Mid Journey' />
      <Greet name='Ending' called='Good Bye' />
      */}
  
    </div>
  );
}

export default App;
