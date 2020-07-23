import React from 'react';
import ReactDOM from 'react-dom';

import './index.less';

if (module.hot) {
  module.hot.accept();
}

const App = () => {
  return (
    <div className='test'>
      test
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
