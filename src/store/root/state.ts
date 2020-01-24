/**
 * Root state of vuex store.
 */
export default class RootState {

    /**
     * Application locale.
     */
    public locale: string;

    /**
     * Creates initial root store state.
     */
    constructor() {
        this.locale = 'en';
    }
}
