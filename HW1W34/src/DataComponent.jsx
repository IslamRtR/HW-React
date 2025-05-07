import React, { Component } from 'react';

class DataComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      loading: false,
      error: null,
    };
    this.intervalId = null;
  }

  componentDidMount() {
    this.fetchData();
    this.intervalId = setInterval(this.fetchData, 5000);
  }

  componentWillUnmount() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null });
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
      if (!response.ok) throw new Error('Сеттік байланыс қатесі');
      const data = await response.json();
      this.setState({ data, loading: false });
    } catch (error) {
      this.setState({ error: error.message, loading: false });
    }
  };

  render() {
    const { data, loading, error } = this.state;

    if (loading) return <p>Жүктелуде…</p>;
    if (error) return <p>Қате: {error}</p>;
    if (data) {
      return (
        <div>
          <h2>{data.title}</h2>
          <p>{data.body}</p>
        </div>
      );
    }

    return null;
  }
}

export default DataComponent;