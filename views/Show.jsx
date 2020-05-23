const React = require('react')

class Show extends React.Component {
    render() {
        const {place} = this.props
        return (
            <div>
                <h1>{place.name}</h1>
                <p>{place.description}</p>
                <a href={`/places/edit/${place._id}`}>Edit this location</a>
                <form action={`/places/${place._id}?_method=delete`} method="post">
                    <input type="submit" value="Delete this location"/>
                </form>
            </div>
        )
    }
}

module.exports = Show