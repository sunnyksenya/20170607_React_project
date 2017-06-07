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
          <img src="" alt="!"/>
          <h3>Shpiner Valeria</h3>
          <p>Hi! I am junior front-end developer and now I learn React. You can contact me in following ways:</p>
          <img src="" alt="!"/>
          <img src="" alt="!"/>
          <img src="" alt="!"/>
        </div>
      </div>
    )
  }
})
ReactDOM.render(<App/>,document.getElementById('root'))
