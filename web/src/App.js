import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer, Flip } from 'react-toastify';
import { PersistGate } from 'redux-persist/integration/react';

import store, { persistor } from './store';
import Routes from './routes';
import GlobalStyle from './styles';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <Routes />
          <GlobalStyle />
          <ToastContainer
            transition={Flip}
            position="bottom-right"
            autoClose={5000}
            hideProgressBar
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            className="toast-container"
          />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
