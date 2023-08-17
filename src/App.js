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
    position: 'fixed',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
})

export const App = () => {
  const classes = useStyles()
  const dispatch = useDispatch();
  const { users, loading } = useSelector((state) => state.tableReducer);
  const [selectedUser, setSelectedUser] = useState();
  const [pagination, setPagination] = useState(1);

  const handleSelect = (id) => {
    setSelectedUser(id);
  }

  useEffect(() => {
    dispatch(getUsers(pagination))
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollTop = window.scrollY;

    if (scrollTop + windowHeight >= documentHeight && !loading) {
      dispatch(getUsers(pagination + 1));
      setPagination((prev) => prev + 1);
    }
  };
  return (
    <div>
      {
        users?.map((item, index) => (
          <User
            key={index}
            user={{ ...item, index: index + 1 }}
            onClick={() => handleSelect(item.id)}
            randomColor={generateRandomColor()}
            selectedUser={selectedUser}
          />
        ))
      }
      {
        <div className={classes.loading}>
          <CircularProgress />
        </div>
      }
    </div>
  )
}
export default App;