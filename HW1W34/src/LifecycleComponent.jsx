import React, { Component } from 'react';

class LifecycleComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
    this.intervalId = null;
  }

  componentDidMount() {
    console.log('Компонент монтalandi');
    this.intervalId = setInterval(() => {
      console.log('Таймер…');
      this.setState((prevState) => ({ counter: prevState.counter + 1 }));
    }, 1000);
  }

  componentWillUnmount() {
    console.log('Компонент өшірілді');
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  render() {
    return <h2>Таймер: {this.state.counter} секунд</h2>;
  }
}

export default LifecycleComponent;