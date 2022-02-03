    import React from 'react';
    import './list.css';
    import { useNavigate } from 'react-router-dom';
    


    export default function List(props){
        
        let navigate = useNavigate();
        async function handleClick(id){
            let url = `https://api.nasa.gov/neo/rest/v1/neo/${id}?api_key=ckXojvdAKrOgpq5hwMdTjaagG9S21eNbQHMdAjWX`;
            let res =  await fetch(url);
            let data = await res.json();
            
            navigate('/looks', {
                state: {value:data}
            });
        }
        
        
            let val = props.value;
            return(
                <div className="list-container">
                <h2>List of Asteroids</h2>
                <table>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Absolute Magnitude</th>
                    </tr>
                
                    {val?val.map(function(x){
                            return (<tr onClick={()=>handleClick(x.id)}>
                                <td id={x.id}>{x.id}</td>
                                <td id={x.id}>{x.name}</td>
                                <td id={x.id}>{x.absolute_magnitude_h}</td>
                                </tr>
                            )

                        }): <div>loading</div>}
                </table>     
                </div>
            );
        
    };

