import { useEffect, useState } from "react";

export default function Tags() {
    const [tags, setTags] = useState([]);
    const [tagForm, setTagForm] = useState({});
    const [colors, setColors] = useState([
        "#8b5cf6", // bg-violet-500
        "#dc2626", // bg-red-500
        "#3b82f6", // bg-blue-500
        "#f59e0b", // bg-yellow-500
        "#10b981"  // bg-green-500
    ]);

    const fetchTags = async () => {
        try {
            const response = await fetch('http://127.0.0.1:8000/tags');
            const data = await response.json();
            setTags(data);
        } catch (error) {
            console.error('Error fetching tags:', error);
        }
    };

    const handleChange = (e) => {
        if (e.target.name === "tag") {
            setTagForm({
                ...tagForm,
                [e.target.name]: e.target.value
            });
        } else {
            const colorIndex = parseInt(e.target.dataset.index);
    const selectedColor = colors[colorIndex];
    setTagForm({
        ...tagForm,
        color: selectedColor
    });
}};

const postTag = async () => {
    try {
        const response = await fetch('http://127.0.0.1:8000/tags', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(tagForm)
        });
        const data = await response.json();
        console.log(data);
        fetchTags();
        setTagForm({});
    }
    catch (error) {
        console.error('Error posting tag:', error);
    }
}

const deleteTag = async (id) => {
    try {
        const response = await fetch('http://127.0.0.1:8000/tags/'+id, {
            method: 'DELETE',
        });
        const data = await response.json();
        console.log(data);
        fetchTags();
    }
    catch (error) {
        console.error('Error deleting tag:', error);
    }}

    useEffect(() => {
        fetchTags();
    }, []);

    useEffect(()=>{
        console.log(tags);
    
    },[tags])

    
    
    useEffect(() => {
        console.log(tagForm);
    }, [tagForm]);



    return (
        <div className="w-8/12">
            <div className="flex sm:flex-row flex-col gap-5 justify-around">
                <div className="flex flex-col gap-5">
                    <div className="flex items-center gap-3">
                        <label>Tag:</label>
                        <input onChange={handleChange} value={tagForm.tag || ''} className="text-black p-1" type='text' name='tag' placeholder='Ajouter un tag' />
                    </div>

                    <div>
                        <p className="mb-4">Couleur:</p>
                        <ul className="flex gap-3">
                            {colors.map((color, index) => (
                                <li key={index} onClick={handleChange} name="color" data-index={index} style={{ backgroundColor: color }}  className={`w-5 h-5 rounded-full cursor-pointer`} ></li>
                            ))}
                        </ul>
                    </div>

                    <button className="bg-white text-black p-2 rounded" onClick={postTag}>Ajouter</button>
                </div>
                <ul>
                    {tags.map(tag => (
                        <li className="p-1 flex justify-between" style={{backgroundColor: tag.color}} key={tag.id}><p>{tag.tag}</p><button onClick={()=>{deleteTag(tag.id)}} class="material-symbols-outlined">
                        close
                        </button></li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
