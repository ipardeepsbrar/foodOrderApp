import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import { ModalContext } from "./store/cartContext";
import CartProvider from "./store/CartProvider";

function App() {
  return (
    <CartProvider>
      <ModalContext>
        <Header />
      </ModalContext>
      <main>
        <Meals /> 
      </main>
    </CartProvider>
  );
}

export default App;
