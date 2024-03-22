import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ContactInfo from './ContactInfo';

export default function Contact() {
    const { id } = useParams();

    return (
        <main className="flex  ">
                
                
                

                  <ContactInfo />
               
           
        </main>
    )
}
