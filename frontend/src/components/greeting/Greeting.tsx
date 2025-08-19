import { useState } from 'react'

import './Greeting.css'

export type GreetingProps = {
  name?: string
  sayHelloFunc: (name: string) => void
}

export default function Greeting({ name, sayHelloFunc }: GreetingProps) {

	const [messageText, setMessageText] = useState<string>(name ?? '');

	const message = `Hello ${messageText}`;

	const handleClick = () => {		
		sayHelloFunc(message);
	}

	return (
		<div className="greeting-box" >
			<div>React UI Component</div>
			<div >
				{message}
			</div>
			
			<input value={messageText} onChange={e => setMessageText(e.target.value)} />
			<div className="card">
				<button onClick={handleClick}>Fire Event</button>
			</div>
		</div>
	)
}


