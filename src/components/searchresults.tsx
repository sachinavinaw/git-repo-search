import { Repository } from "../models/Repository";
import SearchResult from "./searchresult";

interface IProps{
    isInialized:boolean
    count: number;
    items:Repository[]
}

const SearhResults: React.FC<IProps> = ({count, items, isInialized}) => {
    const showResults=()=>{
        if(isInialized){
            const badgeClass=(items.length===0) ? 'badge bg-primary': 'badge bg-success'
            return (
                <div className='d-flex justify-content-center mt-2 mb-2'>
                    <span className={badgeClass}> Found <strong>{count}</strong> repositories!!</span>
                </div>
            )
        }
    }

    return (<div> 
            {showResults()}
            {items.map((item)=>{
                return (
                <div className="card mb-2" key={item.id}>
                    <SearchResult item={item}/>
                </div>
                )
            })}
           
            {/* {items.map((item)=>{
                return <SearchResult item={item}/>
            })} */}
    </div>)
}
 
export default SearhResults;