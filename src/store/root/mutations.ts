import { MutationTree } from 'vuex';
import RootState from './state';


/**
 * Name of setLocale mutation.
 */
export const SET_LOCALE: string = 'setLocale';

/**
 * Sets new locale to store.
 *
 * @param state     Root state of vuex store.
 * @param locale    New value of locale.
 */
export function setLocale(state: RootState, locale: string) {
    state.locale = locale;
}

export default {
    setLocale
} as MutationTree<RootState>
