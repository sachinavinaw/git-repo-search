import axios from 'axios';
import { IResponse } from "../models/IResponse"
import { Repository } from "../models/Repository"
import { User } from "../models/User"

const url="https://api.github.com/search/repositories";
export class GitSearchApi{
    async getRepositories (keyword: string, per_page?:number, page?:number) {
        try {
            console.log(`${url}?q=${keyword}&page=${page}&per_page=${per_page}`)
            const { data }:any =await axios.get(url, {
                params: {
                    q: keyword,
                    page,
                    per_page
                  }
            })
            
            // Extract User details
            let repos = data.items.map(((repo:any) => {
                return new Repository({...repo, owner: new User(repo.owner)})
            }))
            
            // Prepare response packet
            const response:IResponse={
                count:data.total_count,
                incompleteResults:data.incomplete_results,
                items:repos
            }
            return Promise.resolve(response)
        } catch (error) {
            console.log(error)
            return Promise.reject(error)
        }
    }
}
