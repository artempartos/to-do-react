/** @jsx React.DOM */

$(document).ready(function() {

    var TodoApp = React.createClass({

        getInitialState: function() {
            return {items: [], text: '', id: 0};
        },

        onChange: function(e) {
            this.setState({text: e.target.value});
        },

        handleSubmit: function(e) {
            e.preventDefault();
            var items =  this.state.items.concat([{text: this.state.text, id: this.state.id}]);
            this.setState({items: items, text: "", id: this.state.id + 1})
        },

        handleItemClick: function(e) {
            console.log(e.target)
        },

        handleItemRemove: function(item) {
            items = _.without(this.state.items, item);
            this.setState({items: items});
        },

        render: function() {
            return (
                <div>
                    <form onSubmit={this.handleSubmit} className = "form-inline form-horizontal" id = 'todoForm'>
                        <input onChange={this.onChange} value={this.state.text} type="text" id="item_name" className="form-control"/>
                        <button className="btn btn-success">Создать</button>
                    </form>
                    <TodoList items={this.state.items} onItemClick={this.handleItemClick} onItemRemove={this.handleItemRemove}/>
                </div>
                );
        }
    });


    React.renderComponent(<TodoApp />, document.getElementById("todo"));

});


