/** @jsx React.DOM */

$(document).ready(function() {

    var TodoApp = React.createClass({

        getInitialState: function() {
            return {items: [], text: ''};
        },

        onChange: function(e) {
            this.setState({text: e.target.value});
        },

        handleSubmit: function(e) {
            e.preventDefault();
            var items =  this.state.items.concat([this.state.text]);
            this.setState({items: items, text: ""})
        },

        handleItemClick: function(e) {
            console.log(e.target)
        },

        render: function() {
            return (
                <div>
                    <form onSubmit={this.handleSubmit} className = "form-inline form-horizontal" id = 'todoForm'>
                        <input onChange={this.onChange} value={this.state.text} type="text" id="item_name" className="form-control"/>
                        <button className="btn btn-success">Создать</button>
                    </form>
                    <TodoList items={this.state.items} onItemClick={this.handleItemClick} />
                </div>
                );
        }
    });


    React.renderComponent(<TodoApp />, document.getElementById("todo"));

});


