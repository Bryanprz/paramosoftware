import {CloudinaryContext} from 'cloudinary-react';
import Header from './Header';
import CompanyDescription from './CompanyDescription';
import ClientHighlight from './ClientHighlight';
import Team from './Team';
import WhatsYourIdea from './WhatsYourIdea';
import Contacts from './Contacts';

function App() {
  return (
    <CloudinaryContext cloudName="hkkczayke">
      <Header />
      <CompanyDescription />
      <ClientHighlight/>
      <Team />
      <WhatsYourIdea/>
      <Contacts/>
    </CloudinaryContext>
  );
}

export default App;
