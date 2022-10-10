import React 
import ReactDOM
import 'bootstrap/dist/CSS/bootstrap.css'

Class Component extends React.Component {
    render(){
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