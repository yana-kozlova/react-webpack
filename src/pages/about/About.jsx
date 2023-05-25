import imgPng from '@images/img.png';
import Button from '@mui/material/Button';

export const About = () => {
  return (
    <div>
      <h1>About Page</h1>
      <Button variant='contained'>Click Me Now!</Button>
      <img src={imgPng} alt='image' />
    </div>
  );
};
