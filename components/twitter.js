/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx, IconButton, Link } from 'theme-ui'

const Twitter = props => {
  return (
    <Link
      sx={{ color: 'text' }}
      {...props}
      href="https://twitter.com/jhidalgoreina"
    >
      <a>
        <IconButton
          sx={{
            cursor: 'pointer',
          }}
        >
          <svg
            width="16"
            height="16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.969 3.062a6.53 6.53 0 0 1-1.882.514 3.279 3.279 0 0 0 1.441-1.807 6.58 6.58 0 0 1-2.08.792 3.276 3.276 0 0 0-2.392-1.032A3.272 3.272 0 0 0 7.864 5.54a9.312 9.312 0 0 1-6.753-3.413 3.262 3.262 0 0 0 1.014 4.361A3.271 3.271 0 0 1 .641 6.08v.041A3.271 3.271 0 0 0 3.27 9.324a3.288 3.288 0 0 1-1.48.056 3.278 3.278 0 0 0 3.06 2.268A6.586 6.586 0 0 1 0 13.001a9.29 9.29 0 0 0 5.023 1.468c6.026 0 9.322-4.978 9.322-9.295 0-.142-.004-.282-.01-.423a6.635 6.635 0 0 0 1.634-1.69Z"
              fill="currentColor"
            />
          </svg>
        </IconButton>
        @jhidalgoreina
      </a>
    </Link>
  )
}

export default Twitter
