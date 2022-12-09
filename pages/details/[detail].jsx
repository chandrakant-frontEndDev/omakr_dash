import { useRouter } from 'next/router';
import React from 'react'

export default function demo() {
    const route = useRouter()
    console.log("demo", route );
  return (
    <div>[detail]</div>
  )
}
