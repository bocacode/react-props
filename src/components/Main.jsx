import React from "react";

function Main({ name, total, isAmazing, fruit }) {
  return (
    <main>
      <h1>Hello {name}</h1>
      <h2>Total: {total}</h2>
      {isAmazing && <h2>Fruit: {fruit}</h2>}
    </main>
  )
}

export default Main;