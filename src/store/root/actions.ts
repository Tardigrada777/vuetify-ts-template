import { ActionTree, ActionContext } from 'vuex';
import RootState from './state';
import { SET_LOCALE } from '@/store/root/mutations';
import { getLocaleAsync } from '@/utils/getLocaleAsync';


/**
 * Name of getLocale action.
 */
export const GET_LOCALE: string = 'getLocale';

/**
 * Gets locale value asynchronously.
 *
 * @param store     Vuex store.
 */
export async function getLocale(
    { commit }: ActionContext<RootState, RootState>
) {
    const locale: string = await getLocaleAsync();
    commit(SET_LOCALE, locale);
}

export default {
    getLocale
} as ActionTree<RootState, RootState>
