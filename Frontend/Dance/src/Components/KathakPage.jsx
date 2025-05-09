import React from 'react';
import DanceDetailTemplate from './DanceDetailTemplate';
import kathakImage from '../assets/kathakbg-img.png';

const KathakPage = () => {
  // Data for the Kathak dance form
  const introText = `Kathak is one of the eight major forms of Indian classical dance. It is the classical dance form from Uttar Pradesh. The origin of Kathak is traditionally attributed to the traveling bards of ancient northern India known as Kathakars or storytellers. The term Kathak is derived from the Vedic Sanskrit word Katha which means "story", and Kathakar which means "the one who tells a story", or "to do with stories".`;
  
  const historyText = `Kathak dancers tell various stories through their hand movements and extensive footwork, but most importantly through their facial expressions. Kathak evolved during the Bhakti movement, particularly by incorporating the childhood and stories of the Hindu god Krishna, as well as independently in the courts of north Indian kingdoms. Kathak is found in three distinct forms, called "gharanas", named after the cities where the Kathak dance tradition evolved – Jaipur, Banaras and Lucknow. While the Jaipur gharana focuses more on the foot movements, the Banaras and Lucknow gharanas focus more on facial expressions and graceful hand movements.`;
  
  const elements = [
    { text: 'Nritta - Pure dance, abstract, technical movement', link: '#' },
    { text: 'Nritya - Expressive dance, solo mime, emotions', link: '#' },
    { text: 'Natya - Dance drama, group dramatic play', link: '#' },
    { text: 'Abhinaya - Art of expression, emotional connection', link: '#' },
    { text: 'Tatkar - Footwork, rhythmic patterns', link: '#' },
    { text: 'Chakkars - Spins and pirouettes', link: '#' }
  ];
  
  const gharanas = [
    { text: 'Jaipur Gharana - Focus on layakari and footwork', link: '#' },
    { text: 'Lucknow Gharana - Known for its elegance and grace', link: '#' },
    { text: 'Banaras Gharana - Emphasis on rhythmic patterns', link: '#' }
  ];
  
  const costumeText = `Traditional Kathak costumes include the Angrakha and churidar for men, and the lehenga-choli or the Angrakha kurta and churidar for women. Dancers wear around 100 ghungroos (small bells) on each ankle to accentuate the rhythmic footwork. Jewelry includes tikka (forehead ornament), nath (nose ring), jhumkas (earrings), and bangles.`;
  
  const personalities = [
    { text: 'Pandit Birju Maharaj - Lucknow Gharana', link: '#' },
    { text: 'Sitara Devi - Banaras Gharana', link: '#' },
    { text: 'Rajendra Kumar Gangani - Jaipur Gharana', link: '#' },
    { text: 'Kumudini Lakhia - Contemporary Kathak', link: '#' }
  ];

  return (
    <DanceDetailTemplate 
      title="Kathak"
      introText={introText}
      historyText={historyText}
      elements={elements}
      gharanas={gharanas}
      costumeText={costumeText}
      personalities={personalities}
      backgroundImage={kathakImage}
    />
  );
};

export default KathakPage; 