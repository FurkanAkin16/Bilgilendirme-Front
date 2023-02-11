import React from 'react'
import { Select } from 'semantic-ui-react'

const countryOptions = [
  { key: 'af', value: 'af', text: 'Antakya' },
  { key: 'ax', value: 'ax', text: 'Adana' },
  { key: 'al', value: 'al', text: 'Adıyaman' },
  { key: 'dz', value: 'dz', text: 'Kahramanmaraş' },
  { key: 'as', value: 'as', text: 'Hatay' },
  { key: 'ad', value: 'ad', text: 'Elbistan' },
  { key: 'ao', value: 'ao', text: 'Malatya' },
  { key: 'ai', value: 'ai', text: 'Kilis' },
  { key: 'ag', value: 'ag', text: 'Şanlıurfa' },

]

const SelectExample = () => (
  <Select placeholder='Şehirler' options={countryOptions} />
)

export default SelectExample