// Functional component
const Container = () => {
  return React.createElement('div', null, `Hey Kalvians! Welcome to React Learning`,
      React.createElement('div', null, `Let's rock and roll`)
  );
}

class ReactContainer extends React.Component {
  // constructor - to initialize the state 
  constructor(props) {
      super(props);
      // initialize state if needed
  }

  // render method to render the react dom 
  render() {
      return React.createElement('div', null, `Hello! Welcome to Kalvium `,
          React.createElement('div', null, `Let's rock and roll - this is babel`)
      );
  }
}

const container = document.getElementById('react-container');
ReactDOM.render(React.createElement(ReactContainer), container);
