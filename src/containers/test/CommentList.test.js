import React from 'react'
import CommentList from "../CommentList"
import {shallow} from "enzyme"

import {findByTestAttr} from "../../test"

const setup = (props={}) => {
    return shallow(<CommentList {...props}/>)
}

test('renders without error', ()=>{
    const wrapper = setup()
    const component = findByTestAttr(wrapper, 'component-comment-list')
    expect(component.length).toBe(1)
})

describe('when given no comments', ()=>{
    const comments=[];
    let wrapper;
    beforeEach(()=>{
        wrapper = setup({comments})
    })
    test('renders without error', ()=>{
        const component = findByTestAttr(wrapper, 'component-comment-list')
        expect(component.length).toBe(1)
    })
    test('displays a message saying no comments', ()=>{
        const error = findByTestAttr(wrapper, 'comment-list-error')
        expect(error.length).toBe(1)
    })
    test('renders no comments', ()=>{
        const foundComments = findByTestAttr(wrapper, 'component-comment-item')
        expect(foundComments.length).toBe(0)
    })
})

describe('when given comments', ()=>{
    const comments= [{
        username: "First",
        text: "No. 1 message",
        _id: "abc"
    }, {
        username: "Second",
        text: "Second Message",
        profileImgUrl: "https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.shareicon.net%2Fdata%2F2016%2F09%2F01%2F822711_user_512x512.png&f=1",
        _id: "bdc"
    }]
    let wrapper;
    beforeEach(()=>{
        wrapper = setup({comments})
    })
    test('does not display a message saying no comments', ()=>{
        const error = findByTestAttr(wrapper, 'comment-list-error')
        expect(error.length).toBe(0)
    })
    test('renders comments', ()=>{
        const foundComments = findByTestAttr(wrapper, 'component-comment-item')
        expect(foundComments.length).toBe(comments.length)
    })
})