import React from 'react';

class ClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: props.name,
    };
  }

  render() {
    return (
      <div>
        {this.state.brand}
      </div>
    );
  }
}


export default ClassComponent