import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Head from '@input-output-hk/front-end-core-components/components/Head'
import Language from '@input-output-hk/front-end-core-components/components/Language'
import Theme from '@input-output-hk/front-end-core-components/components/Theme'
import { Location } from '@reach/router'
import Main from '../templates/Main'

const Layout = ({ children, headData = {}, template = Main }) => {
  const Template = template
  return (
    <Theme.Consumer>
      {({ theme }) => (
        <Location>
          {({ location }) => (
            <Language.Consumer>
              {({ key: lang, locale, availableLanguages }) => (
                <Fragment>
                  <Head
                    title={`Foo`}
                    locale={locale}
                    availableLocales={availableLanguages.map(({ locale }) => locale).filter(locale => Boolean(locale))}
                    lang={lang}
                    url={process.env.GATSBY_URL}
                  >
                    {theme.typography.googleFontsURL && <link rel='stylesheet' type='text/css' href={theme.typography.googleFontsURL} />}
                  </Head>
                  <Template>
                    {children}
                  </Template>
                </Fragment>
              )}
            </Language.Consumer>
          )}
        </Location>
      )}
    </Theme.Consumer>
  )
}

Layout.propTypes = {
  children: PropTypes.node,
  headData: PropTypes.shape({
    title: PropTypes.string,
    meta: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      content: PropTypes.string,
      file: PropTypes.string
    }))
  }),
  template: PropTypes.func
}

export default Layout
