const React = require('react');
const Layout = require('./Layout')

class Index extends React.Component {
    render() {
        // console.log(this.props)
        const { places } = this.props;
        //can store html in variables
        // const logoutButton = (<form action="/sessions/?_method=delete" method="post">
        //     <input type="submit" value="Log out"/>
        // </form>)
        return (
            <Layout>
                <div>
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
            </Layout>
        )
    }
}

module.exports = Index;