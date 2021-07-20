import { Badge, Divider, IconButton, makeStyles, Toolbar, Typography } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles((theme) => ({
    title: {
        flexGrow: 1,
    },
    tagline: {
        fontSize: 25,
        textTransform: "uppercase",
        justifyContent: "center",
        fontFamily: "Montserrat",
    },
}));

const Header = () => {
    const classes = useStyles();
        return (
        <>
    <Toolbar>
      <IconButton color='inherit'>
        <MenuIcon/>
      </IconButton>

      <Typography varient="h6" className={classes.title}>
        Blogging Websites
      </Typography>

      <IconButton color='inherit'>
        <Badge badgeContent={4} color="secondary">
          <NotificationsIcon />
        </Badge>
      </IconButton>

      <IconButton color='inherit'>
        <AccountCircleIcon />
      </IconButton>
    </Toolbar>

    <Divider />

    <Toolbar className={classes.tagline}>Express your emotions through words</Toolbar>
    </>
    );
};

export default Header
