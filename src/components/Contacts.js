import { Link } from 'react-router-dom';

export default function Contacts(props){
    


    const contacts = props.contacts;

    return(

            <div className="w-full flex flex-col flex-nowrap sm:flex-wrap sm:wrap sm:flex-row justify-center sm:w-10/12 sm:justify-between items-center gap-4 ">
                {contacts.map(contact => {
                    return (
                        <Link to={`/contacts/${contact.id}`} className='w-10/12 sm:w-3/12 p-4 bg-gray-200 rounded-lg flex justify-between'>
                            <div key={contact.id} className=" ">
                                <div className="flex items-center gap-5">
                                <span className="material-symbols-outlined text-4xl">account_circle</span>
                                    <h3>{contact.prenom} {contact.nom}</h3>
                                </div>
                            </div>
                        </Link>
                    )
                })}
            </div>

    )
    

}