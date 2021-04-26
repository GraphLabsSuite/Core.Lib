import {Component, ReactNode, ChangeEvent} from 'react';
import * as React from 'react';


interface State {
    value: number;
}

export interface IMatrixCell {
    get: (e: number) => void;
    readonly: boolean;
    defaultValue: number;
    matrixFilling?: boolean;
    isCellFirst?: boolean;
    rowNum?: number;
}

export class MatrixCell extends Component<IMatrixCell, State> {


    constructor(props: IMatrixCell) {
        super(props);
        this.state = {
            value: 0
        };
        this.handler = this.handler.bind(this);
        this.handlerForFilling = this.handlerForFilling.bind(this);
    }

    handlerForFilling(val: React.ChangeEvent<HTMLInputElement>) {

        if (this.props.readonly == true) {

        } else {
            this.setState(
                {
                    value: +val.target.value,
                },

                () => {
                    this.props.get(this.state.value);
                });
        }
    }

    handler() {
        if (this.props.readonly == true) {

        } else {

            this.setState(
                {
                    value: this.state.value ? 0 : 1,
                },
                () => {
                    this.props.get(this.state.value);
                });
        }
    }

    componentDidMount(): void {
        this.setState(
            {
                value: this.props.defaultValue,
            }
        );
    }

    componentWillReceiveProps(nextProps: IMatrixCell): void {
        if (nextProps.defaultValue !== this.props.defaultValue) {
            this.setState(
                {
                    value: nextProps.defaultValue,
                },
                () => {
                    this.props.get(nextProps.defaultValue);
                }
            );
        }
    }


    render(): ReactNode {

        return (
            <div>
                {
                    this.props.isCellFirst &&
                    <span style={{padding: '3px', fontFamily: 'Times'}}>
                        {this.props.rowNum}
                        </span>
                }
                {
                    this.props.matrixFilling ?
                        <input type="text" id={'cell'} name={'myCell'} size={2} style={{
                            border: '1px double black',
                            background: 'white', padding: '5px', textAlign: 'center',
                            fontFamily: 'Times'
                        }} onChange={this.handlerForFilling}/> :
                        <span>
                        <input type="text" id={'cell'} name={'myCell'} size={2} style={{
                            border: '1px double black',
                            background: 'white', padding: '5px', textAlign: 'center',
                            fontFamily: 'Times', cursor: 'pointer'
                        }} onClick={this.handler} value={this.state.value} readOnly/>
                    </span>
                }
            </div>);
    }
}

