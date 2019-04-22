import { Component, ReactNode } from 'react';
import * as React from 'react';
import { MatrixCell } from './MatrixCell';

export interface IMatrixRow {
  length: number;
  get: (elem: number, index: number) => void;
  readonly: boolean;
}

export class MatrixRow extends Component<IMatrixRow> {

  get(elem: number, index: number) {
    this.props.get(elem, index);
  }

  render(): ReactNode {
    return new Array(this.props.length).fill(0).map((e, i) => {
      return (
          <div key={i} style={{ float: 'left', padding: '2px', cursor: 'pointer' }}>
            <MatrixCell get={(el: number) => this.get(el, i)} readonly={this.props.readonly}/>
          </div>);
    });
  }
}
