import { useState } from 'react';

interface IProps{
    handleSearch(k:string):void
}

const SearchForm: React.FC<IProps> = ({handleSearch}) => {
    const [keyword, setKeyword]=useState('');
    const handleChange=(e: React.ChangeEvent<HTMLInputElement>) => {
        if(e.target.value!==''){
            setKeyword(e.target.value)
        }
    }

    const handleClick = (event:React.MouseEvent<HTMLButtonElement>)=>{
        event.preventDefault();
        if(keyword!==''){
            handleSearch(keyword);
        }
    }

    return(
        <div className='d-flex justify-content-center bg-light text-dark'>
           <div className="card search-form">
            <div className="card-head justify-center mt-3">
                <h4 className='title'> Search more than <strong>381M</strong> repositories</h4>
            </div>
            <div className="card-body">
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Search GitHub" aria-label="Seacrh GitHub" aria-describedby="search-btn" 
                onChange={handleChange}/>
                <button className="btn btn-secondary" type="button" id="search-btn" onClick={handleClick}>Search</button>
            </div>
            </div>
            </div>
        </div>
    )
}

export default SearchForm;