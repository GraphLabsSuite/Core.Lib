import {Component, ReactNode, ChangeEvent } from 'react';
import * as React from 'react';



interface State {
    value: number;
}

export interface IMatrixCell {
    get: (e: number) => void;
    readonly: boolean;
    defaultValue: number;
    matrixFilling?: boolean;
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

   handlerForFilling(val: React.ChangeEvent<HTMLInputElement>){

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

        }
        else {

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
        if (this.props.matrixFilling == true)
        {
            return (
                <div>
                    <input type="text" id={'cell'} name={'myCell'} size={1} style={{border: '1px double black',
                        background: 'white', padding: '5px', textAlign: 'center'}} onChange={this.handlerForFilling}/>
                </div>);

        }
        else {
          return (
               <div  style={{border: '1px double black', background: 'white', padding: '5px'}} onClick={this.handler}>
                    {this.state.value}
                </div>);
       }
    }
}

