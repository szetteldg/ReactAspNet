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
		<div >
			<div className="greeting-box">
				{message}
			</div>
			
			<input value={messageText} onChange={e => setMessageText(e.target.value)} />
			<div className="card">
				<button onClick={handleClick}>Say hello</button>
			</div>
		</div>
	)
}


