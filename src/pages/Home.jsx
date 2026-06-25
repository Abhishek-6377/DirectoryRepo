import React, { useState, useEffect } from "react";
import HomeSlider from "../components/home/HomeSlider";
import OrganicSection from "../components/home/OrganicSection";
import Background from "../components/home/Background";
import OrganicOnly from "../components/home/OrganicOnly";
import CounterSection from "../components/home/CounterSection";
import TopDealsDiscount from "../components/home/TopDealsDiscount";

export default function Home() {

  return (
    <div>
      <HomeSlider/>
      <OrganicSection/>
      <Background/>
      <OrganicOnly/>
      <CounterSection/>
      <TopDealsDiscount/>
    </div>
  );
}
