import React from 'react';
import DanceDetailTemplate from './DanceDetailTemplate';
import kuchipudiImage from '../assets/KuchipudiCostume.png';

const KuchipudiPage = () => {
  // Data for the Kuchipudi dance form
  const introText = `Kuchipudi is one of the eight major classical dances of India, originating from the village of Kuchipudi in the Krishna district of Andhra Pradesh. It is known for its graceful movements, strong narrative, dramatic elements, and the unique feature of dancing on the rim of a brass plate and with a pot full of water on the head. Kuchipudi combines dance with elements of theater, making it a vibrant and expressive art form.`;
  
  const historyText = `Kuchipudi derives its name from the village Kuchipudi in Andhra Pradesh, where it originated in the 17th century. It was traditionally performed by male dancers (Bhagavatulu) who would travel from village to village, enacting stories from Hindu mythology, particularly those related to Lord Krishna. The dance form was developed by Siddhendra Yogi, who systematized the dance drama performance called Bhagavata Mela Natakam. For centuries, it remained exclusively male, with men taking on female roles as well. It was only in the 20th century that women began to perform Kuchipudi. The dance underwent a revival in the mid-20th century, led by Vedantam Lakshminarayana Sastry and Vempati Chinna Satyam, who helped establish it as a solo dance form in addition to its traditional group presentation.`;
  
  const elements = [
    { text: 'Nritta - Pure dance with rhythmic movements', link: '#' },
    { text: 'Nritya - Expressive dance with emotions', link: '#' },
    { text: 'Natya - Dramatic elements and storytelling', link: '#' },
    { text: 'Tarangam - Dancing on the brass plate', link: '#' },
    { text: 'Jatis - Rhythmic syllables', link: '#' },
    { text: 'Shabdam - Combination of dance and recitation', link: '#' }
  ];
  
  const gharanas = [
    { text: 'Traditional Bhagavata Mela style - Group performance', link: '#' },
    { text: 'Vempati style - Developed by Vempati Chinna Satyam', link: '#' },
    { text: 'Vedantam style - Emphasis on dramatic elements', link: '#' },
    { text: 'Contemporary Kuchipudi - Solo performance style', link: '#' }
  ];
  
  const costumeText = `The traditional Kuchipudi costume for women consists of a colorful Angivastra (specially stitched sari) in bright colors like orange, yellow, or red, with a pleated fan structure that opens during movements. The upper body is adorned with a fitted blouse and a short jacket. Jewelry includes an elaborate headpiece, temple jewelry, necklaces, bangles, and anklets with bells. The makeup is characterized by dramatic eyes, a red dot (bindi) on the forehead, and red-painted lips. Male dancers traditionally wear a dhoti in Andhrite style, a silk uttariya (scarf), and a shorter angavastra (upper garment), with less elaborate jewelry.`;
  
  const personalities = [
    { text: 'Vedantam Lakshminarayana Sastry - Key figure in preserving traditional Kuchipudi', link: '#' },
    { text: 'Vempati Chinna Satyam - Established Kuchipudi as a solo dance form', link: '#' },
    { text: 'Raja and Radha Reddy - Renowned couple known for their duet performances', link: '#' },
    { text: 'Yamini Krishnamurthy - Acclaimed dancer proficient in Kuchipudi and Bharatanatyam', link: '#' },
    { text: 'Swapnasundari - Known for her research and revival of temple dance traditions', link: '#' }
  ];

  return (
    <DanceDetailTemplate 
      title="Kuchipudi"
      introText={introText}
      historyText={historyText}
      elements={elements}
      gharanas={gharanas}
      costumeText={costumeText}
      personalities={personalities}
      backgroundImage={kuchipudiImage}
    />
  );
};

export default KuchipudiPage; 