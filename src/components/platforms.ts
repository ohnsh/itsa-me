import type { SvgComponent } from 'astro/types'
import Github from '../assets/icons/pro-github.svg'
import Insta from '../assets/icons/sl-instagram.svg'
import Linkedin from '../assets/icons/sl-linkedin.svg'
import Email from '../assets/icons/sl-send-email.svg'
import Youtube from '../assets/icons/sl-youtube.svg'

interface Platform {
  Icon: SvgComponent,
  link: (handle: string) => string,
  display: (handle: string) => string,
}

export default {
  github: {
    Icon: Github,
    link: (handle) => `https://github.com/${handle}`,
    display: (handle) => `@${handle}`,
  },
  email: {
    Icon: Email,
    link: (handle) => `mailto:${handle}`,
    display: (handle) => `${handle}`,
  },
  instagram: {
    Icon: Insta,
    link: (handle) => `https://instagram.com/${handle}`,
    display: (handle) => `@${handle}`,
  },
  youtube: {
    Icon: Youtube,
    link: (handle) => `https://youtube.com/@${handle}`,
    display: (handle) => `@${handle}`,
  },
  linkedin: {
    Icon: Linkedin,
    link: (handle) => `https://linkedin.com/in/${handle}`,
    display: (handle) => `${handle}`,
  },
} satisfies Record<string, Platform>
// satisfies allows the more specific Record<keys, Platform> to be inferred.
// https://facebook.com/ohn.sh0
