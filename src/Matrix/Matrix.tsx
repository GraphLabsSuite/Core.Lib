import {Component, ReactNode} from 'react';
import * as React from 'react';
import {MatrixRow} from './MatrixRow';

export interface IMatrix {
    rows: number;
    columns: number;
    defaultValues?: number[][];
    handler?: (values: number[][]) => void;
    readonly: boolean;
}

interface IState {
    values: number[][];
}

export class Matrix extends Component<IMatrix, IState> {

    public state = {
        values: new Array(this.props.rows)
            .fill(new Array(this.props.columns).fill(0))
    };

    componentDidMount() {
        if(this.props.defaultValues){
            this.setState({
                values: this.props.defaultValues,
            });
        }
        if (this.props.handler) {
            this.props.handler(this.state.values);
        }
    }

    get(elem: number, column: number, row: number): void {
        const res = [...this.state.values[row]];
        res[column] = elem;
        this.setState({
            values: [
                ...this.state.values.slice(0, row),
                res,
                ...this.state.values.slice(row + 1, this.state.values.length),
            ],
        });
        if (this.props.handler) {
            this.props.handler(this.state.values);
        }
    }

    componentWillReceiveProps(nextProps: IMatrix): void {
        if (nextProps.defaultValues !== this.props.defaultValues) {
            if (nextProps.defaultValues) {
                this.setState({
                    values: nextProps.defaultValues,
                });
            }
        }
    }

    render(): ReactNode {
        return (
            <div style={{display: 'block', marginLeft: 'auto', marginRight: 'auto'}}>
                <div>
                    {this.state.values.map((e, i) => {
                        return (
                            <div className="container" key={i}>
                                <MatrixRow
                                    length={this.props.columns}
                                    get={(el, c) => this.get(el, c, i)}
                                    readonly={this.props.readonly}
                                    defaultValues={this.state.values[i]}
                                />
                            </div>);
                    })}
                </div>
            </div>);
    }
}
