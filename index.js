import React 
import ReactDOM
import 'bootstrap/dist/CSS/bootstrap.css'

Class Component extends React.Component {
    render(){

        import axios from "axios";

const options = {
  method: 'GET',
  url: 'https://aerodatabox.p.rapidapi.com/flights/%7BsearchBy%7D/KL1395/2020-06-10',
  headers: {
    'X-RapidAPI-Key': 'efd2b408e4mshd6cd5766bca1ad7p1de2a3jsn4f6c1f217907',
    'X-RapidAPI-Host': 'aerodatabox.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});
           return(
            <h1> Hello world </h1>
            
           );
    }
}
ReactDOM.render(<Component/> , document.getElementById("root"));