import './homePage.css'
import React, { useState, useEffect } from "react";
// import Button from '@mui/material/Button';
// import CardActions from '@mui/material/CardActions';
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import imagesss from '../../assets/Phuket 1.png'
import { Grid } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux'
import { getAllPost } from './actions';
import { Link } from 'react-router-dom';
import face from '../../assets/Ellipse 1.svg'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import Tooltip from '@mui/material/Tooltip';
// import PersonAdd from '@mui/icons-material/PersonAdd';
// import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import AddCommentOutlinedIcon from '@mui/icons-material/AddCommentOutlined';
import TurnedInNotOutlinedIcon from '@mui/icons-material/TurnedInNotOutlined';
import { useNavigate } from 'react-router-dom';

export default function HomePage() {
  const isLogged = localStorage.getItem('user')
  const dispatch = useDispatch();
  const listPost = useSelector((state) => state.homeReducer.posts);
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/profile');
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  useEffect(() => {
    dispatch(getAllPost());
  }, [])


  return (
    <div className="con-home">
      {isLogged ?
        <div className="con-profile">
          <div className="con-header">
            <h1>The Jouney</h1>
            <Tooltip title="Account settings">
              <IconButton
                onClick={handleClick}
                size="small"
                sx={{ ml: 2 }}
                aria-controls={open ? 'account-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
              >
                <div className="button-log-reg">
                  <img src={face} alt="" />
                </div>
              </IconButton>
            </Tooltip>
            {/* </Box> */}
            <Menu
              anchorEl={anchorEl}
              id="account-menu"
              open={open}
              onClose={handleClose}
              onClick={handleClose}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: 'visible',
                  filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                  mt: 1.5,
                  '& .MuiAvatar-root': {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  '&:before': {
                    content: '""',
                    display: 'block',
                    position: 'absolute',
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: 'background.paper',
                    transform: 'translateY(-50%) rotate(45deg)',
                    zIndex: 0,
                  },
                },
              }}
              transformOrigin={{ horizontal: 'right', vertical: 'top' }}
              anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
              <MenuItem onClick={() => { handleClose(), handleButtonClick() }}>
                <Person2OutlinedIcon style={{ color: 'orange' }} />Profile
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <AddCommentOutlinedIcon style={{ color: 'green' }} />New Jurnal
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <TurnedInNotOutlinedIcon style={{ color: 'blue' }} /> Bookmark
              </MenuItem>
              <Divider />
              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <Logout fontSize="small" style={{ color: 'red' }} />
                </ListItemIcon>
                Logout
              </MenuItem>
            </Menu>
            <h1></h1>
          </div>
        </div>
        // >>>>>>>>>>>>>>>>>>>
        :
        <div className="img-bg">
          <div className="content-head">
            <h1>The Jouney</h1>
            <div className="button-log-reg">
              <Link to='/register'>
                <button >Register</button>
              </Link>
              <Link to='/login'>
                <button> Login</button>
              </Link>
            </div>
          </div>
          <div className="content-text">
            <h1>The Journey</h1>
            <h1>you ever dreamed of.</h1>
          </div>
          <div className="content-text2">
            <h1>We made a tool so you can easily keep & share your travel memories.
              But there is a lot more</h1>
          </div>
        </div>

      }


      {/* search */}
      <h1 className='journey'>Journey</h1>
      <form className='search-content'>
        <TextField style={{ width: '170vh', backgroundColor: '#fff' }}
          id="search-bar"
          className="text"
          // onInput={(e) => {
          //   setSearchQuery(e.target.value);
          // }}
          label="Find journey"
          variant="outlined"
          placeholder="Search..."
          size="small"
        />
        <IconButton type="submit" aria-label="search">
          <SearchIcon style={{ fill: "blue" }} />
        </IconButton>
      </form>

      {/* card */}
      <Grid container spacing={2}
        style={{
          paddingLeft: '40px',
          paddingRight: '40px',
          paddingTop: '20px'
        }}>
        {listPost?.map((el, index) => (
          <Grid item xs={3} key={index}>
            <Card sx={{ maxWidth: 345, borderRadius: '10px', backgroundColor: '#fff' }}>
              <CardMedia
                sx={{ height: '240px', }}
                image={imagesss}
                title="green iguana"
              />
              <CardContent>
                <Typography
                  style={{
                    fontSize: '14px',
                    height: '44px',
                    color: '#000',
                    fontFamily: 'Poppins',
                    fontStyle: 'normal',
                    fontWeight: '700',
                    lineHeight: 'normal',
                  }} gutterBottom variant="h5" component="div">
                  {el.title}
                </Typography>
                <Typography
                  style={{
                    color: '#6C6C6C',
                    fontFamily: 'Poppins',
                    fontSize: '12px',
                    fontStyle: 'normal',
                    fontWeight: '400',
                    lineHeight: 'normal',
                  }} variant="body2" color="text.secondary">
                  {el.description}
                </Typography>
              </CardContent>
              {/* <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions> */}
            </Card>
          </Grid>
        ))}
      </Grid>
    </div >
  )
}