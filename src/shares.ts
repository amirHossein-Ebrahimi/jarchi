type HTMLAttributeReferrerPolicy =
  | ''
  | 'no-referrer'
  | 'no-referrer-when-downgrade'
  | 'origin'
  | 'origin-when-cross-origin'
  | 'same-origin'
  | 'strict-origin'
  | 'strict-origin-when-cross-origin'
  | 'unsafe-url'

type HTMLAttributeAnchorTarget =
  | '_self'
  | '_blank'
  | '_parent'
  | '_top'
  | (string & {})

interface AnchorHTMLAttributes {
  download?: any
  href?: string
  hrefLang?: string
  media?: string
  ping?: string
  rel?: string
  target?: HTMLAttributeAnchorTarget
  type?: string
  referrerPolicy?: HTMLAttributeReferrerPolicy
}

// download?: any;
// href?: string | undefined;
// hrefLang?: string | undefined;
// media?: string | undefined;
// ping?: string | undefined;
// rel?: string | undefined;
// target?: HTMLAttributeAnchorTarget | undefined;
// type?: string | undefined;

// https://stackoverflow.com/a/20832477/10321531
const TWITTER = 'http://twitter.com'
interface ITwitter {
  text: string
  url?: string
  hashtags?: string[]
}
export const shareViaTwitter = ({
  text,
  url,
  hashtags,
  ...anchorProps
}: ITwitter & AnchorHTMLAttributes) => {
  const urlParams: { text: string; url?: string; hashtags?: string } = { text }
  if (url) urlParams.url = url
  if (hashtags && hashtags.length) urlParams.hashtags = hashtags.join(',')

  const href = `${TWITTER}/share?${new URLSearchParams(urlParams).toString()}`

  return {
    href,
    ...anchorProps,
  }
}
