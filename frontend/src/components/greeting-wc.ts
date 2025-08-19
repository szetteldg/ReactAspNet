import r2wc from '@r2wc/react-to-web-component'
import Greeting from './Greeting'

const GreetingWC = r2wc(Greeting, {
  props: {
    name: 'string',
    sayHelloFunc: 'function',
  },
})

if (!customElements.get('greeting-wc')) {
  customElements.define('greeting-wc', GreetingWC)
}

