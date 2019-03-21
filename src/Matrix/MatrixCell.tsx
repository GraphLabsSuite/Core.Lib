import { Component, ReactNode } from 'react';
import * as React from 'react';

interface State {
  value: number;
}

export interface IMatrixCell {
  get: (e: number) => void;
}

export class MatrixCell extends Component<IMatrixCell, State> {

  constructor(props: IMatrixCell) {
    super(props);
    this.state = {
      value: 0,
    };
    this.handler = this.handler.bind(this);
  }

  handler() {
    this.setState(
        {
            value: this.state.value ? 0 : 1,
        },
        () => {
          this.props.get(this.state.value);
        });
  }
  render(): ReactNode {
    return (
        <div style={{ border: '1px double black', background: 'white', padding: '5px' }} onClick={this.handler}>
          {this.state.value}
        </div>);
  }
}
