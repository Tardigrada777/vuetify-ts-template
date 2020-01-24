import { MutationTree } from 'vuex';
import UserState from './state';
import MyUser from '@/models/MyUser';


/**
 * Name of setAuthorizedUser mutation.
 */
export const SET_AUTHORIZED_USER: string = 'setAuthorizedUser';

/**
 * Sets new MyUser instance as authorizedUser in user state.
 * 
 * @param state   User state.
 * @param user    Instance of MyUser.
 */
export function setAuthorizedUser(state: UserState, user: MyUser) {
    state.authorizedUser = user;
}

export default {
    setAuthorizedUser
} as MutationTree<UserState>
