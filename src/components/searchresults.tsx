import { Repository } from "../models/Repository";
import SearchResult from "./searchresult";

interface IProps{
    count: number;
    items:Repository[]
}

const SearhResults: React.FC<IProps> = ({count, items}) => {
    const showResults=()=>{
        if(items.length>0) {
            return (
                <div className='d-flex justify-content-center mb-3'>
                    <small >Found {count} repositories!!</small>
                </div>
            )
        }
    }

    return (<div> 
            {showResults()}
            {items.map((item)=>{
                return <SearchResult item={item}/>
            })}
    </div>)
}
 
export default SearhResults;