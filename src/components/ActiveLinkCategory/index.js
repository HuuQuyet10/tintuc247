import { useRouter } from 'next/router'
import PropTypes from 'prop-types'
import Link from 'next/link'
import React, { Children } from 'react'

const ActiveLinkCategory = ({ children, isActive, ...props }) => {
  const { asPath } = useRouter()
  const child = Children.only(children)
  const childClassName = child.props.className || ''

  // pages/index.js will be matched via props.href
  // pages/about.js will be matched via props.href
  // pages/[slug].js will be matched via props.as
  const className =
      isActive
      ? `${childClassName} active`.trim()
      : childClassName

  return (
    <a {...props}>
      {React.cloneElement(child, {
        className: className || null,
      })}
    </a>
  )
}

ActiveLinkCategory.propTypes = {
  activeClassName: PropTypes.string.isRequired,
}

export default ActiveLinkCategory
