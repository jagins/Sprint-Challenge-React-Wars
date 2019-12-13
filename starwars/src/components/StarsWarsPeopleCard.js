import React from 'react';
import {StyledDiv} from '../styles/style'

function StarwarsPeopleCard(props)
{
    // if(props.gender === "n/a")
    // {
    //     props.gender = "Unknown";
    // }
    let {gender, name} = props;
    if(gender === 'n/a')
    {
        gender = 'Unknown';
    }
    return(
        <StyledDiv className="people-card">
            <h1>{name}</h1>
            <p>Gender: {gender}</p>
        </StyledDiv>
    );
}

export default StarwarsPeopleCard;