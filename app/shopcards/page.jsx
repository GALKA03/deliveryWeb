 import BasketQuantityContainer from "./BasketQuantityContainer"
// import BasketSection from "./BasketSection"
// import { Provider } from 'react-redux';
// import store from '../redux/store';

import Product from "./Produkt"
const BasketPage = () => {
    return (
        //    <Provider store={store}>
       <section className="container mx-auto ">
            <h1 className="text-4xl mt-4 text-center">Pizzas delivery</h1>
            <div className="flex justify-between">
            <div>
               {/* <Product/> */}
    </div>
            <div>
                {/* <BasketQuantityContainer /> */}
            </div>  
        </div>
        </section>
      
    // </Provider>
      
    )
}
export default BasketPage