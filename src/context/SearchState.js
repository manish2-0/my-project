import react,{useState} from "react";
import SearchContext from "./SearchContext";

const SearchState=(props)=>{

    const [searchvalue, setsearchvalue] = useState({
        value:"",
        searchitem:"blp_id"
    });

    return(
        <SearchContext.Provider value={{searchvalue,setsearchvalue}}>
            {props.children}
        </SearchContext.Provider>
    )
}

export default SearchState;