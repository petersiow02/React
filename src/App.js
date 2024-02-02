import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data";

export default function App() {
  const dataElement = data.map(item => {
    return (
      <Card 
        key = {item.id}
        item = {item}
        // Another ways is  {...item}
        // In Card.js, we only call props.something with no item word
      />
    )
  })
  return (
    <div>
        <Navbar />
        <Hero />
        <section className="card--list">
          {dataElement}
        </section>
    </div>
  )
}
