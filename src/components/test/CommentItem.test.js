import React from 'react'
import {shallow} from 'enzyme'

import {findByTestAttr} from '../../test'
import CommentItem from '../CommentItem'

const setup = (props={}) => {
    return shallow(<CommentItem {...props} />)
}

test('renders without error', ()=>{
    const wrapper = setup();
    const component = findByTestAttr(wrapper, "component-comment-item")
    expect(component.length).toBe(1)
})

describe('', ()=>{
    const defaultProps = {
        text: "This is a test",
        username: "Whoever"
    }
    let wrapper;
    beforeEach(()=>{
        wrapper = setup(defaultProps)
    })
    test('renders text', ()=>{
        const message = findByTestAttr(wrapper, "comment-text")
        expect(message.text()).toContain(defaultProps.text)
    })
    test('renders a username', ()=>{
        const user = findByTestAttr(wrapper, "comment-username")
        expect(user.text()).toContain(defaultProps.username)
    })
})

describe('when not given any props', ()=>{
    let wrapper;
    beforeEach(()=>{
        wrapper = setup()
    })
    test('renders text', ()=>{
        const message = findByTestAttr(wrapper, "comment-text")
        expect(message.text()).toContain("Filler Text")
    })
    test('renders a username', ()=>{
        const user = findByTestAttr(wrapper, "comment-username")
        expect(user.text()).toContain("Anonymous")
    })
})