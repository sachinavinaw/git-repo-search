export class User {
    id:number;
    login:string;
    repos_url: string;
    avatar_url:string;
    html_url:string;
    repo_type:string;
    constructor (user : any) {
        this.id=user.id;
        this.login=user.login;
        this.html_url=user.html_url;
        this.repos_url = user.repos_url;
        this.avatar_url = user.avatar_url;
        this.repo_type=user.type
    }
}
