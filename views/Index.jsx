const React = require('react');

class Index extends React.Component {
    render() {
        console.log(this.props)
        const { places } = this.props;
        //can store html in variables
        // const logoutButton = (<form action="/sessions/?_method=delete" method="post">
        //     <input type="submit" value="Log out"/>
        // </form>)
        return (
            <div>
                <nav>
                    <a href="/places/new">Add a location</a>
                </nav>
                
                <div className="container">
                   {places.map((place, index) => {
                       return (
                           <div className="card" key={index}>
                               <a href={`/places/${place._id}`}>{place.name}</a>
                           </div>
                       )
                   })}
                </div>
            </div>
        )
    }
}

module.exports = Index;