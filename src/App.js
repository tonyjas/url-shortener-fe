import logo from './logo.svg';
import './App.css';
import createPost from './api/URLMappingClient';
import { useState } from 'react';

function App() {
  const [url, updateUrl] = useState('');
  const [newUrl, updateNewUrl] = useState('');

  const urlChangeHandler = (event) => {
    //console.log(event.target.value);
    updateUrl(event.target.value);
  };

  function onSubmitHandler(event) {
    event.preventDefault();
    if (url.length === 0) {
      return;
    }
    createPost(url, newUrlChangeHandler, apiErrorHandler);
  }

  function apiErrorHandler(error) {
    alert(error);
  }

  function newUrlChangeHandler(newUrl) {
    //console.log(newUrl);
    updateNewUrl(newUrl);
  }

  function resetForm() {
    updateUrl('');
    updateNewUrl('');
  }

  return (
    <div className="App">
      <div className="formWrapper">
        <form className="mainForm" onSubmit={onSubmitHandler}>
          <input
            placeholder="Enter URL"
            type="text"
            name="url"
            value={url}
            onChange={(e) => urlChangeHandler(e)}
          />
          <div className="buttonDiv">
            <button disabled={newUrl.length > 0 ? true : false} type="submit">
              Generate
            </button>
            <button onClick={resetForm}>Reset</button>
          </div>
        </form>
        <div className="urlWrapper">
          {newUrl.length > 0 ? (
            <>
              <input type="text" name="newUrl" value={newUrl} readOnly />
              <div className="buttonDiv">
                <button onClick={() => navigator.clipboard.writeText(newUrl)}>
                  Copy
                </button>
              </div>
            </>
          ) : (
            ''
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
