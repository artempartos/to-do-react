/** @jsx React.DOM */

    var TodoListItem = React.createClass({

        onRemove: function() {
          this.props.onItemRemove(this.props.item)
        },

        render: function() {
          if (this.props.item.status == "uncompleted") {
              temp = (
                  <div>
                      <span className="label label-warning" onClick={this.props.onItemClick}>
                      {this.props.item.text}
                      </span>
                      <a className="glyphicon glyphicon-remove" onClick={this.onRemove}/>
                  </div>
                  );

          }

            if (this.props.item.status == "deleted") {
                temp = (
                    <div>
                        <span className="label label-danger" onClick={this.props.onItemClick}>
                      {this.props.item.text}
                        </span>
                    </div>
                    );

            }
          return temp

        }
    });

