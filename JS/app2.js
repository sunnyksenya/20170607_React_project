var App = React.createClass({
  render: function() {
    return (
      <div className="wrapper">
        <div className="menu_wrap">
          <div className="menu_item">HOME</div>
          <div className="menu_item">BOOKS</div>
          <div className="menu_item">CONTACTS</div>
        </div>
        <div className="contains_wrap">
          <input placeholder="Get a book"/>
          <button>Search</button>
        </div>
      </div>
    )
  }
})
ReactDOM.render(<App/>,document.getElementById('root'))
