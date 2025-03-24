// usePeopleApi hook
/*
- Variables, person, person history, error, loading 
- Fetch data with axios
- save data and then create a Person
- Set the person and save it to the history 
- Catch error and finally loading to true. 

- Use effect to call the fetched data 
- Return the variables and const fetch data
*/

'use client'
import { useState, useEffect} from "react";
import axios from 'axios';
import {Person} from "../types/person";

export default function usePeopleApi () {
    const [person, setPerson] = useState<Person | null>(null);
    const [personHistory, setHistory] = useState<Person[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    const fetchData = async () => {
        setLoading(true)
        try{
         await axios.get('https://randomuser.me/api/')
                    .then(response => {
                        const person = <Person> {
                            name:  response.data.results[0].name.first
                        }

                        console.log(response.data.results[0].name.first)
                        //console.log(response.data)
                        //console.log(response.data[1])

                        setPerson(person); 
                        setHistory((personHistory) => [...personHistory, person])
                    })

        } catch (err) {
            setError(err instanceof Error ? err.message : 'An error occurred')
            console.error(err)

        } finally {
            setLoading(false)
        }
        
    }

    useEffect(() => {
        fetchData()
    }, [])


    return {person, personHistory, error, loading, fetchData} 
}
