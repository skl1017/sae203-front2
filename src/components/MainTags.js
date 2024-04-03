
import Tags from './Tags'

export default function MainTags(){
    return (
        <div>
            <main className="w-11/12 sm:w-10/12 mx-auto flex flex-col text-white justify-center items-center mt-14 gap-6">
           <p className='text-left text-white text-2xl mx-24'>Tags</p>
               <div className='flex flex-col justify-center items-center mb-12 gap-10 w-full'>
                   <Tags/>
               </div>
        </main>
        </div>
    )
}