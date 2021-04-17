import Header from './Header'
import {CloudinaryContext} from 'cloudinary-react'

function App() {
  return (
    <CloudinaryContext cloudName="hkkczayke">
      <Header />
    </CloudinaryContext>
  );
}

export default App;
