import React from 'react'
import SinglePersonStorePage from './SinglePersonStore'

/**
 * Replace the old "Gói Gia Đình" page with the single-person store.
 * This file intentionally forwards/redirects to the single-person page so
 * any route or import that referenced the family page now shows only 1-person packages.
 */
export default function FamilyPackages(): JSX.Element {
  return <SinglePersonStorePage />
}