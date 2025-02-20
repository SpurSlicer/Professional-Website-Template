import { useState } from 'react'
import "./page.css"
import bk_corner_curved_alt from "../assets/bk_curve_corner_alt.png";
import bk_corner_curved_alt_dark from "../assets/bk_curve_corner_alt_dark.png";

function getItemsForList(items) {
  const list = [];
  let item_key = 0;
  for (const item of items) {
    list.push(<li key={item_key}>{item}</li>);
    item_key++;
  }
  return list;
}

function BackgroundCardList({title, items, classname}) {
  return (
    <div className={`background_block ${classname}`}>
      <div className='header-container'>
        <hr className='right'/>
        <h4>{title}</h4>
        <hr className='left'/>
      </div>
      <ul>
        {getItemsForList(items)}
      </ul>
    </div>
  )
}

function BackgroundWorkExperience({title, location, timeframe, items}) {
  return (
    <div className='work_block'>
      <div className='work_info_row'>
        <h2>{title}</h2>
        <hr/>
        <div className='mini_work_info_row'>
          <h4>{location}</h4>
          <p>{timeframe}</p>
        </div>
      </div>
      <div className='work_details'>
        <div className='description'>
          <ul>
            {getItemsForList(items)}
          </ul>
        </div>
      </div>
    </div>
  )
}

function Background() {
  const [count, setCount] = useState(0)
  
  const decide_dark = () => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return bk_corner_curved_alt_dark;
    } else {
      return bk_corner_curved_alt;
    }
  }

  return (
    <div className='background'>
      <div className='skills'>
        <div className='university_content'>
          <h1>Relevant University Coursework</h1>
          <hr/>
        </div>
        <div className='skill_blocks'>
          <BackgroundCardList 
            title="Class Category"
            items={[
              "class_one",
              "class_two",
              "class_three",
              "class_four",
              "class_five",
              "class_six",
              "class_seven",
              "class_eight",
              "class_night",
              "class_ten"
            ]}
            classname="web_classes"
          />
          <BackgroundCardList 
            title="Class Category"
            items={[
              "class_one",
              "class_two",
              "class_three",
              "class_four",
              "class_five",
              "class_six",
              "class_seven",
              "class_eight",
              "class_night",
              "class_ten"
            ]}
            classname="swe_classes"
          />
          <BackgroundCardList 
            title="Class Category"
            items={[
              "class_one",
              "class_two",
              "class_three",
              "class_four",
              "class_five",
              "class_six",
              "class_seven",
              "class_eight",
              "class_night",
              "class_ten"
            ]}
            classname="other_classes"
          />
        </div>
      </div>
      <div className='skills'>
        <div className='skills_content'>
          <h1>Experience</h1>
          <hr/>
        </div>
        <div className='skill_blocks'>
          <BackgroundCardList 
            title="Languages"
            items={[
              "language_one",
              "language_two",
              "language_three",
              "language_four",
              "language_five",
              "language_six",
              "language_seven",
              "language_eight",
              "language_night",
              "language_ten"
            ]}
            classname="programming_languages"
          />      
          <BackgroundCardList 
            title="Tools"
            items={[
              "tool_one",
              "tool_two",
              "tool_three",
              "tool_four",
              "tool_five",
              "tool_six",
              "tool_seven",
              "tool_eight",
              "tool_night",
              "tool_ten",            
            ]}
            classname="tools"
          />        
          <BackgroundCardList 
            title="Skills"
            items={[
              "skill_one",
              "skill_two",
              "skill_three",
              "skill_four",
              "skill_five",
              "skill_six",
              "skill_seven",
              "skill_eight",
              "skill_night",
              "skill_ten"
            ]}
            classname="skills_box"
          />  
        </div>
      </div>
      <div className='work_experience'>
        <div className='work_blocks'>
          <h1>Work Experience</h1>
          <hr/>
          <BackgroundWorkExperience
            title="Job - Employer"
            location="City, State"
            timeframe="Aug 1970 - Present"
            items={[
              `Concise description explaining a task one.`,
              `Concise description explaining a task two.`,
              `Concise description explaining a task three.`
            ]}
          />
          <BackgroundWorkExperience
            title="Job - Employer"
            location="City, State"
            timeframe="Aug 1970 - Present"
            items={[
              `Concise description explaining a task one.`,
              `Concise description explaining a task two.`,
              `Concise description explaining a task three.`
            ]}
          />
          <BackgroundWorkExperience
            title="Job - Employer"
            location="City, State"
            timeframe="Aug 1970 - Present"
            items={[
              `Concise description explaining a task one.`,
              `Concise description explaining a task two.`,
              `Concise description explaining a task three.`
            ]}
          />
          <BackgroundWorkExperience
            title="Job - Employer"
            location="City, State"
            timeframe="Aug 1970 - Present"
            items={[
              `Concise description explaining a task one.`,
              `Concise description explaining a task two.`,
              `Concise description explaining a task three.`
            ]}
          />
        </div>
        <div className='work-background'>
          <div className='background_6'>
            <img src={decide_dark()}/>
          </div>
          <div className='background_7'></div>
        </div>
      </div>
    </div>
  )
}

export default Background;
