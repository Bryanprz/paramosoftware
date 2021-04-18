import {CloudinaryContext} from 'cloudinary-react'
import Header from './Header'
import CompanyDescription from './CompanyDescription'

function App() {
  return (
    <CloudinaryContext cloudName="hkkczayke">
      <Header />
      <CompanyDescription />
    </CloudinaryContext>
  );
}

export default App;
