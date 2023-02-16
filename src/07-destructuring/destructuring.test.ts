import React from "react";
import {ManType} from "./Destructuring";

let props: ManType;

beforeEach(()=> {
    props = {
        name: "Sergey",
        age: 27,
        lessons: [{title:'1'}, {title:"2"}],
        address: {
            street: {
                title: 'Sovetskaya street'
            }
        }
    }
})

test('', ()=> {

/*  const age = props.age
    const lessons = props.lessons */
    const {age, lessons} = props
/*  const title = props.address.street.title */
    const {title} = props.address.street

/*  const a = props.age
    const l = props.lessons */
    const {age: a, lessons: l} = props


    expect(age).toBe(27)
    expect(lessons.length).toBe(2)

    expect(a).toBe(27)
    expect(l.length).toBe(2)
    expect(title).toBe('Sovetskaya street')
})

test('', ()=> {

})