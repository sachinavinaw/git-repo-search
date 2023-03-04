import { Repository } from "../models/Repository";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCodeFork } from "@fortawesome/free-solid-svg-icons";
import { faBookBookmark } from "@fortawesome/free-solid-svg-icons";

interface IProps{
    item:Repository
}
const SearchResult:React.FC<IProps> = ({item}) => {

    return( 
        <div className="card-body">
            <h5 className="card-title">
                <a href={item.owner.html_url}>
                    <FontAwesomeIcon className="icon-md" icon={faBookBookmark} key={item.id}/>
                    {item.full_name}
                </a>
            </h5>
            <p className="card-text">{item.description}</p>
            <div>
                <span className="badge bg-light text-dark" key={"forks-"+item.forksCount}>
                <FontAwesomeIcon className="icon" icon={faCodeFork}  key={item.forksCount}/>
                {item.forksCount}
                </span>
            </div>
            <div className="">
                <span className="badge bg-light text-dark author-label" key={item.owner.id}>Author</span>
                <img className="avtar" src={item.owner.avatar_url} alt="" key={"img-"+item.owner.id}/>
                <span className="owner-label" key={"user-"+item.owner.login}>{item.owner.login}</span>
            </div>
        </div>
   )
}
 
export default SearchResult;