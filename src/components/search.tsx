import{ useEffect, useState } from 'react';
import { IResponse } from '../models/IResponse';
import Paginate from './paginate';
import SearchForm from './searchform';
import SearhResults from './searchresults';

import { GitSearchApi } from '../services/git-search-api';
import { debounce } from 'lodash';
import { Config } from '../config/config';
const Search = () => {
    
    const defaultValue={ count: 0, incompleteResults:false, items:[]}
    const [state, setState]=useState<IResponse>(defaultValue)
    const [showPage, setshowPage]=useState(false);
    const [itemOffset, setItemOffset] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);

    const delayedQuery = debounce((k)=> fetch(k), 500);
    const handleSearch= (keyword:string)=>{ delayedQuery(keyword);}

    const handlePageChange=(selectedPage:number)=>{
        const currentPage=selectedPage+1;
        setCurrentPage(selectedPage);
        const newOffset = (currentPage * Config.ITEMS_PER_PAGE) % state.items.length;
        setItemOffset(newOffset);
    }

    const fetch=async(keyword:string)=>{
        try {
            const service = new GitSearchApi();

            const result=await service.getRepositories(keyword, Config.API_ITEMS_PER_PAGE, Config.API_PAGE);
            setState(result);
            setCurrentPage(0);
            setshowPage(true);
        } catch (error) {
            console.log(error)
            setshowPage(false);
        }
    }

    const showPagination = () =>{
        if(showPage){
            const pageCount = Math.ceil(state.items.length / Config.ITEMS_PER_PAGE);
            return(
            <div className='d-flex justify-content-center'>
                <Paginate handlePageChange={handlePageChange} pageCount={pageCount} currentPage={currentPage}/>
            </div>
            )
        }
    }

    const showSearchResults=()=>{
        const endOffset = itemOffset + Config.ITEMS_PER_PAGE;
        const currentItems = state.items.slice(itemOffset, endOffset);
        return (
            <div className="container">
            <SearhResults count={state.count} items={currentItems}/>
           </div>
        )
    }

    return(
        <div className=''>
           <SearchForm handleSearch={handleSearch}/>
            {showSearchResults()}
            {showPagination()}
        </div>
    )
}

export default Search;