import r2wc from '@r2wc/react-to-web-component'
import CityPicker from './CityPicker'

const CityPickerWC = r2wc(CityPicker, {
  props: {
    title: 'string',
    cityChanged: 'function',
  },
})

if (!customElements.get('city-picker')) {
  customElements.define('city-picker', CityPickerWC)
}

