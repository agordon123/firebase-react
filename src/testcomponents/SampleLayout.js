import React from "react";
import { ReactDOM } from "react-dom";
const Header = ({title}) => (<header>{title}</header>);
const Main = ({title}) => (<main>{title}</main>);
const Footer = ({title}) => (<footer>{title}</footer>);

class App extends React.Component {
  render() {
    const {header,main,footer} = this.props;
    return (
      <div className="app">
        <Header title={header} />
        <Main title={main} />
        <Footer title={footer}/>
      </div>
    );
  }
};

ReactDOM.render(
  <App 
    header="I am the header" 
    main="I am the main" 
    footer="I am the footer" />, 
  document.getElementById('react')
);