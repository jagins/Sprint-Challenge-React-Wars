import React, {useEffect, useState} from 'react';
import axios from 'axios';
import StarWarsPeopleCard from './StarsWarsPeopleCard';
import {StyleFlexDiv} from '../styles/style';

export default function StarwarsGrid()
{
    const [friends, setFriends] = useState([]);

    useEffect(() =>
    {
        axios.get(`https://swapi.co/api/people`)
        .then(response =>
        {
            setFriends(response.data.results);
        })
        .catch(err =>
        {
            console.log("OOPS not using the force", err);
        });
    }, []);
    return (
        <div className="container">
            <StyleFlexDiv className='enterFriends'>
                {friends.map(friend =>
                {
                    return<StarWarsPeopleCard 
                        key={friend.created} 
                        name={friend.name}
                        gender={friend.gender}
                        />
                })}
            </StyleFlexDiv>
        </div>
    )
}