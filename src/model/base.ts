export interface Subnav {
  name: string
  popup: SubnavPopup[]
}

export interface SubnavPopup {
  download: boolean
  extension: string
  link: string
  srcLink?: string
  target?: string
  text: string
}

export interface ListItem {
  text: string
  link: string
  target: string
}
