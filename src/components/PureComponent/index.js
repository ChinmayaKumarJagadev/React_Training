import React, { PureComponent } from 'react';

class Item extends PureComponent {
  render() {
    console.log(`Item ${this.props.id} rendered`);
    return <li className="list-group-item">{this.props.name}</li>;
  }
}

class ItemList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
        { id: 3, name: 'Item 3' }
      ]
    };
  }

  changeItemName = (id, newName) => {
    this.setState(prevState => ({
      items: prevState.items.map(item =>
        item.id === id ? { ...item, name: newName } : item
      )
    }));
  };

  render() {
    console.log('ItemList component rendered');
    return (
      <div className="container">
        <h1 className="mt-4">ItemList Example</h1>
        <ul className="list-group">
          {this.state.items.map(item => (
            <Item key={item.id} id={item.id} name={item.name} />
          ))}
        </ul>
        <button
          className="btn btn-primary mt-3"
          onClick={() => this.changeItemName(2, 'Updated Item 2')}
        >
          Update Item 2
        </button>
      </div>
    );
  }
}

export default ItemList;
