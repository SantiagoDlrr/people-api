'use client'
import Image from "next/image";
import usePeopleApi from "./hooks/usePeopleApi";

/*
- show json in the screen
- get everything from the API
- if error return a div of error 

- Main return
  -when you click the button it fetches data 
  - loading && div of loading

  Current person 
  - Json of current p
  p history 
  - Json of P history 
 */

export default function Home() {
  const {person, personHistory,error, loading, fetchData} = usePeopleApi()

  if (error) return <div>Error</div> 

  return (
    <div>
      <button onClick={fetchData} >Fetch some data</button>

      {loading &&  <div>Loading</div>}

      <h1>Current Person</h1>
      <pre>{JSON.stringify(person, null, 2)}</pre>
      
      <h1>Person History</h1>
      <pre>{JSON.stringify(personHistory, null, 2)}</pre>


    </div>

  );
}
