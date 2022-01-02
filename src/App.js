import './App.css';
import backgroundImg from './assets/background.png';
import faq from './assets/FAQ.png';
import faqSection from './assets/FAQ_SECTION.png';
import home from './assets/HOME.png';
import rarity from './assets/RARITY.png';
import logo from './assets/logo.png';
import worms from './assets/WORMS.png';
import smokers from './assets/SMOKERS_SECTION.png';
import mouth from './assets/MOUTH.png';
import hats from './assets/HATS.png';
import thirdEyes from './assets/3RDEYES.png';
import eyeBalls from './assets/EYEBALLS.png';
import fsr from './assets/FRUIT_SKINS_RARITY.png';
import br from './assets/BackgroundsRarity.png';
import raHeader from './assets/RARITIES.png';
import roadmap from './assets/ROADMAP.png';
import roadmapSection from './assets/ROADMAP_SECTION.png';
import storyBoard from './assets/Story_board.png';
import trf from './assets/TRF.png';
import twitter from './assets/TWITTER.png';
import discord from './assets/DISCORD.png';
import { useRef } from 'react';

function App() {
  const homeRef = useRef(null);
  const roadmapRef = useRef(null);
  const rarityRef = useRef(null);
  const faqRef = useRef(null);

  const handleHome = () => {
    // window.scrollTo({
    //   top: 0,
    //   behavior: 'smooth'
    // });
    homeRef.current.scrollIntoView({ behavior: 'smooth' });

  };

  const handleRoadmap = () => {
    roadmapRef.current.scrollIntoView({ behavior: 'smooth' });
    // window.scrollTo({
    //   top: 800,
    //   behavior: 'smooth'
    // });
  };

  const handleRarity = () => {
    rarityRef.current.scrollIntoView({ behavior: 'smooth' });
    // window.scrollTo({
    //   top: 2250,
    //   behavior: 'smooth'
    // });
  };

  const handleFaq = () => {
    faqRef.current.scrollIntoView({ behavior: 'smooth' });
    // window.scrollTo({
    //   top: 10150,
    //   behavior: 'smooth'
    // });
  };

  return (
    <>
<div ref={homeRef}  src={backgroundImg} style={{ backgroundImage: `url(${backgroundImg})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} >
  
  <div style={{position: 'fixed', backgroundColor: 'black', width:'100%'}}>
    <div className="header" style={{ margin: 'auto', textAllign: 'center', display: 'flex', paddingTop: '2rem', paddingBottom: '2rem' }}>
      <img className='home' onClick={handleHome} src={home} style={{margin: 'auto', cursor: 'pointer', width: '5rem'}} />
      <img className='roadmap' onClick={handleRoadmap} src={roadmap} style={{margin: 'auto', cursor: 'pointer', width: '9rem'}} />
      <img className="headerlogo" src={logo} style={{margin: 'auto', display: 'block', width: '20rem'}} />
      <img className="rarity" onClick={handleRarity} src={rarity} style={{margin: 'auto', cursor: 'pointer', width: '8rem'}} />
      <img className="faq" onClick={handleFaq} src={faq} style={{margin: 'auto', cursor: 'pointer', width: '4rem'}} />
    </div>
  </div>

  <div style={{margin: 'auto', justifyContent: 'space-around', display: 'flex', paddingTop: '8rem', width: '60%'}}>
    <a target="_blank" href="https://twitter.com/LucidFruits">
      <img className='twitter' src={twitter} style={{margin: 'auto', cursor: 'pointer', width: '4rem'}} />
    </a>
    <a target="_blank" href="https://discord.gg/VWqzwQjE">
      <img className='discord' src={discord} style={{margin: 'auto', cursor: 'pointer', width: '4rem'}} />
    </a>
  </div>
    <img className="infoBox" id='home' src={storyBoard} style={{ margin: 'auto', display: 'block', paddingTop: '2rem', maxWidth: '70rem', width: '90%'}} />
    <img src={trf} style={{ margin: 'auto', display: 'block', paddingTop: '5rem', maxWidth: '70rem', width: '90%'}} />
    <img ref={roadmapRef} id='roadmap' src={roadmapSection} style={{ margin: 'auto', display: 'block', paddingTop: '5rem', scrollMargin: '2rem', maxWidth: '70rem', width: '90%' }} />
    <img ref={rarityRef} id='raHeader' src={raHeader} style={{ margin: 'auto', display: 'block', paddingTop: '5rem', scrollMargin: '2rem', maxWidth: '70rem', width: '90%' }} />
    <img src={br} style={{ margin: 'auto', display: 'block', paddingTop: '5rem', maxWidth: '70rem', width: '90%' }} />
    <img src={fsr} style={{ margin: 'auto', display: 'block', paddingTop: '5rem', maxWidth: '70rem', width: '90%' }} />
    <img src={hats} style={{ margin: 'auto', display: 'block', paddingTop: '5rem', maxWidth: '70rem', width: '90%' }} />
    <img src={thirdEyes} style={{ margin: 'auto', display: 'block', paddingTop: '5rem', maxWidth: '70rem', width: '90%' }} />
    <img src={eyeBalls} style={{ margin: 'auto', display: 'block', paddingTop: '5rem', maxWidth: '70rem', width: '90%' }} />
    <img src={ mouth } style ={{margin: 'auto', display: 'block', paddingTop:'5rem', maxWidth: '70rem', width: '90%' }} />
    <img src={ smokers } style ={{margin: 'auto', display: 'block', paddingTop:'5rem', maxWidth: '70rem', width: '90%' }} />
    <img src={ worms} style={{ margin: 'auto', display: 'block' ,paddingTop:'5rem', maxWidth: '70rem', width: '90%'  }} />
    <img ref={faqRef} src={faqSection} style={{ margin: 'auto', display: 'block', paddingTop:'5rem', paddingBottom: '5rem', scrollMargin: '2rem', maxWidth: '70rem', width: '90%' }}/>
  
  </div>

  

    </>
  );
}

export default App;