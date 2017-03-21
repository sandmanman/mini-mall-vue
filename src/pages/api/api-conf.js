/**
 * api config
 * 
 */
let BASE_URL = 'http://localhost:8080';

export default {
    getBanner() { 
        // 首页banner
        return BASE_URL + '/api/campaign_banner/?img_size=medium&limit=10&page=0&offset=0&platform=mobile'
    },
    getFeature() { 
        // 特色商品
        return BASE_URL + '/api/featured_merchandise/?limit=10&page=0&offset=0&img_size=small&platform=mobile'
    },
    getShelf() { 
        // 商品类目列
        return BASE_URL + '/api/shelf/?limit=10&page=0&offset=0&img_size=small'
    },
    getShelfOnly(shelfId) { 
        // 单个类目数据
        return BASE_URL + '/api/shelf/' + shelfId + '/?&img_size=small'
    },
    getProductList(shelfId, limit) {
        /**
         * 商品列
         * shelfId 类目id
         * limit 初始显示个数
         */
        return BASE_URL + '/api/product_preview/?shelf__id=' + shelfId + '&order_by=-priority&order_by=-id&limit=' + limit + '&page=0&offset=0&img_size=small'
    },
    getProduct(productId) {
        // 商品信息
        return BASE_URL + 'api/v1.4/product/' + productId + '/?img_size=medium';
    },
    getShoppingCart() {
        return BASE_URL + '/api/shelf/shopping_cart/?limit=10&page=0&offset=0&img_size=small'
    }
}