import { useRouteError } from 'react-router-dom'

export function ErrorPage() {
  const error = useRouteError()
  console.error(error)

  let errorMessage: string

  if (error instanceof Error) {
    errorMessage = error.message
  } else if (typeof error === 'object' && error !== null && 'statusText' in error) {
    errorMessage = (error as { statusText: string }).statusText
  } else {
    errorMessage = 'An unknown error occurred'
  }

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{errorMessage}</i>
      </p>
    </div>
  )
}
