import { atom } from 'recoil'

export const user = atom({
  key: 'atom-user',
  default: {
    username: ''
  }
})