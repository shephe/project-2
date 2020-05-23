const React = require('react')

class Show extends React.Component {
    render() {
        const {place} = this.props
        return (
            <div>
                <h1>{place.name}</h1>
                <p>{place.description}</p>
            </div>
        )
    }
}

module.exports = Show