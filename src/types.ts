// vue-bot-ui Type Definitions

export interface ChatAttachment {
  type: 'input_image' | 'input_file'
  image_url?: string
  filename?: string
  file_data?: string
}

export interface PendingAttachment {
  type: 'input_image' | 'input_file'
  name: string
  previewUrl?: string
  attachment: ChatAttachment
}

export interface Message {
  agent: 'bot' | 'user'
  type: 'text' | 'mrkdwn' | 'button'
  text: string
  disableInput?: boolean
  options?: ButtonOption[]
  attachments?: ChatAttachment[]
}

export interface ButtonOption {
  text: string
  value: string | number
  action: string
}

export interface ButtonData {
  text: string
  value: string | number
  action: string
}

export interface BotUIOptions {
  botTitle?: string
  colorScheme?: string
  textColor?: string
  bubbleBtnSize?: number
  animation?: boolean
  boardContentBg?: string
  botAvatarSize?: number
  botAvatarImg?: string
  msgBubbleBgBot?: string
  msgBubbleColorBot?: string
  msgBubbleBgUser?: string
  msgBubbleColorUser?: string
  inputPlaceholder?: string
  inputDisableBg?: string
  inputDisablePlaceholder?: string
  inputDisableButtonPlaceholder?: string | null
  enableAttachments?: boolean
  expandable?: boolean
  bubbleZIndex?: number
  bubblePosition?: Position
  windowZIndex?: number
  windowPosition?: Position
}

export interface Position {
  bottom?: string | null
  right?: string | null
  top?: string | null
  left?: string | null
}

export interface BotUIProps {
  options?: BotUIOptions
  messages?: Message[]
  botTyping?: boolean
  inputDisable?: boolean
  isOpen?: boolean
  openDelay?: number
}

export interface BotUIEmits {
  (e: 'init'): void
  (e: 'destroy'): void
  (e: 'msg-send', message: Message): void
  (e: 'button-clicked', buttonData: ButtonData): void
}
