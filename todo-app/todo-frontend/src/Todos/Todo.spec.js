import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import Todo from './Todo'

let testTodo;

beforeEach(() => {
	testTodo = {
		text: 'test text',
		done: false
	}
})
test('Todo component displays text', async () => {
	render (<Todo todo={testTodo}/>)
	expect(await screen.findByText('test text')).toBeVisible();
})

test('Todo displays proper status for not complete', async () => {
	render (<Todo todo={testTodo}/>)
	expect(await screen.findByText('This todo is not done')).toBeVisible();
})

test('Todo displays proper status for complete', async () => {
	testTodo.done = true
	render (<Todo todo={testTodo}/>)
	expect(await screen.findByText('This todo is done')).toBeVisible();
})
