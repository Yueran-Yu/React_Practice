import React from 'react';

class Lifecycles extends React.Component {
  constructor(props) {
    super(props);
    console.log('constructor!')

  }
// wait for the base component to mount
  componentDidMount() {
    console.log('componentDidMount!')
  }

  componentDidUpdate() {
    console.log('componentDidUpdate!')
  }

  componentWillMount() {
    console.log('componentWillMount!')

  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate!', nextProps)
    return false;
  }

  render() {
    console.log('render!')
    return (
        <div className='lifecycle'>
          <h3>Lifecycles Component</h3>
          {this.props.text}
        </div>
    )
  }
}

export default Lifecycles;