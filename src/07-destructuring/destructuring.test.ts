import React from "react";
import {ManType} from "./Destructuring";

let props: ManType;

beforeEach(()=> {
    props = {
        name: "Sergey",
        age: 27,
        lessons: [{title:'1'}, {title:"2"}, {title:"3"}],
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
    expect(lessons.length).toBe(3)

    expect(a).toBe(27)
    expect(l.length).toBe(3)
    expect(title).toBe('Sovetskaya street')
})

test('', ()=> {

    const l1 = props.lessons[0]
    const l2 = props.lessons[1]

    const [ls1, ...restLessons] = props.lessons

    expect(l1.title).toBe('1')
    expect(l2.title).toBe('2')

    expect(ls1.title).toBe('1')
    expect(restLessons.length).toBe(2)
    expect(restLessons[0].title).toBe('2')
})