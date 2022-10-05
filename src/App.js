import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import { useState } from "react";

function App() {

  const [modalState, setModalState] = useState(false);
  return (
    <>
      <Header cartBtnClick={() => {setModalState(true); console.log('hii')}} />
      {modalState && <Cart/>}
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
