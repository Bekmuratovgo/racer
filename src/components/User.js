import { makeStyles } from '@material-ui/styles';
import React from 'react'
import Avatar from '../assets/Avatar';

const useStyles = makeStyles({
  userWrapper: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    height: '60px',
    fontFamily: 'sans-serif',
    margin: '10px 0'
  },
  number: {
    fontSize: '18px',
    fontWeight: '600',
    width: '60px',
    minWidth: '60px',
    textAlign: 'center',
  },
  selectedNumber: {
    color: '#9690EA'
  },
  avatar: {
    width: '60px',
    borderRadius: '50%',
  },
  details: {
    margin: '0 20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  name: {
    margin: '0px 0px 3px 0',
    fontSize: '16px',
    fontWeight: '500',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    minWidth: '150px'
  },
  speed: {
    color: '#6FA7E8',
    fontSize: '15px',
  },
  speed_time: {
    color: '#9690EA',
    fontSize: '15px',
  },
  time: {
    color: '#a3a3a3',
    fontSize: '15px',
    margin: '3px 0 0',
  },
  selectedTime: {
    color: '#FDB77A'
  },
});

export const User = ({ user, randomColor, selectedUser }) => {
  const classes = useStyles();

  return (
    <div className={classes.userWrapper}>
      <div 
        className={`${classes.number} ${selectedUser === user.id ? classes.selectedNumber : ''}`}
      > {user.index}</div>
      <Avatar
        className={classes.avatar}
        selectedUser={selectedUser === user.id ? true : false}
        color={randomColor}
      />
      <div className={classes.details}>
        <h3 className={classes.name}>{user.name}</h3>
        <span className={classes.speed}>
          <span className={classes.speed_time}>00:00.000</span> | {user.speed} км/ч</span>
        <p 
          className={`${classes.time} ${selectedUser === user.id ? classes.selectedTime : ''}`}
        > штрафное время 00:00.00</p>
      </div>
    </div>
  )
}
export default User;