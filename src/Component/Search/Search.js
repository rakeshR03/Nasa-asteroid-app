import React from 'react';
import './search.css';

export class Search extends React.Component{
    constructor(state){
        super(state);
        this.state={
            startDate: "",
            endDate: "",
            value: []
        }
        this.getStart = this.getStart.bind(this);
        this.getEnd = this.getEnd.bind(this);
        this.getResult = this.getResult.bind(this);
    }
    getStart(e){
        this.setState({
            startDate: e.target.value
        });
    }
    getEnd(e){
        this.setState({
            endDate: e.target.value
        });
    }
    async getResult(event){
        event.preventDefault();
        let url = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${this.state.startDate}&end_date=${this.state.startDate}&api_key=ckXojvdAKrOgpq5hwMdTjaagG9S21eNbQHMdAjWX`;
        let response = await fetch(url);
        let data = await response.json();
        this.props.getData(data.near_earth_objects[this.state.startDate]);
        
    }
    render(){
        return(
            <div className="search-container">
                <h1>Search Asteroid based on their closest approach date to Earth</h1>
                <form onSubmit={this.getResult}>
                    <input type="date" value={this.state.startDate} onChange={this.getStart} required/>
                    <input type="date" value={this.state.endDate} onChange={this.getEnd} required/>
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}