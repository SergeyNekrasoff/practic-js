// React Menu
// console.log('==========================');
// var MenuExample = React.createClass({
//   getInitialState: function() {
//     return { focused: 0 };
//   },

//   clicked: function() {
//     this.setState({ focused: index });
//   },

//   render: function() {
//     var self = this;

//     return (
//       <div>
//         <ul>{ this.props.items.map(function(m, index) {
//           var style = '';

//           if (self.state.focused == index) {
//             style = 'focused';
//           }
//           return <li className={style} inClick={self.clicked.bind(self, index)}>{m}</li>;

//         })}
//         </ul>

//         <p>Selected: {this.props.items[this.state.focused]}</p>
//       </div>
//     );
//   }
// });

// React.renderComponent(
//   <MenuExample items={ ['Home', 'Services', 'About', 'Contact us'] }/>,
//   document.body
// );


// React Search
// console.log('==========================');
// var SearchExample = React.createClass({

//   getInitialState: function() {
//     return { searchString: '' };
//   },

//   handleChange: function(e) {
//     this.setState({ searchString:e.target.value });
//   },
//   render: function() {
//     var libaries = this.props.items,
//         searchString = this.state.searchString.trim().toLowerCase();

//     if (searchString.length > 0) {
//       libaries = libaries.filter(function(l) {
//         return l.name.toLowerCase().match(searchString);
//       });
//     }
//     return <div><input type="text" value={this.state.searchString} onChange={this.handleChange} placeholder="Type here" />
//       <ul>
//         {libaries.map(function(l) {
//           return <li>{l.name}<a href={l.url}</a></li>
//         })}
//       </ul>
//     </div>;
//   }
// });

// var libaries = [

//   { name: 'Backbone.js', url: 'http://documentcloud.github.io/backbone/'},
//   { name: 'AngularJS', url: 'https://angularjs.org/'},
//   { name: 'jQuery', url: 'http://jquery.com/'},
//   { name: 'Prototype', url: 'http://www.prototypejs.org/'},
//   { name: 'React', url: 'http://facebook.github.io/react/'},
//   { name: 'Ember', url: 'http://emberjs.com/'},
//   { name: 'Knockout.js', url: 'http://knockoutjs.com/'},
//   { name: 'Dojo', url: 'http://dojotoolkit.org/'},
//   { name: 'Mootools', url: 'http://mootools.net/'},
//   { name: 'Underscore', url: 'http://documentcloud.github.io/underscore/'},
//   { name: 'Lodash', url: 'http://lodash.com/'},
//   { name: 'Moment', url: 'http://momentjs.com/'},
//   { name: 'Express', url: 'http://expressjs.com/'},
//   { name: 'Koa', url: 'http://koajs.com/'},

// ];

// React.renderComponent(
//   <SearchExample items={ libaries } />,
//   document.body
// );


// React OrderForm
// console.log('==========================');
// var ServiceChooser = createClass({
//   getInitialState: function() {
//     return { total: 0 }
//   },
//   addTotal: function(price) {
//     this.setState({ total: this.state.total + price });
//   },
//   render: function() {
//     var self = this;
//     var services = this.props.items.map(function(s) {
//       return <Service name={s.name} price={s.price} active=[s.active] addTotal={self.addTotal} />;
//     });

//     return <div>
//       <h1>Our services</h1>
//       <div id='services'>
//         {services}
//         <p id='total'>Total <b>${this.state.total.toFixed(2)}</b></p>
//       </div>
//     </div>
//   }
// });

// var Service = React.createClass({
//   getInitialState: function() {
//     return { active: false }
//   },
//   clickHandler: function() {
//     var active = !this.state.active;
//     this.setState({ active: active });
//     this.props.addTotal(active ? this.props.price : -this.props.price);
//   },
//   render: function() {
//     return <p className={this.state.active ? 'active' : ''} onClick={this.clickHandler}>
//       {this.props.name} <b>${this.props.price.toFixed(2)}</b>
//   }
// });

// var services = [

//   { name: 'Web Development', price: 300 },
//   { name: 'Design', price: 400 },
//   { name: 'Integration', price: 250 },
//   { name: 'Training', price: 220 }

// ];

// React.renderComponent(
//   <ServiceChooser items={ services } />,
//   document.body
// )

// React Timer
// console.log('==========================');
// var TimerExample = React.createClass({

//   getInitialState: function() {
//     return { elapsed: 0 };
//   },

//   componentDidMount: function() {
//     this.timer = setInterval(this.tick, 50);
//   },

//   componentWillUnmount: function() {
//     clearInterval(this.timer);
//   },
//   tick: function() {
//     this.setState({elapsed: new Date() - this.props.start});
//   },
//   render: function() {
//     var elapsed = Math.round(this.state.elapsed / 100);
//     var seconds = (elapsed / 10).toFixed(1);

//     return <p>Этот пример запущен <b>{second} сек.</b> назад.</p>
//   }
// });

// ReactDOM.render(
//   <TimerExample start={Date.now()} />,
//   document.getElementById('container')
// );

// ReactDOM.render(
//   React.createClass('h1', null, 'Hi'),
//   document.getElementById('container')
// );

if (a in window) {
  var a = 1;
}

console.log(a);
// console.log(window.a);
