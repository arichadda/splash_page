import './App.css';

import vid from './vid.mp4'

function App() {
  return (
    <div className="App">
      <div
          dangerouslySetInnerHTML={{
            __html: `<video className="app__backgroundVideo" autoplay loop muted playsinline height='85%' width='85%'>
              <source src=${vid} type="video/mp4" />
              Your browser does not support the video tag.
          </video>`,
          }}
        />
    </div>
  );
}

export default App;
