import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}
function Header() {
  // const style={color: "red", fontSize: "40px", textTransform: "uppercase"};
  return (
    <header className="header">
      <h1>React Restaurant</h1>
    </header>
  );
}
function Menu() {
  const pizzas = pizzaData;
  //const pizzas = [];
  const numpizzas = pizzas.length;

  return (
    <div className="menu">
      <h2> Our Menu</h2>
      {numpizzas > 0 ? (
        <>
          <p>Kjo eshte menu e restorantit tone</p>

          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We re still working on our menu</p>
      )}
    </div>
  );
}

function Order({ openHour, closeHour }) {
  return (
    <div className="order">
      <p>
        We are open from {openHour}:00 to {closeHour}:00.Come visit us or order
        online!
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

function Pizza({ pizzaObj }) {
  // if (pizzaObj.soldOut) return null;
  return (
    <li className="pizza">
      <div>
        <img src={pizzaObj.photoName} alt={pizzaObj.name} />
        <div className="pizza">
          <h3>{pizzaObj.name}</h3>
          <p>{pizzaObj.ingredients}</p>
          <p>{pizzaObj.soldOut ? "Sold Out" : pizzaObj.price}</p>
        </div>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 10;
  const closeHour = 22;
  // if (hour >= openHour && hour <= closeHour) alert("We are open!");
  // else alert("Sorry, we are closed!");
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  return (
    <footer>
      {isOpen ? (
        <Order openHour={openHour} closeHour={closeHour} />
      ) : (
        <p>Sorry,we're closed!</p>
      )}
    </footer>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

/*perdorni map per te ber te mundur shfaqjen e gjith skills dsh*/
