const BASE_URL = 'http://localhost:8080';
export default {
  getBannerData() {
    return BASE_URL + '/api/campaign_banner/?img_size=medium&limit=10&page=0&offset=0&platform=mobile'
  },
  getFeatureData() {
    return BASE_URL + '/api/featured_merchandise/?limit=10&page=0&offset=0&img_size=small&platform=mobile'
  },
  getShelfData() {
    return BASE_URL + '/api/shelf/?limit=10&page=0&offset=0&img_size=small'
  }
}