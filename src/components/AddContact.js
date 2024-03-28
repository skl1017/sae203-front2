import React, { useState, useEffect } from 'react';

export default function AddContact() {
    const [contactForm, setContactForm] = useState({
        nom: '',
        prenom: '',
        num: '',
        email: '',
        adresse: '',
        note: ''
    });

    const [selectedTags, setSelectedTags] = useState([]);
    const [tags, setTags] = useState([]);
    const [toggleTagForm, setToggleTagForm] = useState(false);

    const handleChange = (e) => {
        setContactForm({
            ...contactForm,
            [e.target.name]: e.target.value
        });
    }

    const handleTagClick = (tag) => {
        setSelectedTags([...selectedTags, tag]);
        setTags(tags.filter(item => item.id !== tag.id));
    }

    const fetchTags = async () => {
        try {
            const response = await fetch('http://127.0.0.1:8000/tags/');
            const data = await response.json();
            setTags(data);

        } catch (error) {
            console.error('Error fetching tags:', error);
        }
    }

    const handleToggleTagForm = () => {
        setToggleTagForm(!toggleTagForm);
    }

    useEffect(() => {
        fetchTags();
    }, []);

    useEffect(()=>{
        console.log(contactForm);
    }, [contactForm])

    useEffect(()=>{
        console.log(selectedTags);
    }, [selectedTags]);

    useEffect(()=>{
        console.log(toggleTagForm);
    },[toggleTagForm]);

    const handlePostContact = async (e) => {
        e.preventDefault();
        const response = await fetch('http://127.0.0.1:8000/contacts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                ...contactForm,
                tags: selectedTags
            })
        });
        const data = await response.json();
        console.log(data);
        window.location.href = 'http://localhost:3000/contacts/'+data.id;
    }

    return (
        <main className="text-white w-11/12 sm:w-10/12 mx-auto flex flex-col justify-center items-center mt-14 gap-6">
            <h1 className='text-xl'>Ajouter un contact</h1>
            <div className='flex flex-col gap-4 w-1/2 items-center'>
                <div className='flex items-center'>
                    <label>Nom:</label>
                    <input className='text-black p-1' type="text" name="nom" value={contactForm.nom} onChange={handleChange} />
                </div>
                <div className='flex items-center'>
                    <label>Prénom:</label>
                    <input className='text-black p-1' type="text" name="prenom" value={contactForm.prenom} onChange={handleChange} />
                </div>
                <div className='flex items-center'>
                    <label>Numéro:</label>
                    <input className='text-black p-1' type="text" name="num" value={contactForm.num} onChange={handleChange} />
                </div>
                <div className='flex items-center'>
                    <label>Email:</label>
                    <input className='text-black p-1' type="email" name="email" value={contactForm.email} onChange={handleChange} />
                </div>
                <div className='flex items-center'>
                    <label>Adresse:</label>
                    <input className='text-black p-1' type="text" name="adresse" value={contactForm.adresse} onChange={handleChange} />
                </div>
                <div className='flex items-center'>
                    <label>Note:</label>
                    <textarea className='text-black p-1' name="note" value={contactForm.note} onChange={handleChange} />
                </div>
                <div className='flex items-start gap-3 flex-wrap'>
                    <label>Tags:</label>
                    {selectedTags.map(tag => (
                        <div key={tag.id} style={{backgroundColor:tag.color}} className="tag gap-2 items-center justify-center flex p-1 px-2 " >
                            <p>{tag.tag}</p>
                         <span onClick={() => {
                            setSelectedTags(selectedTags.filter(item => item.id !== tag.id));
                            setTags([...tags, tag]);
                        }} class="material-symbols-outlined cursor-pointer">cancel</span>
                        </div>
                    ))}
                    <button className='text-white text-xl' onClick={handleToggleTagForm}><span class={`material-symbols-outlined ${toggleTagForm ? "fill" : ""}`}>
add_circle
</span></button>
                    
                    {toggleTagForm ? <div>
                        {tags.map(tag => (
                            <div style={{backgroundColor:tag.color}} key={tag.id} className="tag p-1 cursor-pointer" onClick={() => handleTagClick(tag)}>
                                {tag.tag}
                            </div>
                        ))}
                    </div> : <div></div>}
                </div>
                <button onClick={handlePostContact} type="submit">Ajouter</button>
            </div>
        </main>
    )
}
