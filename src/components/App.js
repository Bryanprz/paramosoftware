import {CloudinaryContext} from 'cloudinary-react';
import Header from './Header';
import CompanyDescription from './CompanyDescription';
import ClientHighlight from './ClientHighlight';
import Team from './Team';
import WhatsYourIdea from './WhatsYourIdea';
import Contacts from './Contacts';
import Footer from './Footer'

function App() {
  return (
    <CloudinaryContext cloudName="hkkczayke">
      <Header />
      <CompanyDescription />
      <ClientHighlight/>
      <Team />
      <WhatsYourIdea/>
      <Contacts/>
      <Footer/>
    </CloudinaryContext>
  );
}

export default App;
