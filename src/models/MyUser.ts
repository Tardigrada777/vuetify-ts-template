/**
 * User model.
 */
export default class MyUser {

    /**
     * User's unque login.
     */
    public login: string;

    /**
     * Creates new MyUser instance.
     * 
     * @param login   Login of new User.
     */
    constructor(login: string) {
        this.login = login;
    }
}