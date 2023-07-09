import { useRouter } from 'next/router'
import React from 'react'

const SearchResults = () => {
    const router = useRouter();
  return (
    <div>{router.query.search}</div>
  )
}

export default SearchResults