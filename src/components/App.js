import {CloudinaryContext} from 'cloudinary-react'
import Header from './Header'
import CompanyDescription from './CompanyDescription'
import Team from './Team'
import Contacts from './Contacts';

function App() {
  return (
    <CloudinaryContext cloudName="hkkczayke">
      <Header />
      <CompanyDescription />
      <Team />
      <Contacts/>
    </CloudinaryContext>
  );
}

export default App;
