import { atom } from 'recoil'
import { localStorageEffect } from '../utils'

export const token = atom({
  key: 'atom-token',
  default: '',
  effects: [localStorageEffect<string>('token')]
})
