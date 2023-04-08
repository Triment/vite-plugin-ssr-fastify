import { useEffect } from 'react'
import { useRecoilValue } from 'recoil'
import { user } from './atoms/user'

export const RecoilObserver = ({node, onChange}: { node: typeof user, onChange: (...arg0: unknown[])=>void}) => {
  const value = useRecoilValue(node)
  useEffect(() => onChange(value), [onChange, value])
  return null
}