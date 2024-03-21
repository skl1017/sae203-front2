import React from 'react';
import SearchBar from "./SearchBar";
import Contacts from './Contacts';
import TagList from './TagList';
import { useEffect, useState } from 'react';
export default function MainContacts() {

    const [contacts, setContacts] = useState([]);
    const [tags, setTags] = useState([]);
    const [selectedTags, setSelectedTags] = useState([]);
    const [url, setUrl] = useState("http://127.0.0.1:8000/contacts/?")

    const fetchContacts = async () => {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
       
            },
        
        });
        const data = await response.json();
        setContacts(data);
        console.log(data);
    }
    
    const fetchTags = async()=>{
        const reponse = await fetch('http://127.0.0.1:8000/tags/',{
            method: 'GET',
            headers: {
   
            },
        
        });
        const data = await reponse.json();
        setTags(data);
        console.log(data);
    }

    const handleTagClick = (tagId) => {
        const index = selectedTags.indexOf(tagId);
        if (index === -1) {
            setSelectedTags([...selectedTags, tagId]);
        } else {
            setSelectedTags(selectedTags.filter(id => id !== tagId));
        }
        console.log(selectedTags);
    };

    useEffect(()=>{
        fetchContacts();
    },[])

    useEffect(()=>{
        fetchTags();
    },[])



    

    return (
        <main className="w-11/12 sm:w-10/12 mx-auto flex flex-col justify-center items-center mt-14 gap-6">
           <p className='text-left text-2xl mx-24'>CONTACTS</p>
               <div className='flex flex-col justify-center items-center gap-10 w-full'>
                   <SearchBar />
                   <TagList tags={tags} selectedTags={selectedTags} onTagClick={handleTagClick} />
                   <Contacts contacts={contacts}/>
               </div>
        </main>
    )
}