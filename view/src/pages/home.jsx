import React from 'react'
import Hero from '../components/Hero'
import TrustedBy from './../components/TrustedBy';
import Slide from '../components/Slide';
import Features from '../components/Features';
import FeaturesDark from '../components/FeaturesDark';
import ProductSlider from '../components/ProductSlider';

export default function Home() {
  return (
    <div>
        <Hero/>
        <TrustedBy/>
        <Slide/>
        <Features/>
        <FeaturesDark/>
        <ProductSlider/>
    </div>
  )
}
