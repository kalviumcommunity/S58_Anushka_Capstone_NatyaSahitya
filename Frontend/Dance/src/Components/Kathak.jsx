import React from 'react'
import './Kathak.css'

const Kathak = () => {
  return (
    <div className="kathak-container">
      <div className="K-main">
        <div className="K-header">
          <div className="H-box1">
            <h1>Kathak</h1>
          </div>
          <div className="H-box2"></div>
        </div>
        <div className="K-content">
          <div className="C-box1">
            <div className="intro">Introduction</div>
            <div className="para">
              Kathak is one of the eight major forms of Indian classical dance. It is the classical dance form from Uttar Pradesh. The origin of Kathak is traditionally attributed to the traveling bards of ancient northern India known as Kathakars or storytellers.
              <br /><br />
              The term Kathak is derived from the Vedic Sanskrit word Katha which means "story", and Kathakar which means "the one who tells a story", or "to do with stories".
            </div>
            <div className="history">History</div>
            <div className="para">
              Kathak dancers tell various stories through their hand movements and extensive footwork, but most importantly through their facial expressions. Kathak evolved during the Bhakti movement, particularly by incorporating the childhood and stories of the Hindu god Krishna, as well as independently in the courts of north Indian kingdoms.
              <br /><br />
              Kathak is found in three distinct forms, called "gharanas", named after the cities where the Kathak dance tradition evolved – Jaipur, Banaras and Lucknow. While the Jaipur gharana focuses more on the foot movements, the Banaras and Lucknow gharanas focus more on facial expressions and graceful hand movements.
            </div>
            <div className="element">Elements of Kathak</div>
            <div className="para">
              <ul>
                <li><a href="#">Nritta - Pure dance, abstract, technical movement</a></li>
                <li><a href="#">Nritya - Expressive dance, solo mime, emotions</a></li>
                <li><a href="#">Natya - Dance drama, group dramatic play</a></li>
                <li><a href="#">Abhinaya - Art of expression, emotional connection</a></li>
                <li><a href="#">Tatkar - Footwork, rhythmic patterns</a></li>
                <li><a href="#">Chakkars - Spins and pirouettes</a></li>
              </ul>
            </div>
            <div className="gharana">Major Gharanas</div>
            <div className="para">
              <ul>
                <li><a href="#">Jaipur Gharana - Focus on layakari and footwork</a></li>
                <li><a href="#">Lucknow Gharana - Known for its elegance and grace</a></li>
                <li><a href="#">Banaras Gharana - Emphasis on rhythmic patterns</a></li>
              </ul>
            </div>
            <div className="costume">Costume and Jewelry</div>
            <div className="para">
              Traditional Kathak costumes include the Angrakha and churidar for men, and the lehenga-choli or the Angrakha kurta and churidar for women. Dancers wear around 100 ghungroos (small bells) on each ankle to accentuate the rhythmic footwork. Jewelry includes tikka (forehead ornament), nath (nose ring), jhumkas (earrings), and bangles.
            </div>
            <div className="personality">Famous Personalities</div>
            <div className="para">
              <ul>
                <li><a href="#">Pandit Birju Maharaj - Lucknow Gharana</a></li>
                <li><a href="#">Sitara Devi - Banaras Gharana</a></li>
                <li><a href="#">Rajendra Kumar Gangani - Jaipur Gharana</a></li>
                <li><a href="#">Kumudini Lakhia - Contemporary Kathak</a></li>
              </ul>
            </div>
          </div>
          <div className="C-box2">
            <div className="Child">
              <button>History</button>
              <button>Elements</button>
              <button>Gharanas</button>
                <button>Costume</button>
              <button>Personalities</button>
            </div>
          </div>
        </div>
        <div className="K-footer">
          <div className="F-box1">
            <div className="Picture"></div>
            <div className="mention">Anushka Bhatt</div>
          </div>
          <div className="F-box2">
            <div className="share">
              Share:
              <a href="#" className="share-btn">
                <i className="fa fa-facebook Facebook"></i>
              </a>
              <a href="#" className="share-btn">
                <i className="fa fa-instagram Instagram"></i>
              </a>
              <a href="#" className="share-btn">
                <i className="fa fa-youtube-play Youtube"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Kathak
