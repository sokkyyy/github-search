export class User {
    constructor(
        public id: number,
        public username: string,
        public avatarUrl: string,
        public followers: number,
        public following: number,
        public githubUrl: string
        ) { }
}
