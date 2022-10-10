import React from 'react';

export class addproj extends React.Component {
    constructor(props){
        super(props);
        this.state = {
               Num1: null,
               Num2: null
            };
        }
        append = (Event) => {
            let name = Event.target.name;
            let value= Event.target.value;
            this.setState({[name]:value});
        }
         submit = (Event) => {
            Event.prevent();
            const url = 'http://localhost:9000/add/${this.state.Num1}/and/${this.state.Num2}'
            fetch(url)
        .then((result)=> result.json())
        .then(result)=>{
            this.setState({queryResult : result.Addition})
        }
        }
        render() {
            return{
                <div>
                <><div class="row"></div><div class="col"></div></></>
                    <form submit={this.submit}></form></><div class="form-group" /></>
                    <><label for="Num1"> Enter First Number</label>
                        <input
                            type="number"
                            name="Num1"
                            id="Num1"
                            class="form-control"
                            onChange={this.change} /></>
                 </div>
                 <><div class="form-group">
                         <label for="Num2">Enter second Number</label>
                         <input
                             type="number"
                             name="Num2"
                             id="Num2"
                             class="form-control"
                             onChange={this.change} />
                     </div><button type="submit" class="button" />Submit</>
            </form>
        </div>
        </div>

        <div className="row">
            <div className="col">Result <is:></div>this.state.queryResult</is:></div>
        </div>
                        


            }
        
         }
        
    
