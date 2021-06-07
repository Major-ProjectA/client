import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../components/Context/AuthContext';

function UserAPI() {
  //   const [isLogged, setIsLogged] = useState(false);
  //   const [isAdmin, setIsAdmin] = useState(false);
  const [favorite, setFavorite] = useState([]);
  const auth = useContext(AuthContext);

  const [users, setUsers] = useState(false);

  //   useEffect(() => {
  //     const getUser = async () => {
  //       try {
  //         const res = await axios.get('/api/users');
  //         //   setIsLogged(true);
  //         //   res.data.role === 1 ? setIsAdmin(true) : setIsAdmin(false);

  //         setFavorite(res.data.favoriteJob);
  //         // setUsers(res.data);
  //       } catch (err) {
  //         alert(err.response.data.msg);
  //       }
  //     };
  //     getUser();
  //   }, []);

  const addFavoriteJob = async (job) => {
    // if(!isLogged) return alert("Please login to continue buying")
    const check = favorite.every((item) => {
      return item._id !== job._id;
    });

    if (check) {
      setFavorite([...favorite, { ...job }]);

      //   await axios.patch('/api/users/addfavoritejob', { favorite: [...favorite, { ...job }] });
      await axios.post(`/api/users/addfavoritejob/${users._id}/${job._id}`);
    } else {
      alert('This job you have added to favorites');
    }
  };

  return {
    //   isLogged: [isLogged, setIsLogged],
    //   isAdmin: [isAdmin, setIsAdmin],
    favorite: [favorite, setFavorite],
    addFavoriteJob: addFavoriteJob,
    //   history: [history, setHistory],
    users: [users, setUsers],
  };
}

export default UserAPI;
