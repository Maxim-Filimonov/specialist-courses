import './App.css';
import { ComparisonSlider } from 'react-comparison-slider';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';

function App() {
  return (
    <>
      <Button variant="contained">Привет мир</Button>
      <Avatar alt="kitten" src="puppy.jpeg" />
      <TextField placeholder='Какой то текст' />
      <hr />
      <ComparisonSlider
        defaultValue={30}
        aspectRatio={16 / 9}
        orientation="horizontal"
        itemOne={<img src="./puppy.jpeg" alt='puppy' />} itemTwo={<img src="./kitten.jpeg" alt='kitten' />} />
    </>
  )
}

export default App;
