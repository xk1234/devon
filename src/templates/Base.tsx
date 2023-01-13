import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Banner } from './Banner';
import { Footer } from './Footer';
import { Hero } from './Hero';
import { VerticalFeatures } from './VerticalFeatures';
import { Navbar } from '../navigation/Navbar';
import Head from 'next/head'

const Base = () => (
  <div className="antialiased text-gray-600">
    <Meta title={"QuizNotes"} description={AppConfig.description} />
    <Navbar/>
    <Hero />
    <VerticalFeatures />
    <Banner />
    <Footer />
  </div>
);

export { Base };
