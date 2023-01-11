import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

import {
  Header,
  HeroSection,
  About,
  Missions,
  Products,
  Testimonials,
  Application,
  Features,
  Footer,
} from 'layouts';
import { Button } from 'components';
import icon from '../../assets/icons/back-to-top.svg';
import { useAppSelector } from 'hooks';

function Home() {
  const { isLogin } = useAppSelector((state) => state.auth);
  if (isLogin) return <Navigate to="/lessons" />;

  const [isVisible, setIsVisible] = useState<boolean>(true);

  return (
    <>
      <Header isVisible={isVisible} />
      <HeroSection onHandleIntersection={setIsVisible} />
      <About />
      <Missions />
      <Products />
      <Testimonials />
      <Application />
      <Features />
      <Footer />
      {isVisible || <Button backToTop leftImgIcon={icon} />}
    </>
  );
}

export default Home;
