import * as types from '../../mutation-types'

import api from 'src/api/api-conf.js';

// The magic path come from webpack.
import {
    _,
    request
} from 'utils'

export default {
    data() {
      return {
        productId: null
      }
    },
    created() {
        this.getProductId();
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
            request.get(api.getProduct(this.productId))
                .then((res) => {
                    const products = res.data
                    commit(types.RETRIEVE_PRODUCTS, {
                        products
                    })
                })
        }
    },
    methods: {
      getProductId() {
          console.log('pid'+this.$route.params.id)
          return this.productId = this.$route.params.id;
      }
    }
}
