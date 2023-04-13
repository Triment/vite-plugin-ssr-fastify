import { AtomEffect } from "recoil";

/**
 * 
 * @param key 本地key
 * @returns 副作用函数
 */

export function localStorageEffect<T>(key:string): AtomEffect<T> {
  return ({ setSelf, onSet })=>{
    const savedValue = typeof window === 'undefined' ? '' : localStorage.getItem(key)
    if (savedValue) {
      setSelf(JSON.parse(savedValue));
    }
    onSet((newValue, _, isReset) => {
      isReset
        ? localStorage.removeItem(key)
        : localStorage.setItem(key, JSON.stringify(newValue));
    })
  }
}