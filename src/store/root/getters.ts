import { GetterTree } from 'vuex';
import RootState from './state';


/**
 * Name of locale getter.
 */
export const LOCALE: string = 'locale';

/**
 * Returns current value of locale property.
 *
 * @param state     Root vuex state.
 */
export function locale(state: RootState): string {
    return state.locale;
}

export default {
    locale
} as GetterTree<RootState, RootState>
