/** @jsx React.DOM */


    var TodoList = React.createClass({

        render: function() {
          list_items = _.map(this.props.items, function (item) {
                         return <TodoListItem item={item}/>
                       })
          return (
            <div>
              <ul>
                { list_items }
              </ul>
            </div>
          )
        }
    });

