import React from "react";
import {StudentType} from "../02/02";
import {addSkill} from "./03";

let student: StudentType;

beforeEach(() => {
    student = {
        id: 1,
        name: 'Sergey',
        age: 32,
        isActive: false,
        address: {
            streetTitle: 'Surganova 2',
            city: {
                title: 'Minsk',
                countryTitle: 'Belarus'
            }
        },
        technologies: [
            {
                id: 1,
                title: 'HTML'
            },
            {
                id: 2,
                title: 'CSS'
            },
            {
                id: 3,
                title: 'React'
            }
        ]
    }
})

test('new skill to student', () => {
    addSkill(student, 'JS')

})