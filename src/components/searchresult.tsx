import { Repository } from "../models/Repository";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCodeFork, faBookBookmark} from "@fortawesome/free-solid-svg-icons";


interface IProps{
    item:Repository
}
const SearchResult:React.FC<IProps> = ({item}) => {

    return( 
        <div className="card-body">
            <h5 className="card-title">
                <a href={item.owner.html_url}>
                    <FontAwesomeIcon className="icon-md" icon={faBookBookmark}/>
                    {item.full_name}
                </a>
            </h5>
            <p className="card-text">{item.description}</p>
            <div>
                <span className="badge bg-light text-dark" >
                <FontAwesomeIcon className="icon" icon={faCodeFork}/>
                {item.forksCount}
                </span>
            </div>
            <div className="">
                <span className="badge bg-light text-dark author-label" >Author</span>
                <img className="avtar" src={item.owner.avatar_url} alt=""/>
                <span className="owner-label">{item.owner.login}</span>
            </div>
        </div>
   )
}
 
export default SearchResult;