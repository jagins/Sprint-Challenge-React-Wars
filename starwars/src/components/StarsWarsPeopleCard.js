import React from 'react';

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
        <div className="people-card">
            <h1>{name}</h1>
            <p>Gender: {gender}</p>
        </div>
    );
}

export default StarwarsPeopleCard;