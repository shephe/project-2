const React = require('react')
const Layout = require('./Layout')

class Show extends React.Component {
    render() {
        const {place} = this.props
        return (
            <Layout>
            <div className="show">
                <h1>{place.name}</h1>
                <h4>{place.quadrant}</h4>
                <h4>{place.type}</h4>
                <a href={place.website}></a>
                <p>{place.description}</p>
                {place.image ? <img src={place.image} alt={place.name}/> : ''}


                <a id="edit" href={`/places/edit/${place._id}`}>Edit this location</a>
                <form action={`/places/${place._id}?_method=delete`} method="post">
                    <input type="submit" value="Delete this location"/>
                </form>
            </div>
            </Layout>
        )
    }
}

module.exports = Show