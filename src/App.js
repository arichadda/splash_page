import './App.css';

import vid from './vid.mp4'

function App() {
  return (
    <div className="App">
      <video autoPlay muted height='85%' width='85%'>
        <source src= { vid } type="video/mp4" />Your browser does not support the video tag. I suggest you upgrade your browser.
      </video>
    </div>
  );
}

export default App;
