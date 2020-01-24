import { GetterTree } from 'vuex';
import UserState from './state';
import RootState from '@/store/root/state';
import MyUser from '@/models/MyUser';


/**
 * Name of authorizedUser getter.
 */
export const AUTHORIZED_USER: string = 'authorizedUser';

/**
 * Returns actual authorized User, or null.
 * 
 * @param state   State of vuex User module.
 */
export function authorizedUser(state: UserState): MyUser | null {
    return state.authorizedUser;
}

export default {
    authorizedUser
} as GetterTree<UserState, RootState>
