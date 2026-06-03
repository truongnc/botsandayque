'use client'
import { useEffect } from 'react'

export default function LogRocketInit() {
  useEffect(() => {
    import('logrocket').then(({ default: LogRocket }) => {
      LogRocket.init('sandayque/sandayque')
    })
  }, [])
  return null
}
