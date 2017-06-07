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
          <h3>Books app</h3>
          <br/>
          <p>This application was created with educational purpose.I used React, Redux, Router and Google Books APIs.</p>
          <br/>
          <p>All sources are located on my GitHub page. Link you can find at section 'Contacts'.</p>
        </div>
      </div>
    )
  }
})
ReactDOM.render(<App/>,document.getElementById('root'))
