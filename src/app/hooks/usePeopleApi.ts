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
    const [personHistory, setHistory] = useState<Person[] | null>(null);
    const [error, setError] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);

    const fetchData = async () => {
        const response = await axios.get('https://randomuser.me/api/')
    }
}
