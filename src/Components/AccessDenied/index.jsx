import { Link } from "react-router-dom";
import { Typography } from "@mui/material";


const headerContainerStyle = {
  display: 'flex',
  background: '#263238',
  color: '#eceff1',
  margin: '20px',
  alignItems: 'center', 
  padding: '10px',
  top: 0,
  left: 0,
  right: 0,
};

const linkStyle = {
  textDecoration: 'none',
  margin: 5,
  color: '#eceff1'
};


const AccessDenied = () => {
  return (
    <>
    <header style={headerContainerStyle}>
    <Link to={'/'} style={linkStyle}>
      <Typography variant="h5" gutterBottom style={{ margin: 10 }}>
        <span style={linkStyle}>Home</span></Typography>
    </Link>
    </header>
    <div style={{textAlign: 'center', fontSize: 30, margin: 20}}>
        <p>🚫 Whoops! You don't have access to this page! 🚫</p>
    </div>
    </>
  )
}

export default AccessDenied