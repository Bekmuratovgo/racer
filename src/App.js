import React, { useEffect, useState } from 'react'
import User from './components/User';
import { getUsers } from './store/table.action';
import { useDispatch, useSelector } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/styles';
import { generateRandomColor } from './utils';

const useStyles = makeStyles({
  loading: {
    width: '100%',
    height: '100vh',
    position: 'fixed',
    top: '0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#8f8f8f38'
  },
})

export const App = () => {
  const classes = useStyles()
  const dispatch = useDispatch();
  const { users, loading } = useSelector((state) => state.tableReducer);
  const [selectedUser, setSelectedUser] = useState();

  let pagination = 1;

  const handleScroll = async () => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollTop = window.scrollY;

    if (scrollTop + windowHeight >= documentHeight && !loading) {
      pagination = pagination + 1
      dispatch(getUsers(pagination));
    }
  };

  useEffect(() => {
    dispatch(getUsers())
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      {
        users?.map((item, index) => (
          <div key={index} onClick={() => setSelectedUser(item.id)}>
            <User
              user={{ ...item, index: index + 1 }}
              randomColor={generateRandomColor()}
              selectedUser={selectedUser}
            />
          </div>
        ))
      }
      {loading &&
        <div className={classes.loading}>
          <CircularProgress />
        </div>
      }
    </div>
  )
}
export default App;