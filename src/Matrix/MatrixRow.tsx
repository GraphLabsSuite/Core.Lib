import { Component, ReactNode } from 'react';
import * as React from 'react';
import { MatrixCell } from './MatrixCell';

export interface IMatrixRow {
  length: number;
  get: (elem: number, index: number) => void;
  readonly: boolean;
  defaultValues: number[];
  matrixFilling?: boolean;
  isRowFirst?: boolean;
  rowNum?: number;
  edgeNaming?:boolean;
}

export class MatrixRow extends Component<IMatrixRow> {

  get(elem: number, index: number) {
    this.props.get(elem, index);
  }


  render(): ReactNode {
      if (this.props.edgeNaming == true) {
          if (this.props.isRowFirst == true) {
              return new Array(this.props.length).fill(0).map((e, i) => {
                  if ( i == 0) {
                      return (
                          <div key={i} style={{float: 'left', padding: '2px', cursor: 'pointer'}}>
                              <p style={{marginBottom: '0px', textAlign: 'center', fontFamily: 'Times'}}>{String.fromCharCode(i+65).toLowerCase()}</p>
                              <MatrixCell
                                  get={(el: number) => this.get(el, i)}
                                  readonly={this.props.readonly}
                                  defaultValue={this.props.defaultValues[i]}
                                  matrixFilling={this.props.matrixFilling}
                                  isCellFirst={true}
                                  rowNum={this.props.rowNum}
                              />
                          </div>);
                  }else {
                      return (
                          <div key={i} style={{float: 'left', padding: '2px', cursor: 'pointer'}}>
                              <p style={{marginBottom: '0px', textAlign: 'center', fontFamily: 'Times'}}>{String.fromCharCode(i+65).toLowerCase()}</p>
                              <MatrixCell
                                  get={(el: number) => this.get(el, i)}
                                  readonly={this.props.readonly}
                                  defaultValue={this.props.defaultValues[i]}
                                  matrixFilling={this.props.matrixFilling}
                              />
                          </div>);
                  }

              });
          } else {
              return new Array(this.props.length).fill(0).map((e, i) => {
                  if (i == 0) {
                      return (
                          <div key={i} style={{float: 'left', padding: '2px', cursor: 'pointer'}}>
                              <MatrixCell
                                  get={(el: number) => this.get(el, i)}
                                  readonly={this.props.readonly}
                                  defaultValue={this.props.defaultValues[i]}
                                  matrixFilling={this.props.matrixFilling}
                                  isCellFirst={true}
                                  rowNum={this.props.rowNum}
                              />
                          </div>);
                  } else {
                      return (
                          <div key={i} style={{float: 'left', padding: '2px', cursor: 'pointer'}}>
                              <MatrixCell
                                  get={(el: number) => this.get(el, i)}
                                  readonly={this.props.readonly}
                                  defaultValue={this.props.defaultValues[i]}
                                  matrixFilling={this.props.matrixFilling}
                              />
                          </div>);
                  }
              });
          }
      } else {
          if (this.props.isRowFirst == true) {
              return new Array(this.props.length).fill(0).map((e, i) => {
                  if ( i == 0) {
                      return (
                          <div key={i} style={{float: 'left', padding: '2px', cursor: 'pointer'}}>
                              <p style={{marginBottom: '0px', textAlign: 'center', fontFamily: 'Times'}}>{i+1}</p>
                              <MatrixCell
                                  get={(el: number) => this.get(el, i)}
                                  readonly={this.props.readonly}
                                  defaultValue={this.props.defaultValues[i]}
                                  matrixFilling={this.props.matrixFilling}
                                  isCellFirst={true}
                                  rowNum={this.props.rowNum}
                              />
                          </div>);
                  }else {
                      return (
                          <div key={i} style={{float: 'left', padding: '2px', cursor: 'pointer'}}>
                              <p style={{marginBottom: '0px', textAlign: 'center', fontFamily: 'Times'}}>{i+1}</p>
                              <MatrixCell
                                  get={(el: number) => this.get(el, i)}
                                  readonly={this.props.readonly}
                                  defaultValue={this.props.defaultValues[i]}
                                  matrixFilling={this.props.matrixFilling}
                              />
                          </div>);
                  }

              });
          } else {
              return new Array(this.props.length).fill(0).map((e, i) => {
                  if (i == 0) {
                      return (
                          <div key={i} style={{float: 'left', padding: '2px', cursor: 'pointer'}}>
                              <MatrixCell
                                  get={(el: number) => this.get(el, i)}
                                  readonly={this.props.readonly}
                                  defaultValue={this.props.defaultValues[i]}
                                  matrixFilling={this.props.matrixFilling}
                                  isCellFirst={true}
                                  rowNum={this.props.rowNum}
                              />
                          </div>);
                  } else {
                      return (
                          <div key={i} style={{float: 'left', padding: '2px', cursor: 'pointer'}}>
                              <MatrixCell
                                  get={(el: number) => this.get(el, i)}
                                  readonly={this.props.readonly}
                                  defaultValue={this.props.defaultValues[i]}
                                  matrixFilling={this.props.matrixFilling}
                              />
                          </div>);
                  }
              });
          }
      }
  }
}
