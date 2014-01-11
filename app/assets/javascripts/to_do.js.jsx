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

        render: function() {
            return (
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <input onChange={this.onChange} value={this.state.text} className="" type="text" id="item_name" className="form-control"/>
                        <button className="btn btn-primary">Создать</button>
                    </form>
                </div>
                );
        }
    });


    React.renderComponent(<TodoApp name="Partos" />, document.getElementById("todo"));

});


