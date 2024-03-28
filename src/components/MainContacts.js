import React from 'react';
import SearchBar from "./SearchBar";
import Contacts from './Contacts';
import TagList from './TagList';
import { useEffect, useState } from 'react';
export default function MainContacts() {

    const [contacts, setContacts] = useState([]);
    const [tags, setTags] = useState([]);
    const [selectedTags, setSelectedTags] = useState([]);
    const [search, setSearch] = useState(null);
    const [url, setUrl] = useState("http://127.0.0.1:8000/contacts/?")
    
    const apiBuilder = () => {
        let url = "http://127.0.0.1:8000/contacts/?";
    
        if (search !== null && search !== "") {
            url += "nom=" + search + "&";
        }
        if (selectedTags.length > 0) {
            const tagsString = selectedTags.map(tag => tag.tag).join(',');
            url += "tags=" + tagsString + "&";
        }
    
        setUrl(url);
    }
    
    
    

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

    const handleTagClick = (tag) => {
        const index = selectedTags.findIndex(selectedTag => selectedTag.id === tag.id);
        if (index === -1) {
            setSelectedTags([...selectedTags, tag]);
        } else {
            setSelectedTags(selectedTags.filter(selectedTag => selectedTag.id !== tag.id));
        }
    };
    

    useEffect(()=>{
        fetchContacts();
        console.log('URL CHANGE: '+url)
    },[url])

    useEffect(()=>{
        apiBuilder();
        console.log('SEARCH CHANGE: '+search);
        console.log('TAGS CHANGE:');
        console.log(selectedTags);
    },[search, selectedTags])

    useEffect(()=>{
        fetchTags();
    },[])


    

    return (
        <main className="w-11/12 sm:w-10/12 mx-auto flex flex-col justify-center items-center mt-14 gap-6">
           <p className='text-left text-white text-2xl mx-24'>CONTACTS</p>
               <div className='flex flex-col justify-center items-center mb-12 gap-10 w-full'>
                   <SearchBar search={search} setSearch={setSearch} />
                   <TagList tags={tags} selectedTags={selectedTags} onTagClick={handleTagClick} />
                   <Contacts contacts={contacts}/>
               </div>
        </main>
    )
}