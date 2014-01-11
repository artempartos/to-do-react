/** @jsx React.DOM */

var TodoApp = React.createClass({
    render: function() {
        return (
          <div id="create_item" className="">
            <input className="" type="text" id="item_name" className="form-control"/>
            <button className="btn btn-primary">Создать</button>
          </div>
        );
    }
});

//React.renderComponent(<Hello name="Partos" />, document.body);
React.renderComponent(<TodoApp name="Partos" />, document.getElementById("todo"));
