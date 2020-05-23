const React = require('react')
const {Component} = React

class New extends Component {
    render() {
        return (
            <div>
              <h1>Add new location</h1>
              <form action="/places" method="POST">
                  Name: <input type="text" name="name" /><br/>
                  Description: <input type="text" name="description" /><br/>
                  {/* Is Ready To Eat: <input type="checkbox" name="readyToEat" /><br/> */}
                  <input type="submit" value="Add place"/>
               </form>
            </div> 
        )
    }
}

module.exports = New