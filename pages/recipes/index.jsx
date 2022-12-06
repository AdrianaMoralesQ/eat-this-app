/** @jsx jsx */
import { jsx } from 'theme-ui'
import Link from 'next/link'

export default ({recipes}) => {
  return (
    <div sx={{variant: 'containers.page'}}>
      <h1>My Recipes</h1>

      <div sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap'}}>
        {recipes.map(recipe => (
          <div sx={{width: '33%', p: 2}} key={recipe.id}>
            <Link href="/recipes/[id]" as={`/recipes/${recipe.id}`}>
              <a sx={{textDecoration: 'none', cursor: 'pointer'}}>
                <div sx={{variant: 'containers.card',}}>
                  <strong>{recipe.title}</strong>
                </div>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}


export async function getServerSideProps() {
  const res = await fetch(`http://localhost:3000/api/recipe`)
  const {data} = await res.json()

  return {
    props: {recipes: data}
  }
}
