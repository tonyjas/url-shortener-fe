import axios from 'axios';

// Define the base URL of the API
const rootURL = 'http://127.0.0.1:8081/';
const baseURL = rootURL + 'urlmap';

const apiClient = axios.create({
  baseURL,
});

// Define the endpoint URL
const endpointURL = '/api/v1/mapping';

function createPost(url, updateNewUrl) {
  var config = {
    headers: {
      'Content-Type': 'text/plain',
    },
    responseType: 'json',
  };

  // Make a POST request to the endpoint
  apiClient
    .post(endpointURL, url, config)
    .then((response) => {
      // Handle the response data
      console.log(response.data);
      updateNewUrl(rootURL + response.data.urlHash);
    })
    .catch((error) => {
      // Handle any errors
      console.error(error);
    });
}

export default createPost;
