class DataFetcher {
    constructor(apiEndpoint) {
      this.apiEndpoint = apiEndpoint;
      this.cache = {};
    }
  
    async fetchData(params) {
      const query = Object.keys(params)
        .map(key => `${key}=${params[key]}`)
        .join('&');
      const url = `${this.apiEndpoint}?${query}`;
  
      if (this.cache[url]) {
        return this.cache[url]; // Return cached data if available
      }
  
      try {
        const response = await fetch(url);
        const data = await response.json();
        this.cache[url] = data; // Cache the fetched data
        return data;
      } catch (error) {
        console.error('Error fetching data:', error);
        return null;
      }
    }
  
    clearCache() {
      this.cache = {};
    }
  }
  
  const fetcher = new DataFetcher('https://api.example.com/data');
  fetcher.fetchData({ userId: 123, type: 'summary' })
    .then(data => {
      console.log('Fetched data:', data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  