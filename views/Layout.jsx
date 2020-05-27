const React = require('react')

class Layout extends React.Component {
    render(){
        return(
            <html>
                <head>
                    {/* <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossOrigin="anonymous"/> */}
                    {/* <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@700&display=swap" rel="stylesheet" /> */}
                    <link rel="stylesheet" href="/css/style.css"/>
                    <title>Day Off PDX</title>
                </head>
                <body>
        
                    <nav>
                        <h1 id="header"><a href="/places">Day Off PDX</a></h1>
                        <a href="/places">Home</a>
                        <a href="/places/new">Add a new place</a>
                        <a href="#">Search by quadrant</a>
                        <a id="login" href="#">Log in</a>

                    </nav>

                    {this.props.children}
                </body>
            </html>
        )
    }
}

module.exports = Layout