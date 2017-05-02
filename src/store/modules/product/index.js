import * as types from '../../mutation-types'

import api from 'src/api/api-conf.js';

// The magic path come from webpack.
import {
    _
} from 'utils'

export default {
    data() {
      return {
        productId: null
      }
    },
    state: {
        items: []
    },
    mutations: {
        [types.RETRIEVE_PRODUCTS](state, {
            products
        }) {
            state.items = products
        }
    },
    getters: {
        productChunk: state => {
            return _.chunk(state.items, 4)
        }
    },
    actions: {
        fetchProducts({
            commit
        }) {
            this.$http.get(api.getProduct(977))
                .then((res) => {
                    const products = res.data
                    commit(types.RETRIEVE_PRODUCTS, {
                        products
                    })
                }).catch(function (error) {
                    console.log(error);
                });
        }
    }
}
