import { useState } from 'react'
import "./page.css"
import facepic from '../assets/facepic.png';
import bubble_1 from '../assets/bubble_1.png';
import bubble_2 from '../assets/bubble_2.png';
import bubble_3 from '../assets/bubble_3.png';
import bubble_4 from '../assets/bubble_4.png';
import bubble_5 from '../assets/bubble_5.png';
import bubble_6 from '../assets/bubble_6.png';
const bubbles = [bubble_1, bubble_2, bubble_3, bubble_4, bubble_5, bubble_6];
import bk_square from '../assets/bk-square.png';
import bk_square_dark from '../assets/bk-square_dark.png';


function AboutMeDescription({title, paragraphs, number}) {
  return (
    <div key={number}>
      <div className={`about-me-header-${number}`}>
        <hr className='small-hr'/>
        <h1>{title}</h1>
        <hr className='long-hr'/>
      </div>
      <hr className={`small_window_hr ${((number % 2) == 1) ? "orange" : "purple"}`} />
      <p className={`border border-${number}`}>
        {
          (() => {
            const paragraph_section = [];
            let spacer_key = 0;
            for (const paragraph of paragraphs) {
              paragraph_section.push(paragraph);
              paragraph_section.push(<span key={`spacer_${spacer_key}`} className='spacer'/>);
              spacer_key++;
            }
            return (paragraph_section.splice(0, paragraph_section.length-1));
          })()
        }
    </p>  
  </div>
  );
}

function AboutMe() {
  // const [count, setCount] = useState(0)
  const decide_dark = () => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return bk_square_dark;
    } else {
      return bk_square;
    }
  }
  
  return (
    <div className='about-me'>
      <div className='background_4'></div>
      <div className='background_5'></div>
      <div className='explanation'>
        <div className='pic'>
          <img className='square-bk' src={decide_dark()}/>
          <img className='facepic' src={facepic}/>
        </div>
        <AboutMeDescription
          title="Who am I?"
          paragraphs={[
            "Paragraph one - describe yourself.",
            "Paragraph two - describe yourself.",
            "Paragraph three - describe yourself.",
            "...",
          ]}
          number={1}
        />
        <AboutMeDescription
          title="Other interests"
          paragraphs={[
            "Paragraph one - describe yourself.",
            "Paragraph two - describe yourself.",
            "Paragraph three - describe yourself.",
            "...",
          ]}
          number={2}
        />        
      </div>
      <div className='pictures'>

        {/* Generate image bubbles */}
        {(() => {
          const img_bubbles = [];
          for (let index = 1; index < 7; index++) {
            img_bubbles.push(
              <div key={index} className='bubble' id={`img_${index}`}>
                <img key={`image_${index}`} className='picture' src={bubbles[index-1]} />
              </div>
            )
          }
          return img_bubbles;
        })()}


        {/* Generate empty bubbles */}
        {(() => {
          const empty_bubbles = [];
          const skippables = [6, 13];
          for (let index = -3; index < 20; index++) {
            if (!skippables.includes(index)) {
              empty_bubbles.push(
                <div key={index} className='bubble no-padding' id={`bubble_${index}`}></div>
              )
            }
          }
          return empty_bubbles;
        })()}

      </div>
    </div>
  )
}

export default AboutMe;
