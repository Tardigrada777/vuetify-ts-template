import { ActionTree, GetterTree, Module, MutationTree } from 'vuex';

import RootState from '@/store/root/state';


/**
 * Generic Vuex store module with state, getters, actions and mutations.
 * ALl project Vuex modules must extend it.
 *
 * @implements Module<ModuleState, RootState>
 */
export default class VuexModule<ModuleState>
    implements Module<ModuleState, RootState> {

    /**
     * Specifies if module is self-contained or registered
     * under the global namespace.
     *
     * More info: https://vuex.vuejs.org/en/modules.html ("Namespacing" section)
     */
    public namespaced: boolean = true;

    /**
     * User module level state.
     */
    public state: ModuleState;

    /**
     * Getters of user module.
     */
    public getters: GetterTree<ModuleState, RootState>;

    /**
     * Actions of user module.
     */
    public actions: ActionTree<ModuleState, RootState>;

    /**
     * Mutations of user module.
     */
    public mutations: MutationTree<ModuleState>;
}
