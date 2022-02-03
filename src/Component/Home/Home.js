import React from 'react';
import './home.css';
import List from '../List/List';
import {Search} from '../Search/Search';
import Welcome from '../Welcome/Welcome';

export class Home extends React.Component{
    constructor(state){
        super(state);
        this.state={
            value: [],
            loading: true,
            offset: 0,
            orgtable: [],
            perPage: 10,
            
        };
        this.showList = this.showList.bind(this);
        this.getData = this.getData.bind(this);
    }
    getData(data){
        let a = data;
        
        this.setState({
            value: a,
            loading: false,
            orgtable: a   
        });
    }
    
    async showList(){
        
        
        let url = "https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=ckXojvdAKrOgpq5hwMdTjaagG9S21eNbQHMdAjWX";
        let response = await fetch(url);
        let data = await response.json();
        let slice1 = data.near_earth_objects.slice(this.state.offset, this.state.offset + this.state.perPage);
        this.setState({
            pageCount: Math.ceil(data.length / this.state.perPage),
            loading: false,
            value: data.near_earth_objects,
            orgtable: slice1 
        });
        
    }
    componentDidMount(){
        if(this.state.value.length === 0){
            console.log("compo");
            this.showList();
        }
        
    }
    
    render(){
        
            return(
                <div className="home-container">
                    <Search getData={this.getData}/>
                    
                    {this.state.value.length > 0 ? <List value={this.state.orgtable}/> : <Welcome/>}
                    
                </div>
            );
        
    }
}