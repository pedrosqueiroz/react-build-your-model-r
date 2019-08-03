const url = 'https://next.json-generator.com/api/json/get/41ORKNZDU';

const api = async () => {
    var data;
    await fetch(url)
        .then(response => response.json())
        .then(json => {
            data = json.data;
            return data;
        });
    return data;
}

export { api };