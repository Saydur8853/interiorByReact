import React from 'react';
import './ProgressBar.css'
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function LinearProgressWithLabel(props) {
  return (
    <Box display="flex" alignItems="center">
      <Box width="100%" mr={1}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box minWidth={35}>
        <Typography variant="body2" color="textSecondary">{`${Math.round(
          props.value,
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

LinearProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate and buffer variants.
   * Value between 0 and 100.
   */
  value: PropTypes.number.isRequired,
};

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
});

export default function LinearWithValueLabel() {
  const classes = useStyles();
  const [progress1] = React.useState(60);

  const [progress2] = React.useState(65);

  const [progress3] = React.useState(80);

  return (
    <div className="Bars">
    <div className={classes.root}>
      <div><p>Architecture</p><LinearProgressWithLabel value={progress1} /></div>
      <div><p>3D Design</p><LinearProgressWithLabel value={progress2} /></div>
      <div><p>Interior</p><LinearProgressWithLabel value={progress3} /></div>
    </div>
    </div>
  );
}
