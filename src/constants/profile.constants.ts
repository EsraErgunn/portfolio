/**
 * Single source of truth for the profile photo path - Hero and About both
 * render the same photo through the shared Avatar component, so this is
 * the one place to update if the photo ever changes. Avatar falls back to
 * the initials placeholder automatically if this is ever cleared.
 */
export const PROFILE_IMAGE_SRC = '/images/profile/profile.webp' as const
