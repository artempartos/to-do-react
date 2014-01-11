/** @jsx React.DOM */


    var TodoList = React.createClass({

        render: function() {
          list_items = _.map(this.props.items, function (item) {
                         return <TodoListItem item={item} onItemClick={this.props.onItemClick}/>
                       }, this)
          return (
            <div>
                { list_items }
            </div>
          )
        }
    });

