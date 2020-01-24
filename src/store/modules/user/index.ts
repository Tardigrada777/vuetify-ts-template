import actions from '@/store/modules/user/actions';
import getters from '@/store/modules/user/getters';
import mutations from '@/store/modules/user/mutations';
import UserState from '@/store/modules/user/state';
import VuexModule from '@/store/VuexModule';


/**
 * User Vuex store module with its own state, getters, actions and mutations.
 *
 * @extends VuexModule<UserState>
 */
export default class User extends VuexModule<UserState> {

    /**
     * Name of the module in Vuex store.
     */
    public static readonly vuexName: string = 'user';

    /**
     * Creates user Vuex module, based on predefined class properties.
     */
    public constructor() {
        super();
        this.getters = getters;
        this.actions = actions;
        this.mutations = mutations;
        this.state = new UserState();
    }
}
