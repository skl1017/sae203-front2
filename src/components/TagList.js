export default function TagList(props){
    const tags = props.tags;
    const selectedTags = props.selectedTags;
    const onTagClick = props.onTagClick;

    const handleTagClick = (tagId) => {
        onTagClick(tagId);
    };


    return(
        <div className="w-11/12 justify-center flex">
            <div className=" flex overflow-x-scroll gap-10 w-10/12 p-5 py-2 rounded-xl border-2">
                {tags.map(tag=>{
                    return(
                        <button onClick={()=>handleTagClick(tag.id)} key={tag.id} className="bg-gray-200 p-2 px-3 rounded-xl " style={{ backgroundColor: tag.color }}>
                            <h3 className="text-white">{tag.tag}</h3>
                        </button>
                    )
                })}
            </div>
        </div>
    )
}