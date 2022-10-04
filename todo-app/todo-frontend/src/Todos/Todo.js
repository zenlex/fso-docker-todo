export default function Todo ({completeTodo, deleteTodo, todo}){
	const {text, done} = todo;
	const onClickDelete = (todo) => () => {
		deleteTodo(todo)
	}

	const onClickComplete = (todo) => () => {
		completeTodo(todo)
	}
	const doneInfo = (
		<>
		<span>This todo is done</span>
		</>
	)

	const notDoneInfo = (
		<>
		<span>
			This todo is not done
		</span>
		<span>
			<button onClick={onClickDelete(todo)}> Delete </button>
			<button onClick={onClickComplete(todo)}> Set as done </button>
		</span>
		</>
	)

	return(
		<div style={{ display: 'flex', justifyContent: 'space-between', maxWidth: '70%', margin: 'auto' }}>
		<span>
			{text} 
		</span>
		{done ? doneInfo : notDoneInfo}
		</div>
	)
}
