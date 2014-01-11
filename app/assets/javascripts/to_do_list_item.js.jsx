/** @jsx React.DOM */

    var TodoListItem = React.createClass({

        getInitialState: function() {
          return({text: ''});
        },

        componentWillMount: function(){
            this.setState({text: this.props.item.text});
        },

        onRemove: function() {
          this.props.onItemRemove(this.props.item)
        },

        onItemClick: function() {
          this.props.onItemClick(this.props.item);
        },

        onItemChange: function(e) {
          this.setState({text: e.target.value})
        },

        render: function() {
          if (this.props.item.status == "uncompleted") {
              temp = (
                  <div>
                      <span className="label label-warning" onClick={this.onItemClick}>
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

            if (this.props.item.status == "editable") {
                temp = (
                    <div>
                        <input className="" value={this.state.text} onChange={this.onItemChange}/>
                    </div>
                )

            }
          return temp

        }
    });

