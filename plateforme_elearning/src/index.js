import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

class AppContainer extends React.Component {
  constructor (props){
    super ();
  }
  render (){
    return (
      <div>
        <AppJumbotron title="Objectifs" />
        <ItemList />
        <br />
        <br />
        <br />
        <ItemCount count={allTheThings.length} />
        <hr />
      </div>
    );
  }
}

class Item extends React.Component {
  constructor (props){
    super ();

    this.state = {
      checked: false
    };

    this.handleClick = this.handleClick.bind(this);    
  }
  handleClick (e){
    this.setState({
      checked: !this.state.checked
    });

  }
  render (){
    let text = this.state.checked ? <strike>{this.props.message}</strike> : this.props.message;
    return (
        <div className="row">
          <div className="col-md-12">
            <input type="checkbox" onClick={this.handleClick} />&nbsp;{text}
            <hr />
          </div>
        </div>
    );
  }
}

let item2 = <Item message="Changer la couleur de l'objet" />;
let item3 = <Item message="Déplacer l'objet à droite" />;
let item4 = <Item message="Faire une rotation à 90° de l'objet" />;

let allTheThings = [item2, item3, item4];

class ItemList extends React.Component {
  constructor (props){
    super ();
  }
  render (){
    let items = allTheThings.map(thing => thing);
    return (
        <h4>{items}</h4>
    );
  }
}

class ItemCount extends React.Component {
  constructor (props){
    super ();
  }
  render (){
    return (
      <h4>Il y a {this.props.count} objectifs sur cette liste.</h4>
    );
  }
}

class AppJumbotron extends React.Component {
  render (){
    return (
      <div className="jumbotron">
        <h2>{this.props.title}</h2>
      </div>
    );
  }
}

let target = document.getElementById('app');
ReactDOM.render(<AppContainer />, target);


