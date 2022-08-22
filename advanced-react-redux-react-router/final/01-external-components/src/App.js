import './App.css';
import { ComparisonSlider } from 'react-comparison-slider';


function App() {
  return (
    <ComparisonSlider
      defaultValue={30}
      aspectRatio={16 / 9}
      orientation="horizontal"
      itemOne={<img src="./puppy.jpeg" alt='puppy' />} itemTwo={<img src="./kitten.jpeg" alt='kitten' />} />
  )
}

export default App;
