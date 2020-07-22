import React from 'react';
import ReactDOM from 'react-dom';

if (module.hot) {
  module.hot.accept();
}

const App = () => {
  return (
    <div>
      test
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
