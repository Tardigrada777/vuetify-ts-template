import Vue from 'vue';
import Vuex, { Store } from 'vuex';

import RootState from '@/store/root/state';
import getters from '@/store/root/getters';
import mutations from '@/store/root/mutations';
import actions from '@/store/root/actions';
import UserModule from '@/store/modules/user'; 


Vue.use(Vuex);

const plugins: any[] = [];

/**
 * Vuex store instance, initialized with required root store,
 * modules and plugins.
 */
export const store: Store<any> = new Store({
    actions,
    getters,
    modules: {
        [UserModule.vuexName]: new UserModule(),
    },
    mutations,
    plugins,
    state: new RootState(),
});

export default store;
