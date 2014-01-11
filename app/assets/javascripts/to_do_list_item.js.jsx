/** @jsx React.DOM */

    var TodoListItem = React.createClass({

        onRemove: function() {
          this.props.onItemRemove(this.props.item)
        },

        render: function() {
          return (
            <div>
              <span className="label label-warning" onClick={this.props.onItemClick}>
               {this.props.item.text}
              </span>
              <a className="glyphicon glyphicon-remove" onClick={this.onRemove}/>
            </div>
          )
        }
    });

