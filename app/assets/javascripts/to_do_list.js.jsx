/** @jsx React.DOM */


    var TodoList = React.createClass({

        render: function() {
          list_items = _.map(this.props.items, function (item) {
                         return <TodoListItem
                            item={item}
                            changeItemStatus={this.props.changeItemStatus}
                            onItemRemove={this.props.onItemRemove}
                            handleItemEditText={this.props.handleItemEditText}
                         />
                       }, this)
          return (
            <div id="my_todo_list">
                { list_items }
            </div>
          )
        }
    });

