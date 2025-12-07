import React from "react";
import HowItWorks from "../../components/Home/HowItWorks";
import CustomerFetback from "../../components/Home/CoustomerFetback";
import LoanFeatures from "../../components/Home/LoanFeatures";
import Banner from "../../components/Home/Banner";
import AvlableLoan from "../../components/Home/AvlableLoan";

const Home = () => {
  return (
    <div>
      {/* Banner secation  */}

      <section>
        <Banner></Banner>
      </section>

      <AvlableLoan></AvlableLoan>

      {/* Hwo it works section  */}

      <section>
        <HowItWorks></HowItWorks>
      </section>

      <LoanFeatures></LoanFeatures>
      <CustomerFetback></CustomerFetback>
    </div>
  );
};

export default Home;
