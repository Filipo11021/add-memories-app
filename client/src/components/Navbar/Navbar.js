import { AppBar, Typography } from "@material-ui/core";
import useStyles from "./styles";
import { Link } from "@material-ui/core";
import memories from "../../images/memories.png";

const Navbar = () => {
  const classes = useStyles();
  return (
    <div>
      <AppBar className={classes.appBar} position="static" color="inherit">
        <div className={classes.brandContainer}>
          <Typography
            component={Link}
            to="/"
            className={classes.heading}
            variant="h2"
            align="center"
          >
            Memories
          </Typography>
        </div>
        <img
          className={classes.image}
          src={memories}
          alt="memories"
          height="60"
        />
      </AppBar>
    </div>
  );
};

export default Navbar;
