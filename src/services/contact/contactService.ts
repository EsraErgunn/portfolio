export interface ContactFormPayload {
  name: string
  email: string
  message: string
}

/**
 * PLACEHOLDER - no backend exists yet for this portfolio (project.md:
 * a backend arrives in V2). This defines the contract a real contact form
 * will call once one exists: it should be built on the shared `apiFetch`
 * wrapper (services/httpClient.ts), not a third-party form service like
 * EmailJS or Formspree, so wiring it up later is a change inside this one
 * function - no page or component changes.
 */
export async function submitContact(payload: ContactFormPayload): Promise<void> {
  throw new Error(
    `submitContact is not implemented yet - no backend exists for this portfolio. Payload: ${JSON.stringify(payload)}`,
  )
}
