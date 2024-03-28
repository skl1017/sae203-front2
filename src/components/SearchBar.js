export default function SearchBar(props){

    const {search, setSearch} = props;

    const handleChange = (e) => {
        setSearch(e.target.value);
    }
    return(
        <input type="text" placeholder="Search" onChange={handleChange} value={search} className="w-1/2 p-2 rounded-lg border-2 border-gray-300" />
    )
}