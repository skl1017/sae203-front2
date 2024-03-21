import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ContactInfo from './ContactInfo';

export default function Contact() {
    const { id } = useParams();
    const [contacts, setContacts] = useState([]);

    const fetchAllContacts = async () => {
        fetch('http://127.0.0.1:8000/contacts/')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setContacts(data);
            })
            .catch(error => console.error('Error fetching contact:', error));
    }
  
    useEffect(() => {
        fetchAllContacts();
    }, [id]);

    return (
        <main className="flex  ">
            <ul className='w-1/4 hidden sm:block h-full'> 
                {contacts.map(contact => (
                    <li key={contact.id}>
                        <Link to={`/contacts/${contact.id}`} className=' border-y bg-white bg-opacity-30 border-gray-400 p-4 flex justify-between'>
                            <div className="">
                                <div className="flex items-center gap-5">
                                    <span className="material-symbols-outlined text-4xl">account_circle</span>
                                    <h3>{contact.prenom} {contact.nom}</h3>
                                </div>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
                
                
                
                
          
                  <ContactInfo />
               
           
        </main>
    )
}
