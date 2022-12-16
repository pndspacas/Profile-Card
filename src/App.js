import React from "react";
import Image from "../src/components/Image";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="appContainer">
      <Image />;
      <Header />
      <Footer />
    </div>
  );
};

export default App;
