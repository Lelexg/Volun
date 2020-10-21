import { Button, withStyles } from "@material-ui/core";

const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText('#000'),
    backgroundImage: 'linear-gradient(#6C63FF, #AD40F0)',
  },
}))(Button);

export default ColorButton;