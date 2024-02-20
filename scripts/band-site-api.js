class BandSiteApi {
    constructor(apiKey) {
      this.apiKey = apiKey;
      this.baseUrl = 'https://unit-2-project-api-25c1595833b2.herokuapp.com';
    }
  
    buildUrl(path) {
      return `${this.baseUrl}${path}?api_key=${this.apiKey}`;
    }
  
    async getComments() {
      try {
        const response = await axios.get(this.buildUrl('/comments'));
        return response.data;
      } catch (error) {
        console.error('Error fetching comments:', error);
        throw error;
      }
    }
  
    async postComment(comment) {
      try {
        const response = await axios.post(this.buildUrl('/comments'), comment, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
        return response.data;
      } catch (error) {
        console.error('Error posting comment:', error);
        throw error;
      }
    }
  
    async getShows() {
      try {
        const response = await axios.get(this.buildUrl('/showdates'));
        return response.data;
      } catch (error) {
        console.error('Error fetching shows:', error);
        throw error;
      }
    }
  }
  
  // Instantiate and export
  const api = new BandSiteApi('9ec48fe6-56e1-433e-814d-b0d45822534b');

  export default BandSiteApi;
  