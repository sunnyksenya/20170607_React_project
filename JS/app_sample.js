var info = [
  {
  "img": 'https://images-na.ssl-images-amazon.com/images/I/511AKDWcK8L._SY344_BO1,204,203,200_.jpg',
  "title": "Re-imagine! Business Excellence in a Disruptive Age",
  "author": "Tom Peters",
  "pages": "500",
  "text": "More than just a how-to book for the 21st Century, Re-imagine! is a call to arms -- a passionate wake-up call for the business world, educators, and society as a whole. Focusing on how the business climate has changed, this inspirational book outlines how the new world of business works, explores radical ways of overcoming outdated, traditional company values, and embraces an aggressive strategy that empowers talent and brand-driven organizations where everyone has a voice."
  },
  {
  "img": 'https://images-na.ssl-images-amazon.com/images/I/511AKDWcK8L._SY344_BO1,204,203,200_.jpg',
  "title": "Re-imagine! Business Excellence in a Disruptive Age",
  "author": "Tom Peters",
  "pages": "500",
  "text": "More than just a how-to book for the 21st Century, Re-imagine! is a call to arms -- a passionate wake-up call for the business world, educators, and society as a whole. Focusing on how the business climate has changed, this inspirational book outlines how the new world of business works, explores radical ways of overcoming outdated, traditional company values, and embraces an aggressive strategy that empowers talent and brand-driven organizations where everyone has a voice."
  },
  {
  "img": 'https://images-na.ssl-images-amazon.com/images/I/511AKDWcK8L._SY344_BO1,204,203,200_.jpg',
  "title": "Re-imagine! Business Excellence in a Disruptive Age",
  "author": "Tom Peters",
  "pages": "500",
  "text": "More than just a how-to book for the 21st Century, Re-imagine! is a call to arms -- a passionate wake-up call for the business world, educators, and society as a whole. Focusing on how the business climate has changed, this inspirational book outlines how the new world of business works, explores radical ways of overcoming outdated, traditional company values, and embraces an aggressive strategy that empowers talent and brand-driven organizations where everyone has a voice."
  },
  {
  "img": 'https://images-na.ssl-images-amazon.com/images/I/511AKDWcK8L._SY344_BO1,204,203,200_.jpg',
  "title": "Re-imagine! Business Excellence in a Disruptive Age",
  "author": "Tom Peters",
  "pages": "500",
  "text": "More than just a how-to book for the 21st Century, Re-imagine! is a call to arms -- a passionate wake-up call for the business world, educators, and society as a whole. Focusing on how the business climate has changed, this inspirational book outlines how the new world of business works, explores radical ways of overcoming outdated, traditional company values, and embraces an aggressive strategy that empowers talent and brand-driven organizations where everyone has a voice."
  }
]
var Book = React.createClass ({
  propTypes: {
    info: React.PropTypes.shape({
      img: React.PropTypes.string.isRequired,
      title: React.PropTypes.string.isRequired,
      author: React.PropTypes.string.isRequired,
      pages: React.PropTypes.string.isRequired,
      text: React.PropTypes.string.isRequired,
    })
  },
  getInitialState: function() {
    return {
      visible: false
    };
  },
  readmoreClick: function(e) {
    e.preventDefault();
    this.state.visible == true ? this.setState({visible: false}) : this.setState({visible: true});
  },

  render: function() {
    var img = this.props.info.img,
        title = this.props.info.title,
        author = this.props.info.author,
        pages = this.props.info.pages,
        text = this.props.info.text,
        visible = this.state.visible;

    return (
      <div className="book">
      <img src={img}/>
      <p className="title">{title}</p>
      <p className="author">{author}</p>
      <p className="pages">{pages}</p>
      <a href="#" onClick={this.readmoreClick}> More</a>
      <p className={"text " + (visible ? '': 'none')}>{text}</p>
      </div>
    )
  },
})
var Biblio = React.createClass({
  propTypes: {
    wtf: React.PropTypes.array.isRequired,
  },
  getInitialState: function() {
    return {
      counter: 0
    };
  },
  countClick: function() {
    this.setState({'counter': this.state.counter + 1});
  },

  render: function() {
    var lol = this.props.wtf;
    var biblioTemplate;
    if (lol.length>0) {
      biblioTemplate = lol.map(function(item,index) {
        return (
          <div key={index} className="main">
            <Book info={item}/>
          </div>
        )
      })
    } else {
      biblioTemplate = <p>No books</p>
    }
    return (
      <div className="biblio">
        {biblioTemplate}
        <strong className={"biblio_count" + (lol.length > 0 ? '':'none') } onClick={this.countClick}>News count: {lol.length}</strong>
        <p>Counter: {this.state.counter}</p>
      </div>
    );
  }
});



var App = React.createClass({
  render: function() {
    return (
      <div>
        <h1>BIBLIO</h1>
        <Biblio wtf={info}/>
      </div>
    );
  }
});
ReactDOM.render(<App/>, document.getElementById('root'));
