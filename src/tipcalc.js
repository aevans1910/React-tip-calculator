import React, { Component } from 'react'

class TipCalc extends Component {
    constructor(props) {
        super(props) 

        this.state = {
            bill: 36,
            tipPercent: 10,
        }

        }

        render() {
            return (
                <div>
                    <h1>{this.state.bill}</h1>
                    <h1>{this.state.tipPercent}</h1>
                    <input 
                        type="text"
                        value={this.state.bill}
                        onChange={(e) => {
                            this.setState({ bill: e.target.value })
                        }}
                    />

                    <input
                        type="number"
                        value={this.state.tipPercent}
                        onChange={(e) => {
                            this.setState({ tipPercent: e.target.value })
                        }}
                    />
                </div>
            )
        }
    }

export default TipCalc
