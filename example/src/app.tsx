import * as React from 'react'
import { shareViaTwitter } from 'jarchi'
type n = React.HTMLProps<HTMLButtonElement>
export default function App() {
  return (
    <div>
      <a
        {...shareViaTwitter({
          text: 'Halo',
          url: 'x.com',
          rel: 'nofollow noreferrer',
          target: '_blank',
          referrerPolicy: 'strict-origin-when-cross-origin',
          // hashtags: ['x', 'hello'],
        })}
      >
        share with twitter
      </a>
    </div>
  )
}
