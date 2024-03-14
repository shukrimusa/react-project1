import React from 'react';



const List = ({people}) => {
    return (
        <>
        {people.map((person) => {
            const {id, name, age} = person;

            return (
                <article key={id}>
                    <img src="" alt={name} />
                    <div>
                        <h4>{name}</h4>
                        <p>{age} years</p>
                    </div>
                </article>
            )
        })}
        </>
    )
}


export default List;