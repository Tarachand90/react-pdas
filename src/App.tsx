import ProfileCard from "./components/ProfileCard"

import AlexaImage from './images/alexa.png';
import CortanaImage from './images/cortana.png';
import SiriImage from './images/siri.png';


function App() {

  return (
    <div>
      <div>
        Personal Digital Assistance
      </div>
      <ProfileCard title="Alexa" username="@alexa99" imageSrc = {AlexaImage}/>
      <ProfileCard title="Cortana" username="@cortana32" imageSrc = {CortanaImage}/>
      <ProfileCard title="Siri" username="@siri01" imageSrc = {SiriImage}/>
    </div>
  )
}

export default App
