import React, {Component} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';

class Chart extends Component{
    constructor(props){
        super(props);
        this.state = {
            first_name:props.first_name,
            email:props.email,
            role:props.role,
            chartData:props.chartData
        }
    }

    static defaultProps = {
        first_name:true,
        email: true,
        role:'admin'

    }

    render(){
        return (
            <div className="chart">
                <Bar
                    data={this.state.chartData}
                    options={{
                        title:{
                            display:this.props.first_name,
                            text:'Count '+this.props.role,
                            fontSize:25
                        },
                        legend:{
                            display:this.props.email,
                            position:this.props.role
                        }
                    }}
                />

                <Line
                    data={this.state.chartData}
                    options={{
                        title:{
                            display:this.props.first_name,
                            text:'Count '+this.props.role,
                            fontSize:25
                        },
                        legend:{
                            display:this.props.email,
                            position:this.props.role
                        }
                    }}
                />

                <Pie
                    data={this.state.chartData}
                    options={{
                        title:{
                            display:this.props.first_name,
                            text:'Count '+this.props.role,
                            fontSize:25
                        },
                        legend:{
                            display:this.props.email,
                            position:this.props.role
                        }
                    }}
                />
            </div>
        )
    }
}

export default Chart;