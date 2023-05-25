import { Box } from '@mui/material';
import { NavLink } from 'react-router-dom';

export const Home = () => {
  return (
    <>
      Home page
      <Box>
        <NavLink to='/404'>404 or some undefined url</NavLink>
      </Box>
      <Box>
        <NavLink to='/about'>About</NavLink>
      </Box>
      <Box>
        <NavLink to='contact'>Contact</NavLink>
      </Box>
    </>
  );
};
