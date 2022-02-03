import React from 'react';
import './look.css';
import { useLocation } from 'react-router-dom';
export default function Look(props){
        const location = useLocation();
        return(
            <div className="look-container">
                <h1>Details</h1>
                <div className="detail-box">
                    <label>Asteroid Id:</label>
                    <p>{location.state.value.id}</p>
                </div>
                <div className="detail-box">
                    <label>Asteroid Name:</label>
                    <p>{location.state.value.name}</p>
                </div>
                <div className="detail-box">
                    <label>Last observed:</label>
                    <p>{location.state.value.orbital_data.last_observation_date}</p>
                </div>
                <div className="detail-box">
                    <label>Orbit Description:</label>
                    <p>{location.state.value.orbital_data.orbit_class.orbit_class_description}</p>
                </div>
                <div className="detail-box">
                    <label>Nasa JPL url:</label>
                    <p>{location.state.value.nasa_jpl_url}</p>
                </div>
            </div>
        );
    
}