import io from 'socket.io-client';
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

class App extends Component {
  socketServer = 'http://localhost:1443/orders';

  socket = io(this.socketServer);

  constructor(props) {
    super(props);
    this.state = { orders: [] };
    this.baseState = this.state;
    this.handleClick = this.handleClick.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.onReceive();
  }

  onReceive() {
    this.socket.on('from-server', data => {
      this.onAddOrder(data);
    });
  }

  onAddOrder = (order) => {
    this.setState(state => {
        const orders = [...state.orders, order];
        return {
            orders
        };
    });
  };

  handleClick() {
    const data = {
      id: Math.floor(Math.random() * 100),
    }
    this.socket.emit('from-client', data);
  }

  handleClear() {
    this.setState(this.baseState);
  }

  render() {
    const { orders } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div>
          <Button color='primary' onClick={this.handleClick}>Create Order</Button>
          <Button color='primary' onClick={this.handleClear}>Clear Orders</Button>
        </div>
        <div className='orders-container'>
          {orders.map((order) => (
            <Card className={`order-card ${order.id}`}>
              <CardContent>{`Order ID: ${order.id}`}</CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
