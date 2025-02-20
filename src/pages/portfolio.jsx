import { useState } from 'react';
import "./page.css";
import image from "../assets/facepic.png";
import bk_white from "../assets/bk-white-square.png";

import port_1 from "../assets/port_1.png";
import port_2 from "../assets/port_2.png";
import port_3 from "../assets/port_3.png";

function PortfolioBox({content, label, is_alt=false}) {
  const box_classname = (is_alt) ? `card_description card_description_alt` : `card_description`;
  return (
    <div className={box_classname}>
      <div className='grid_cell grid_top_left'><div className='cell'></div></div>
      <div className='grid_description'><h3>{label}</h3></div>
      <div className='grid_cell grid_top'><div className='cell'></div></div>
      <div className='grid_cell grid_top_right'><div className='cell'></div></div>
      <div className='grid_cell grid_right'><div className='cell'></div></div>
      <div className='grid_cell grid_bottom_right'><div className='cell'></div></div>
      <div className='grid_cell grid_bottom'><div className='cell'></div></div>
      <div className='grid_cell grid_bottom_left'><div className='cell'></div></div>
      <div className='grid_cell grid_left'><div className='cell'></div></div>
      <div className='grid_cell grid_text'>
        {content}
      </div>
    </div>
  )
}

function PortfolioCard({title, link, image, description=null, languages=null, frameworks_and_libraries=null, needs_alt_color=false}) {
  const card_classname = (needs_alt_color) ? `card card_alt_color` : `card`;
  return (
    <div className={card_classname}>
      <div className='card_header'>
        <hr className='left'/>
        <h2><a href={link} target="_blank">{title}</a></h2>
        <hr className='right'/>
      </div>
      <div className='card_info'>
        <div className='card_info_img_1'>
          <img className='bk_white' src={bk_white}/>
          <a href={link} target="_blank" className='card_info_img_2'>
            <img src={image}/>
          </a>
        </div>
        {(() => { if (description != null) return description})()}
      </div>
      <div className='card_info_row'>
        <div className='card_info .card_languages'>
          {(() => { if (languages != null) return languages})()}
        </div>
        <div className='card_info .card_frameworks_libraries'>
          {(() => { if (frameworks_and_libraries != null) return frameworks_and_libraries})()}
        </div>
      </div>
    </div>
  )
}

function Portfolio() {
  const [count, setCount] = useState(0)

  return (
    <div className='portfolio'>
      <div className='personal_projects'>
        <h1>Personal Projects</h1>
        <hr/>
      </div>
      <div className='cards'>
        <PortfolioCard
          title="Personal Project"
          link="https://guthib.com"
          image={port_1}
          description={
            <PortfolioBox
              content={<p><span className='mini_indent'></span>Sample description text.</p>}
              label="Description"
            />
          }
          languages={
            <PortfolioBox
              content={
                <ul className='left'>
                  <li>language</li>
                  <li>...</li>
                </ul>
              }
              label="Languages"
            />  
          }
          frameworks_and_libraries={
            <PortfolioBox
              content={
                <ul className='right'>
                  <li>framework</li>
                  <li>library</li>
                  <li>...</li>
                </ul>
              }
              label="Frameworks / Libraries"
              is_alt={true}
            />  
          }
        />
      </div>
      <div className='university_projects'>
        <h1>University Projects</h1>
        <hr/>
      </div>
      <div className='cards'>
        <PortfolioCard
          title="University Project"
          link="https://guthib.com"
          image={port_2}
          description={
            <PortfolioBox
              content={<p className='description_p'><span className='mini_indent'></span>Slightly looooooooooooo ooooooooo oooooooo oooooooooo ooooooooooo ooooooooooo ooooooooonger description.</p>}
              label="Description"
            />
          }
          languages={
            <PortfolioBox
              content={
                <ul className='left'>
                  <li>language</li>
                  <li>...</li>
                </ul>
              }
              label="Languages"
            />  
          }
          frameworks_and_libraries={
            <PortfolioBox
              content={
                <ul className='right'>
                  <li>framework</li>
                  <li>library</li>
                  <li>...</li>
                </ul>
              }
              label="Frameworks / Libraries"
              is_alt={true}
            />  
          }
          needs_alt_color={true}
        />
      </div>
      <div className='work_projects'>
        <h1>Work Projects</h1>
        <hr/>
      </div>
      <div className='cards'>
        <PortfolioCard
            title="Work Project"
            link="https://guthib.com"
            image={port_3}
            description={
              <PortfolioBox
                content={<p><span className='mini_indent'></span>Very loooooooooooooooo 
                oooooooooooooooo oooooooooooooo ooooooooooooooooooooooo oooooooooooooooooo oooooooooooooooo ooooooooooooooooooo oooooooooooooooooooo oooooooooo oooooooooooooo ooooooooo  oooooooooooooooooo ooooooooooong description.</p>}
                label="Description"
              />
            }
            languages={
              <PortfolioBox
                content={
                  <ul className='left'>
                    <li>language</li>
                    <li>...</li>
                  </ul>
                }
                label="Languages"
              />  
            }
            frameworks_and_libraries={
              <PortfolioBox
                content={
                  <ul className='right'>
                    <li>framework</li>
                    <li>library</li>
                    <li>...</li>
                  </ul>
                }
                label="Frameworks / Libraries"
                is_alt={true}
              />  
            }
          />
      </div>
    </div>
  )
}

export default Portfolio
