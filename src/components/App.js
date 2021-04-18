import {CloudinaryContext} from 'cloudinary-react'
import Header from './Header'
import CompanyDescription from './CompanyDescription'
import Team from './Team'

function App() {
  return (
    <CloudinaryContext cloudName="hkkczayke">
      <Header />
      <CompanyDescription />
      <Team />
    </CloudinaryContext>
  );
}

export default App;
