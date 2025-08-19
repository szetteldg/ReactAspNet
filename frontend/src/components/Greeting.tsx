import './Greeting.css'

export type GreetingProps = {
  name?: string
  sayHelloFunc: (name: string) => void
}

export default function Greeting({ name, sayHelloFunc }: GreetingProps) {
	const message = `Gretting Comp ${name ? `, ${name}` : ''}!`

	const handleClick = () => {		
		sayHelloFunc(message);
	}

	return (
		<div >
			<div className="greeting-box">
				{message}
			</div>
			<div className="card">
				<button onClick={handleClick}>Say hello</button>
			</div>
		</div>
	)
}


