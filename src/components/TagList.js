export default function TagList(props) {
    const { tags, selectedTags, onTagClick } = props;

    const handleTagClick = (tag) => {
        onTagClick(tag);
    };

    return (
        <div className="w-11/12 justify-center flex">
            <div className="flex overflow-x-scroll gap-10 w-10/12 p-5 py-2 rounded-xl border-2">
                {tags.map(tag => (
                    <button
                        onClick={() => handleTagClick(tag)}
                        key={tag.id}
                        className="p-2 px-3 rounded-xl"
                        style={{
                            border: `2px solid ${selectedTags.find(selectedTag => selectedTag.id === tag.id) ? tag.color : '#CCCCCC'}`,
                            backgroundColor: selectedTags.find(selectedTag => selectedTag.id === tag.id) ? tag.color : 'transparent',
                        }}
                    >
                        <h3 className="text-white">{tag.tag}</h3>
                    </button>
                ))}
            </div>
        </div>
    );
}
