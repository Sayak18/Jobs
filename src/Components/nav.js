import React from "react";
import "../styles/nav.css"
export default function Navbar(){
  const [error, setError] = React.useState(undefined);
  const [userData, setUserData] = React.useState();

  React.useEffect(() => {
    fetch("https://refertest.pythonanywhere.com/user/data")
      .then((res) => res.json())
      .then((json) => {
        console.log(json.data);
        setUserData(json.data);
        // setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setError(err.message);
        console.log(error);   
        // setLoading(false);
      });
  }, []);
  console.log(userData)

    return(
    <div className="nav">
        <h1 className="nav-el">ABC Jobs</h1>
        <div className="user">
            <img src={userData.pictureUrl} alt="display pic"/>
            <span className="user-el">{userData.name} student of {userData.college}</span>
        </div>
    </div>)
}