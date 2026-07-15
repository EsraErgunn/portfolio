import { useState } from 'react'
import type { ComponentType, SVGProps } from 'react'
import { motion } from 'framer-motion'
import { Check, Copy, Mail, MapPin } from 'lucide-react'
import { staggerItem } from '@/animations'
import { Card, Typography, IconButton } from '@/components/ui'
import { GithubIcon, LinkedinIcon } from '@/components/icons'
import type { ContactMethod, ContactMethodType } from './contact.types'

const ICONS: Record<ContactMethodType, ComponentType<SVGProps<SVGSVGElement>>> = {
  email: Mail,
  github: GithubIcon,
  linkedin: LinkedinIcon,
  location: MapPin,
}

/** How long the "copied" confirmation stays visible before reverting. */
const COPY_FEEDBACK_MS = 2000

interface ContactCardProps {
  method: ContactMethod
}

/**
 * Renders one contact method. Email additionally gets a copy-to-clipboard
 * action - typing or tapping out a long address is the one piece of
 * friction here worth removing; the other methods are plain links (or, for
 * Location, static text with no link at all).
 */
export function ContactCard({ method }: ContactCardProps) {
  const [copied, setCopied] = useState(false)
  const Icon = ICONS[method.type]
  const isEmail = method.type === 'email'

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(method.value)
      setCopied(true)
      setTimeout(() => setCopied(false), COPY_FEEDBACK_MS)
    } catch {
      // Clipboard access can fail (insecure context, denied permission,
      // unsupported browser) - no-op rather than surface an unhandled
      // rejection. The email is still a working mailto: link either way.
    }
  }

  return (
    <motion.div variants={staggerItem}>
      <Card className="flex items-center gap-4">
        <span
          aria-hidden="true"
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary"
        >
          <Icon className="h-5 w-5" />
        </span>

        <div className="min-w-0 flex-1">
          <Typography variant="caption" color="muted">
            {method.label}
          </Typography>

          {method.href ? (
            <a
              href={method.href}
              target={isEmail ? undefined : '_blank'}
              rel={isEmail ? undefined : 'noopener noreferrer'}
              className="block truncate text-body font-medium text-foreground transition-colors hover:text-primary"
            >
              {method.value}
            </a>
          ) : (
            <Typography variant="body" className="truncate font-medium">
              {method.value}
            </Typography>
          )}
        </div>

        {isEmail && (
          <IconButton
            size="sm"
            className="shrink-0"
            aria-label={copied ? 'Email address copied' : 'Copy email address'}
            onClick={handleCopy}
          >
            {copied ? (
              <Check className="h-4 w-4 text-success" aria-hidden="true" />
            ) : (
              <Copy className="h-4 w-4" aria-hidden="true" />
            )}
          </IconButton>
        )}
      </Card>
    </motion.div>
  )
}
