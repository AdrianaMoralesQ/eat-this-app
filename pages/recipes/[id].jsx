/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useRouter } from 'next/router'
import Link from 'next/link'

const Recipe = () => {
  const router = useRouter()
  const { id }= router.query

  return (
    <div sx={{variant: 'containers.page'}}>
      <h1>Recipe: {id} </h1>
    </div>
  )
}

export default Recipe

export async function getServerSideProps({params, req, res}) {
  const response = await fetch(`http://localhost:3000/api/recipe/${params.id}`)

  if (!response.ok) {
    res.writeHead(302, { Location: '/recipes' })
    res.end()
    return {props: {}}
  }

  const {data} = await response.json()
  
  
  if (data) {
    return {
      props: {note: data}
    }
  }
}
