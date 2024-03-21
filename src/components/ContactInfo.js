import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function ContactInfo(props) {
    const { id } = useParams();
    const [data, setData] = useState(props.data);
    const [editMode, setEditMode] = useState(false);

    const fetchContact = async () => {
        const response = await fetch('http://127.0.0.1:8000/contacts/'+id);
        const data = await response.json();
        setData({
            id: data.contact.id,
            nom: data.contact.nom,
            prenom: data.contact.prenom,
            num: data.contact.num,
            email: data.contact.email,
            adresse: data.contact.adresse,
            note: data.contact.note,
            tags: data.tags
        
        });
    }

    useEffect(() => {
        fetchContact();
    }, [id]);

    useEffect(() => {
        console.log(data);
    }, [data]);

    const handleChangeForm = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    }



    return (
        <div className='flex flex-col items-center w-full p-4 gap-3'>
            {data && Object.keys(data).length > 0 ? (
                <div className='p-10 flex flex-col bg-white rounded-xl bg-opacity-20 mt-12'>
                    <div className='flex items-center gap-4'>
                        <span className="material-symbols-outlined xxl">account_circle</span>
                        <div className='flex flex-col w-3/4 gap-2'>
                            {editMode ? <input onChange={handleChangeForm} className='p-1 mx-auto bg-white bg-opacity-30 border-b-2 text-xl' name='prenom' value={data.prenom}></input>: <h1 className='text-xl'>{data.prenom}</h1> }{editMode ? <input className='mx-auto p-1 bg-white bg-opacity-30 border-b-2 text-xl' name='nom' value={data.nom}></input>: <h1 className='text-xl'>{data.nom}</h1> }
                        </div>
                        <span className="material-symbols-outlined cursor-pointer bg-black text-white p-3 rounded-full" onClick={() => {setEditMode(!editMode) }}>{editMode ? 'close'  : 'edit'}</span>
                    </div>
                   { editMode ? <input onChange={handleChangeForm} className='mx-auto text-center bg-white bg-opacity-30 border-b-2 text-xl' name='num' value={data.num}></input> : <h2 className='text-xl text-center my-3'>{data.num}</h2>}
                    <div className='flex flex-col gap-3'>
                        <p className='mt-4'><span className='font-bold'>Email:</span>{editMode ? <input className='p-1 mx-auto bg-white bg-opacity-30 border-b-2' name='email' value={data.email}></input>: data.email }</p>
                        <p><span className='font-bold'>Adresse:</span> {editMode ? <input className='p-1 mx-auto bg-white bg-opacity-30 border-b-2' name='adresse' value={data.adresse}></input>: data.adresse }</p>
                        <p><span className='font-bold'>Note:</span>  {editMode ? <input className='p-1 mx-auto bg-white bg-opacity-30 border-b-2' name='note' value={data.note}></input>: data.note }</p>
                    </div>
                    {data.tags && data.tags.length > 0 && (
                        <div className='flex justify-center items-center gap-3 mt-12'>
                            <h2>Tags:</h2>
                            <ul className='flex gap-3'>
                                {data.tags.map(tag => (
                                    <li className='p-2 px-3 text-white rounded-xl' style={{ "backgroundColor": tag.color }} key={tag.id}>{tag.tag}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}
