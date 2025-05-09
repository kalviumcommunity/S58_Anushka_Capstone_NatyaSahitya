import React from 'react';
import DanceDetailTemplate from './DanceDetailTemplate';
import odissiImage from '../assets/OddisiCostume.png';

const OdissiPage = () => {
  // Data for the Odissi dance form
  const introText = `Odissi is one of the oldest surviving classical dance forms of India, originating from the state of Odisha. It is characterized by its sensuous and lyrical movements, with emphasis on the tribhangi (three-part break) posture, which represents the three bends in the body: at the neck, waist, and knee, creating an "S" shape. Odissi is a highly stylized dance with sculpturesque poses that often mimic those found in ancient temple sculptures.`;
  
  const historyText = `Odissi dance traces its origins to the ritual dances performed in the temples of ancient Odisha. The earliest evidence of Odissi is found in the archaeological remains of the 2nd century BCE Udayagiri caves near Bhubaneswar. The dance form was primarily performed by Maharis (temple dancers) and Gotipuas (young boys dressed as girls) who were dedicated to the temples, particularly to Lord Jagannath in Puri. Like other classical dances, Odissi faced decline during the colonial period but was revived in the mid-20th century by pioneers like Kelucharan Mohapatra, Pankaj Charan Das, and Deba Prasad Das, who helped codify and systematize the dance form as we know it today.`;
  
  const elements = [
    { text: 'Mangalacharan - Invocation piece', link: '#' },
    { text: 'Batu/Sthai - Pure dance', link: '#' },
    { text: 'Pallavi - Graceful, lyrical movements', link: '#' },
    { text: 'Abhinaya - Expressional dance', link: '#' },
    { text: 'Moksha - Liberation piece', link: '#' },
    { text: 'Tribhangi - Three-bend posture', link: '#' }
  ];
  
  const gharanas = [
    { text: 'Mahari - Traditional temple dance style', link: '#' },
    { text: 'Gotipua - Style performed by young boys', link: '#' },
    { text: 'Debaprasad Das style - Emphasizes tandava aspects', link: '#' },
    { text: 'Kelucharan Mohapatra style - Most widely practiced today', link: '#' }
  ];
  
  const costumeText = `The traditional Odissi costume is elaborate and distinctive. Female dancers wear a silk sari draped in a unique way called 'Kachha' style, with pleats in the front and a fan-shaped structure in the back. The upper body is adorned with a blouse and a fitted bodice. The jewelry is intricate and silver-based, including an elaborate headdress (tahia), necklaces, earrings, armlets, and anklets with bells. The makeup features dramatic eyes with black eyeliner, a red dot (bindi) on the forehead, and red alta dye on the feet. Male dancers wear a dhoti in a special drape, often with a bare upper body or a short kurta, and less elaborate jewelry.`;
  
  const personalities = [
    { text: 'Kelucharan Mohapatra - Legendary guru who revived Odissi', link: '#' },
    { text: 'Sanjukta Panigrahi - First female Odissi dancer with international recognition', link: '#' },
    { text: 'Sonal Mansingh - Renowned dancer and cultural icon', link: '#' },
    { text: 'Madhavi Mudgal - Known for her precise technique and choreography', link: '#' },
    { text: 'Protima Bedi - Founder of Nrityagram dance village', link: '#' }
  ];

  return (
    <DanceDetailTemplate 
      title="Odissi"
      introText={introText}
      historyText={historyText}
      elements={elements}
      gharanas={gharanas}
      costumeText={costumeText}
      personalities={personalities}
      backgroundImage={odissiImage}
    />
  );
};

export default OdissiPage; 