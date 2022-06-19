import { createStore } from 'vuex'
import pathify from 'vuex-pathify'
import storeCommon from "./modules/common/common";
import storePages from "./modules/pages/pages";

export const store = createStore({
    plugins: [ pathify.plugin ],
    modules: {
        ...storeCommon,
        //...storePages
    }
})
