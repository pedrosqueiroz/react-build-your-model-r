import Axios from 'axios';
const url = 'https://next.json-generator.com/api/json/get/41ORKNZDU';

// const api = async () => {
//     var success = false;
//     if (!success) {
//         success = true;
//         var data;
//         await Axios.get(url)
//             .then(res => {
//                 data = res.data.data

//                 return data;
//             })
//             .catch(function (e) {
//                 console.log(e);
//                 return e;
//             });
//         return data;
//     }
//     return;
// }
const api = async () => {
    var data;
    await fetch(url)
        .then(response => response.json())
        .then(json => {
            data = json.data
            return data;
        });
    return data;
    // catch(error) {
    // console.log('Erro no fetch: ', error);

}


export { api };