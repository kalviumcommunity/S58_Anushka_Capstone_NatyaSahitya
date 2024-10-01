import React from 'react'
import './Kathak.css'
import Facebook from '../assets/Facebook.png'
import Instagram from '../assets/Instagram.png'
import Youtube from '../assets/Youtube.png'
import { Link } from 'react-router-dom'

function Kathak() {
  return (
    <>
      <div className='K-main'>
        <div className='K-header'>
          <div className='H-box1'>
            <h1>Kathak</h1>
          </div>
          <div className='H-box2'></div>
        </div>
        <div className='K-content'>
          <div className='C-box1'>
            <h2 className='intro'>Introduction</h2>
            <p className='para'>
              Kathak is one of the eight major forms of Indian classical dance. Kathak is a prominent ancient Indian 
              classical dance and is thought to have started from the wandering bards of North India known as Kathakars, 
              meaning storytellers.  Its name derives from the Sanskrit word katha which means "story", and kathakar 
              which means "the one who tells a story", or "to do with stories".
            </p>
            <p className='para'>
              Kathak dancers tell various stories utilizing hand movements and extensive footwork, their body movements 
              and flexibility as well as their facial expressions. Kathak often has a strong beat and can be danced in 
              many taals. While proto-Kathak elements can be seen long before, Kathak evolved during the Bhakti movement, 
              particularly by incorporating the childhood and stories of the Hindu god Krishna, as well as independently 
              in the courts of north Indian kingdoms.
            </p>
            <p className='para'>
              Kathak is found in four distinct forms, called "gharana", named after the cities where the Kathak dance 
              tradition evolved - Jaipur, Benares and Lucknow. While the Jaipur gharana focuses more on the foot 
              movements, the Banaras and Lucknow gharana focus more on facial expressions and graceful hand movements. 
              Stylistically, the Kathak dance form emphasizes rhythmic foot movements, adorned with small bells (Ghungroo) 
              and the movement harmonized to the music. The legs and torso are generally straight, and the story is 
              told through a developed vocabulary based on the gestures of arms and upper body movement, facial expressions, 
              neck movements, eyes and eyebrow movement, stage movements, bends and turns.
            </p>
            <h2 className='history'>History</h2>
            <p className='para'> 
              Kathak in the Era of the Bhakti Movement:- Kathak evolved as an expression of devotion towards Lord Krishna. 
              Studies suggest that Kathak originated in Varanasi and this dance form traveled through Lucknow, Jaipur, and 
              other parts of North and North West India. The Lucknow tradition of Kathak believes that Lord Krishna appeared 
              in the dream of his devotee, named Ishwari. He instructed her to develop dance as a form of worship, in her dream. 
              Ishwari developed Kathak as a dance form and through her descendants preserved the learning and development, 
              yielding the Lucknow Gharana of Kathak. Kathak in the Bhakti movement era revolved around the theme which portrayed 
              the immortal love between Radha, Krishna, and the milkmaids (Gopis). 
            </p>
            <p className='para'>
              Kathak in the Mughal Era:- The invasion of the Mughals influenced the Kathak dance form significantly and gave it a new 
              impetus. The emperors were patrons of Kathak dance and actively promoted the dance form in their royal courts. Kathak 
              became a source of sophisticated entertainment and was redefined to lay more stress on the dance's graceful, expressive, 
              and sensuous aspects.Influenced by the Mughal culture Kathak performances incorporate Urdu Ghazals and commonly used 
              instruments brought during the Mughal period even today. This makes it the only Indian classical dance form to carry 
              Persian elements.
            </p>
            <p className='para'>
              Kathak during the British Raj:- Under the British Raj, the Kathak dance form witnessed a decline. This was mainly because 
              the Britishers didn't support Hinduism. They wished to propagate their Christian religion, and Kathak on the opposite was 
              a representative of Hinduism. The gestures and facial expressions were labelled as seductive and erotic, and the heritage 
              of the dance form was questioned.
            </p>
            <h2 className='element'>Elements in Kathak</h2>
            <p className='para'>
              As mentioned above, the important elements that complete a Kathak performance (like almost every other Indian classical 
              dance form such as Bharatanatyam and Mohiniyattam) are as follows:
            </p>
            <p className='para'>
              Nritta: The technical aspect of the performance in which the dancer performs pure Bharata Natyam movements with particular 
              attention to speed, pattern, form, range and rhythm without the introduction of any interpretive elements. <br />

              Nritya: The aspect of the dance in which the dancer incorporates spiritual themes, feelings, and expressive gestures. In 
              order to convey the Nritya, the body movements and gestures are typically slower and harmonized with the musical notes of 
              the musical piece. <br />

              Natya: Conveyed with the dancers maintaining particular body movements for specific characters which are communicated through 
              interpretive dance. <br />
            </p>
            <p className='para'>
              Elements present while doing kathak:- The most common instruments that complement a Kathak performance are the Tabla which falls 
              in sync with the rhythmic footwork of the performer, the Harmonium or the Sarangi with Manjira, which measures the tala or the 
              cycle and many other instruments that can intensify, add effects and depth to a Kathak performance. Dhrupad, one of the ancient 
              music genres of India, is widely used to intensify a Kathak stage performance.
            </p>
            <h2 className='gharana'>Gharanas in Kathak</h2>
            <p className='para'>
              There are three traditions of Kathak, the Banaras, Lucknow, and Jaipur Gharanas inspired by  the names of the cities in which 
              they flourished. While the Jaipur Gharana focuses more on foot movements, the Banaras and Lucknow Gharanas focus more on facial 
              expressions and graceful hand movements. 
            </p>
            <p className='para'>
              Stylistically, the Kathak dance form emphasizes rhythmic foot movements, adorned with small bells (Ghungroo) and the movement 
              harmonized with the music. The legs and torso are generally straight, and the story is told through a developed vocabulary 
              based on the gestures of arms and upper body movement, facial expressions, neck movements, eyes and eyebrow movement, flexible 
              bends and swift turns. The main focus of the dance becomes the eyes and the foot movements. The eyes work as a medium of 
              communication of the story the dancer is trying to communicate. With the eyebrows, the dancer gives various facial expressions. 
              The difference between the sub-traditions is the relative emphasis between acting versus footwork, with the Lucknow style 
              emphasizing acting and the Jaipur style famed for its spectacular footwork.
            </p>
            <h2 className='costume'>Costume</h2>
            <p className='para'>
              The costumes vary among Kathak performers and find their sources in either Hindu or Muslim culture.The Hindu costume for female 
              dancers has two variations. One is based on a Sari but is worn in a style different from the customary style that goes over the 
              left shoulder. A Kathak artist generally wraps the sari around the waist and it hangs down from the left. A blouse called a choli 
              covers the upper body. The artist may wear a scarf (called Orhni in some places). Hair, face, ear, neck, hand, wrist and ankle 
              jewellery, typically of gold, may adorn the artist. A tika or bindi in the middle of the forehead is common. 
            </p>
            <p className='para'>
              The second variation of a Hindu Kathak dancer uses a long, full (just above the ankle), light-weight skirt usually with an 
              embroidered border that helps highlight the dance moves. The skirt is contrasted with a different colour choli, and a transparent 
              scarf typically drapes over it and the dancer's head. Jewellery is typically present in the second variation. The Hindu costume 
              for male Kathak performers is typically a silk dhoti draped around the waist, and covered with a silk scarf tied over the top. 
              The upper body is usually left bare or with only the Hindu thread but is sometimes covered with a loose sleeveless jacket. Kathak 
              male artists also wear jewellery, but often of stones and much simpler than the female artists. 
            </p>
            <p className='para'>
              The Muslim costume for female dancers also uses a skirt, but includes close-fitting churidar pyjamas and sometimes a long coat 
              covering hands and the upper body. The head has a cover scarf and the jewellery is light. The Mughal costume for male Kathak 
              performers is the kurta-churidar. The kurta can be a simple one or cut as an angarkha. There is also the possibility of adapting 
              the angarkha or kurta for dance to incorporate a wider flare in the lower portion. Particularly older variety costumes include 
              the small peaked cap too.
            </p>
            <h2 className='personality'>Popular Kathak Dancers</h2>
            <p className='para'>
              Here are some popular kathak dancers:-
            </p>
            <p className='para'>
              <ul>
                 <li>
                  <a href="https://mr.wikipedia.org/wiki/%E0%A4%AC%E0%A4%BF%E0%A4%B0%E0%A4%9C%E0%A5%82_%E0%A4%AE%E0%A4%B9%E0%A4%BE%E0%A4%B0%E0%A4%BE%E0%A4%9C">Pandit Birju Maharaj Ji</a>
                 </li>
                 <li>
                  <a href="https://en.wikipedia.org/wiki/Sitara_Devi">Sitara Devi Ji</a></li> 
                 <li>
                  <a href="https://en.wikipedia.org/wiki/Shambhu_Maharaj">Shambhu Maharaj Ji</a></li> 
                 <li>
                  <a href="https://en.wikipedia.org/wiki/Maya_Rao">Maya Rao Ji</a></li>  
                 <li>
                  <a href="https://en.wikipedia.org/wiki/Rani_Karnaa">Rani Karna Ji</a></li>  
                 <li>
                  <a href="https://en.wikipedia.org/wiki/Damayanti_Joshi">Damayanti Joshi Ji</a></li>  
                 <li>
                  <a href="https://en.wikipedia.org/wiki/Lachhu_Maharaj">Lacchu Maharaj Ji</a></li>  
              </ul>
              
            </p>
          </div>
          <div className='C-box2'>
            <div className='Child'>
              <Link to={"/Theory"}>
                <button>Theory</button>
              </Link>

              <Link to={"/Practical"}>
                <button>Practical</button>
              </Link>
              
              <Link to={"/Costume"}>
                <button>Costume</button>
              </Link>
              
            </div>
          </div>

        </div>
        <div className='K-footer'>
          <div className='F-box1'>
            <div>
            <p>Contact Us: 72210.....</p>
            </div>
            <div className='share'>
              <div>Share: </div>
              <div className='share-btn'>
                <img className='Facebook' src={Facebook} alt="Facebook" />
                <img className='Instagram' src={Instagram} alt="Instagram" />
                <img className='Youtube' src={Youtube} alt="Youtube" />
              </div>
            </div>
          </div>
          <div className='F-box2'>
            <div className='Picture'>

            </div>
            <div className='mention'>By:- Anushka Bhatt</div>
            
          </div>
        </div>
      </div>
    </>
  )
}

export default Kathak
