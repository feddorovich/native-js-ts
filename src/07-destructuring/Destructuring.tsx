import React, {useState} from 'react';

type PropsType = {
    title: string
    man: ManType
    food: Array<string>
    car: {model: string}
}

export type ManType = {
    name: string
    age: number
    lessons: Array<{title: string}>
    address: {
        street: {
            title: string
        }
    }
}

function useHandMadeState (m: string) {
    return [m, function(){}]
}

export const ManComponent: React.FC<PropsType>= ({title, man, ...props}) => {
// ...props - это рест оператор. Он доьавляет все остальные пропсы, которые не были объявлены

/*    const {title, man} = props    */

    const [message, setMessage] = useHandMadeState('hello')

    return (
        <div>
            <h1>{title}</h1>
            <hr/>
            <div>{man.name}</div>
            <div>{props.car.model}</div>
        </div>
    );
};