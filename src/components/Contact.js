import {useParams} from 'react-router-dom';
import { useEffect } from 'react';

export default function Contact(){

    const {id} = useParams();
    console.log(id);

    const fetchContact = async () =>{
        fetch('http://127.0.0.1:8000/contacts/'+id)
        .then(response => response.json())
        .then(data => console.log(data))
    }

    useEffect(()=>{
        fetchContact();
    
    },[])

    return(
        <div>
            <h1>Contact</h1>
        </div>
    )
}