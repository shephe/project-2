const React = require('react')

class Edit extends React.Component {
    render() {
        const {place} = this.props
        return (
            <div className="edit">
                <h1>Edit {place.name}</h1>
                <form action={`/places/edit/${place._id}?_method=put`} method="POST">
                  Name: <input type="text" name="name" value={place.name}/><br/>
                  Description: <input type="text" name="description" value={place.description}/><br/>
                  {/* Is Ready To Eat: <input type="checkbox" name="readyToEat" /><br/> */}
                  <input type="submit" value="Update location"/>
                </form>
            </div>
        )
    }
}

module.exports = Edit