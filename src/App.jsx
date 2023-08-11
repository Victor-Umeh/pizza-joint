import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import AnimationProvider from "./libs/animationContext";
import Header from "./components/Header";
import Home from "./components/Home";
import Base from "./components/Base";
import Toppings from "./components/Toppings";
import Order from "./components/Order";
import Modal from "./components/Modal";

function App() {
  const [pizza, setPizza] = useState({ base: "", toppings: [] });
  const [showModal, setShowModal] = useState(false);
  const location = useLocation();

  const addBase = (base) => {
    setPizza({ ...pizza, base });
  };

  const addTopping = (topping) => {
    let newToppings;
    if (!pizza.toppings.includes(topping)) {
      newToppings = [...pizza.toppings, topping];
    } else {
      newToppings = pizza.toppings.filter((item) => item !== topping);
    }
    setPizza({ ...pizza, toppings: newToppings });
  };

  return (
    <AnimationProvider>
      <Header />
      <AnimatePresence mode="wait">
        <Modal showModal={showModal} setShowModal={setShowModal} />
        <Routes location={location} key={location.key}>
          <Route
            path="/base"
            element={<Base addBase={addBase} pizza={pizza} />}
          ></Route>
          <Route
            path="/toppings"
            element={<Toppings addTopping={addTopping} pizza={pizza} />}
          ></Route>
          <Route
            path="/order"
            element={<Order pizza={pizza} setShowModal={setShowModal} />}
          ></Route>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </AnimatePresence>
    </AnimationProvider>
  );
}

export default App;
