import { Button } from '@mui/material';
import Typography from '@mui/material/Typography';

const Footer = () => {
  return (
    <Typography  sx={{ backgroundColor: "#B95678", color: 'white', height: '10vh', display: 'flex', alignItems: 'flex-end', justifyContent: 'center',fontSize:{xs:'10px',md:'16px'} }}>
      &copy; {new Date().getFullYear()} The News. All rights reserved by <Button  component="a"
      href="https://github.com/kapucuonur" target="_blank"
      sx={{fontSize:{xs:'7px',md:'14px'}, color:'black'}}>Onur Kapucu</Button>
    </Typography>
  );
};

export default Footer;
