/** @jsx React.DOM */

    var TodoListItem = React.createClass({

        getInitialState: function() {
          return({text: ''});
        },

        componentWillMount: function(){
            this.setState({text: this.props.item.text});
        },

        componentDidUpdate: function(){
            if (this.props.item.status == "editable") {
                this.refs.MyInput.getDOMNode().focus()
            }
        },

        onRemove: function() {
          this.props.onItemRemove(this.props.item);
        },

        onItemClick: function() {
            this.props.changeItemStatus(this.props.item, "editable");
        },

        onItemChange: function(e) {
            this.setState({text: e.target.value})
        },

        onEnter: function(e) {
            e.preventDefault();
            this.props.handleItemEditText(this.props.item, this.state.text)
        },

        onClose: function(e) {
            e.preventDefault();
            this.props.changeItemStatus(this.props.item, "uncompleted");
        },

        render: function() {
          if (this.props.item.status == "uncompleted") {
              temp = (
                  <div className="todoItemDiv">
                      <span className="label label-warning" onClick={this.onItemClick}>
                      {this.props.item.text}
                      </span>
                      <a className="glyphicon glyphicon-remove" onClick={this.onRemove}/>
                  </div>
                  );

          }

            if (this.props.item.status == "deleted") {
                temp = (
                    <div className="todoItemDiv">
                        <span className="label label-danger">
                      {this.props.item.text}
                        </span>
                    </div>
                    );

            }

            if (this.props.item.status == "editable") {
                temp = (
                    <div className="todoItemDiv">
                        <form
                            onSubmit={this.onEnter}
                            onBlur={this.onClose}
                            className = "form-inline form-horizontal">

                            <input
                                ref='MyInput'
                                value={this.state.text}
                                onChange={this.onItemChange}

                            />
                        </form>
                    </div>
                )

            }
          return temp

        }
    });