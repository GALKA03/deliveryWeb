import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "./store";
import {store } from "./store";

const CustomPersistGate = ({ children }) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
};


export default CustomPersistGate;





// import { PersistGate } from 'redux-persist/integration/react';
// import { store, persistor } from '../redux/store.jsx';
// import { Provider } from 'react-redux';
// const PersistGate = (children) => {
//     return (
//     <Provider store={store}>
//               <PersistGate  persistor={persistor}>
//             {children}
//             </PersistGate>
//             </Provider>
//     )
// }
// export default PersistGate