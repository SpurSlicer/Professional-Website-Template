import github from '../assets/github.png'
import linked_in from '../assets/linkedin.png'
import mail from '../assets/mail.png'
import resume from '../assets/resume.png'
import home from '../assets/home.png'
import question from '../assets/question.png'
import x from '../assets/x.png'

export const icon_map = new Map([['github', [github, "https://guthib.com"]], 
                          ['linked_in', [linked_in, "https://guthib.com"]], 
                          ['mail', [mail, "mailto:email@domain.extension"]],  
                          ['resume', [resume, "https://guthib.com"]], //tel:9703884290 
                          ['home', [home, "/Home"]], 
                          ['portfolio', [null, "/Portfolio"]],
                          ['question', [question, "/Home"]],
                          ['x', [x, "/Home"]]]);

export const handleIconClick = (e, navigate, setCurrentPage, mininav_status, setMiniNavStatus) => {
  if (mininav_status) setMiniNavStatus(!mininav_status);
  setCurrentPage(e.target.textContent);
  const domain = icon_map.get(e.target.id)[1];
  if (domain == undefined) navigate("/Home");
  else if (domain.startsWith("/")) navigate(domain);
  else {
      if (domain.startsWith("http")) window.open(domain, "_blank").focus();
      else window.open(domain, "_self");        
  }
}

export const selectIcon = (icon) => {
  const image = icon_map.get(icon)[0];
  if (image == undefined) return icon_map.get("question")[0];
  else return image;
}