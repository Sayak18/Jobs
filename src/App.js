import JobsList from "./Components/open";
import React from "react";
import Navbar from "./Components/nav";
import "./styles/App.css"
export default function App() {
  // const [loading, setLoading] = useState(true);
  const [error, setError] = React.useState(undefined);
  const [data, setData] = React.useState();

  React.useEffect(() => {
    fetch("https://refertest.pythonanywhere.com/job/openings")
      .then((res) => res.json())
      .then((json) => {
        console.log(json.data);
        setData(json.data);
        // setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setError(err.message);
        console.log(error);
        // setLoading(false);
      });
  }, []);
  console.log(typeof data)
  console.log(data)
  const cards = data?.map(item => {
    return (
        <JobsList 
          key={item.id}
          {...item}
        />
    )
})  
  return (
  <div className="App">
  <Navbar/>
  <div className="list">
  {cards}
  </div>
  </div>
  )
}
