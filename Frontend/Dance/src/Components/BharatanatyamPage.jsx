import React from 'react';
import DanceDetailTemplate from './DanceDetailTemplate';
import bharatanatyamImage from '../assets/BharatCostume.png';

const BharatanatyamPage = () => {
  // Data for the Bharatanatyam dance form
  const introText = `Bharatanatyam is one of the oldest classical dance traditions in India originating in Tamil Nadu. The name is derived from "Bhava" (expression), "Raga" (music), "Tala" (rhythm), and "Natyam" (dance). It is known for its strong lines, precise footwork, and sophisticated vocabulary of sign language based on gestures of hands, eyes, and face muscles.`;
  
  const historyText = `Bharatanatyam originated over 2,000 years ago in Tamil Nadu and has its roots in the ancient text of Natya Shastra. It was traditionally performed in Hindu temples by Devadasis (female servants of deity) as an offering to the deities. During British colonial rule, the dance was suppressed and almost lost. It was revived in the 1930s and 1940s when E. Krishna Iyer and Rukmini Devi Arundale fought for its recognition and established institutions like Kalakshetra to preserve and teach the art form. Today, it is one of the most popular and widely performed dance styles of India.`;
  
  const elements = [
    { text: 'Nritta - Pure dance, abstract, technical movement', link: '#' },
    { text: 'Nritya - Expressive dance, solo mime, emotions', link: '#' },
    { text: 'Natya - Dance drama, group dramatic play', link: '#' },
    { text: 'Adavus - Basic steps', link: '#' },
    { text: 'Mudras - Hand gestures', link: '#' },
    { text: 'Aramandi - Half-sitting position', link: '#' }
  ];
  
  const gharanas = [
    { text: 'Kalakshetra - Founded by Rukmini Devi Arundale', link: '#' },
    { text: 'Pandanallur - Known for its precision and technique', link: '#' },
    { text: 'Vazhuvoor - Emphasizes grace and fluidity', link: '#' },
    { text: 'Thanjavur - Focuses on abhinaya (expression)', link: '#' }
  ];
  
  const costumeText = `The traditional Bharatanatyam costume consists of a tailored sari (often silk) with pleats that fan out from the waist, creating a fan-like structure that accentuates the movements of the legs. The dancer wears a small jacket with short sleeves, and the sari is worn in a special dhoti style. Jewelry includes a sun and moon design on the head, temple jewelry, necklaces, bangles, and anklets with bells (ghungroos). The dancer's hands and feet are adorned with alta (red dye). The makeup includes dramatic eyes with extended eyeliner, a prominent red dot (bindi) on the forehead, and red-painted lips.`;
  
  const personalities = [
    { text: 'Rukmini Devi Arundale - Revivalist and founder of Kalakshetra', link: '#' },
    { text: 'Balasaraswati - Legendary performer of the mid-20th century', link: '#' },
    { text: 'Yamini Krishnamurthy - Renowned for her technical brilliance', link: '#' },
    { text: 'Alarmel Valli - Known for her lyrical and poetic interpretations', link: '#' },
    { text: 'Padma Subrahmanyam - Dancer and researcher who developed Bharatanrityam', link: '#' }
  ];

  return (
    <DanceDetailTemplate 
      title="Bharatanatyam"
      introText={introText}
      historyText={historyText}
      elements={elements}
      gharanas={gharanas}
      costumeText={costumeText}
      personalities={personalities}
      backgroundImage={bharatanatyamImage}
    />
  );
};

export default BharatanatyamPage; 