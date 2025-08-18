import r2wc from '@r2wc/react-to-web-component'
import Greeting from './components/Greeting'

const GreetingWC = r2wc(Greeting, {
  props: {
    name: 'string',
  },
})

if (!customElements.get('greeting-wc')) {
  customElements.define('greeting-wc', GreetingWC)
}


