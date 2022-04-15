import React, { useEffect, useState } from "react"

function Api() {

    

    const [country, setUsers] = useState([])
    const [city, setcity] = useState([])
    const [state, setState] = useState([])
    const [query, setquery] = useState([])
    const [timezone, settimezone] = useState([])
  
    const fetchData = () => {
      fetch("http://ip-api.com/json/?fields=61439")
        .then(response => {
          return response.json()
        })
        .then(data => {
          setUsers(data.country)
          setcity(data.city)
          setState(data.regionName)
          setquery(data.query)
          settimezone(data.timezone)
          
        })
    }

    useEffect(() => {
        fetchData()
      }, [])
  return (
    <div className="home__footer">
    <p>Country : {country}</p> |
    <p>City : {city}</p>  |
    <p>State : {state}</p> |
    <p>IPv4 : {query}</p>  |
    <p>Timezone : {timezone}</p> | 
    <p>Make with ❤️ By - <a href="https://www.facebook.com/kamalhossain09">Kamal</a></p>
  </div>
  )
}

export default Api


