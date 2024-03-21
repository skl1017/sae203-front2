import { Link } from 'react-router-dom';

export default function Contacts(props){
    const contacts = props.contacts;

    return(
        <div className='w-full flex flex-col items-center sm:w-10/12 mt-12'>
            <div className='w-full mb-10'>
                <Link to="/" className='p-4 bg-black text-white rounded-lg'>Ajouter un contact</Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {contacts.map(contact => (
                    <Link key={contact.id} to={`/contacts/${contact.id}`} className='bg-gray-200 p-4 rounded-lg flex justify-between'>
                        <div className="">
                            <div className="flex items-center gap-5">
                                <span className="material-symbols-outlined text-4xl">account_circle</span>
                                <h3>{contact.prenom} {contact.nom}</h3>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
