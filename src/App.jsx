import { useEffect, useState } from 'react';
import './App.css';


function App() {

  const url = 'https://course-api.com/react-tours-project'
  const [tour, setTour] = useState([])
  const [loading, setLoading] = useState(true)
  const fetchTheTours = async()=>{
    try {

      const response = await fetch(url)
      const data = await response.json()
      setTour(data)
      setLoading(false)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(fetchTheTours,[])

  return (
    <div className="App">
      
      {loading && <h1>Loading ...</h1>}

    </div>
  );
}

export default App;
