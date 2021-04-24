import { useEffect, useState } from 'react';
import './App.css';
import Tours from './Tours'

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

  const notInterested = (id)=>{
    const newTours = tour.filter(tour=>tour.id!==id)
    setTour(newTours)
  }


  useEffect(fetchTheTours,[])



  return (
    <div className="App">
      <h1 className='header'>Todays Tours</h1>
      {loading && <h1>Loading ...</h1>}
      { tour.length==0  && loading==false && <div className="noTours"><h1>No Tours</h1><button className='refresh' onClick={fetchTheTours}>Refresh</button></div>}
      {tour.map((i)=>{
      
        return <Tours key={i.id} notInterested={notInterested} tour={tour} name={i.name} id={i.id} image={i.image} info={i.info} price={i.price} />
      
      })}

    </div>
  );
}

export default App;
