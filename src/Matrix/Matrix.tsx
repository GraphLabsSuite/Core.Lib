import {Component, ReactNode} from 'react';
import * as React from 'react';
import {MatrixRow} from './MatrixRow';

export interface IMatrix {
    rows: number;
    columns: number;
    initial?: number[][];
    defaultValues?: number[][];
    handler?: (values: number[][]) => void;
    readonly: boolean;
}

export class Matrix extends Component<IMatrix> {

    values: number[][] = new Array(this.props.rows)
        .fill(new Array(this.props.columns).fill(0));

    componentDidMount() {
        this.values = this.values || this.props.initial;
        if (this.props.handler) {
            this.props.handler(this.values);
        }
    }

    get(elem: number, column: number, row: number): void {
        const res = [...this.values[row]];
        res[column] = elem;
        this.values[row] = res;
        if (this.props.handler) {
            this.props.handler(this.values);
        }
    }

    componentWillReceiveProps(nextProps: IMatrix): void {
        if (nextProps.defaultValues !== this.props.defaultValues) {
            if (nextProps.defaultValues) {
                this.values = nextProps.defaultValues;
            }
        }
    }

    render(): ReactNode {
        return (
            <div style={{display: 'block', marginLeft: 'auto', marginRight: 'auto'}}>
                <div>
                    {new Array(this.props.rows).fill(0).map((e, i) => {
                        return (
                            <div className="container" key={i}>
                                <MatrixRow length={this.props.columns} get={(el, c) => this.get(el, c, i)}
                                           readonly={this.props.readonly} defaultValues={this.values[i]}/>
                            </div>);
                    })}
                </div>
            </div>);
    }
}
