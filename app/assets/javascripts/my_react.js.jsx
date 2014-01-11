/** @jsx React.DOM */

var Hello = React.createClass({
    render: function() {
        return <div>Hello {this.props.name}</div>;
    }
});

//React.renderComponent(<Hello name="Partos" />, document.body);
React.renderComponent(<Hello name="Partos" />, document.getElementById("todo"));
