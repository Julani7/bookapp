const BASE_URL = 'https://thinkful-list-api.herokuapp.com/dwayne';



const fetchBookmarks = async function (...args) {

    let error;
    const res = await fetch(...args);
    if (!res.ok) {
        error = { code: res.status };
    }
    const data = await res.json();
    if (error) {
        error.message = data.message;
        return Promise.reject(error);
    }
    return data;
};

const getBookmarks = function () {
    return fetchBookmarks(`${BASE_URL}/bookmarks`);
};

const createBookmark = function (title, url, desc, rating) {
    const newBookmark = JSON.stringify({ title, url, desc, rating });
    return fetchBookmarks(`${BASE_URL}/bookmarks`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: newBookmark
    });
};

const deleteBookmark = function (id) {
    return fetchBookmarks(`${BASE_URL}/bookmarks/${id}`, {
        method: 'DELETE'
    });
};


export default {
    getBookmarks,
    createBookmark,
    deleteBookmark
};