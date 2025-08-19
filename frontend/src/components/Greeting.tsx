export type GreetingProps = {
  name?: string
}

export default function Greeting({ name }: GreetingProps) {
  const message = `Web Component Hello${name ? `, ${name}` : ''}!`
  return (
    <div>{message}</div>
  )
}


