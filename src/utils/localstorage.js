const storage = {
    getter(key) {
        return localStorage.getItem(key);
    },
    setter(key, val) {
        return localStorage.setItem(key, val);
    }
}

export default storage