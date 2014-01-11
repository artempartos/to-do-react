/** @jsx React.DOM */

    var TodoListItem = React.createClass({

        render: function() {
          return (
            <li onClick={this.props.onItemClick}>{this.props.item}</li>
          )
        }
    });

