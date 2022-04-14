import ReactDOM from "react-dom";
import {
  InfoRow,
  Div,
  Card
} from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";

export function GetCompanyInfoFrom(query) {

    var url = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/findById/party";
    var token = "d3703bb6feda31f27dd2ddd585e46781f8435697";
    //var query = "7707083893";

    var options = {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": "Token " + token
        },
        body: JSON.stringify({query: query})
    }

    /*fetch(url, options)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log("error", error));*/

    return new Promise((resolve,reject)=>{
        fetch(url, options)
        .then(response => response.text())
        .then(result => {
            console.log('information successfully received from the API');
            //console.log(result);
            resolve(JSON.parse(result));
        })
        .catch(error => console.log("error", error));
    });

    //console.log(response)
}