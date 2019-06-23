import React, { Component } from 'react';
import Chart from './Chart';

class App extends Component {
    constructor(){
        super();
        this.state = {
            first_name:this.first_name,
            email:this.email,
            chartData:{}
        }
    }

    componentWillMount(){
        this.getChartData();
    }

    getChartData(){
        // Ajax calls here
        this.setState({
            chartData:{
                labels: [this.props.first_name],
                datasets:[
                    {
                        label:'Count',
                        data:[
                            this.props.email
                        ],
                        backgroundColor:[
                            'rgba(255, 99, 132, 0.6)',
                        ]
                    }
                ]
            }
        });
    }

    render() {
        return (
            <div className="App">
                <div className="App-header">
                </div>
                <Chart chartData={this.state.first_name} location="Massachusetts" legendPosition="bottom"/>
                <Chart chartData={this.state.email} location="Massachusetts" legendPosition="bottom"/>
                <Chart chartData={this.state.chartData} location="Massachusetts" legendPosition="bottom"/>
            </div>
        );
    }
}

export default App;