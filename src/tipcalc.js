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
                <div style={styles.container}>
                    <span style={styles.output}>{tip}</span>
                    <span style={styles.output}>{total}</span>

                    <label for="bill-amount">Bill</label>
                    <input 
                        style={styles.input}
                        id="bill-amount"
                        type="text"
                        value={this.state.bill}
                        onChange={(e) => {
                            this.setState({ bill: e.target.value })
                        }}
                    />

                    <label for="input-tip-percent">Tip %</label>
                    <input
                        style={styles.input}
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

const fontSize = 24
const padding = 0.5

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column'
    },
    input: {
        padding: `${padding}em`,
        fontSize: `${fontSize}px`
    },
    output: {
        padding: `${padding}em`,
        fontSize: `${fontSize * 1.5}px`,
        fontWeight: 'bold'
    }
}
