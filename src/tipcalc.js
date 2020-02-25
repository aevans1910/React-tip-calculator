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
            const bill = parseFloat(this.state.bill)
            const tipPercent = parseInt(this.state.tipPercent)
            const tip = bill * tipPercent / 100
            const total = bill + tip

            return (
                <div>
                    <h1>{bill}</h1>
                    <h1>{tip}</h1>

                    <label for="bill-amount">Bill</label>
                    <input 
                        id="bill-amount"
                        type="text"
                        value={this.state.bill}
                        onChange={(e) => {
                            this.setState({ bill: e.target.value })
                        }}
                    />

                    <label for="input-tip-percent">Tip %</label>
                    <input
                        id="input-tip-percent"
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
