import React from 'react'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Layout from '../components/Layout'
import { remarkForm } from 'gatsby-tinacms-remark'

const IndexPage = ({ data }) => {
  // const post = data.markdownRemark
  console.log('data', data)
  return (
    <Layout>
      <Container maxWidth='lg'>
        <Box marginTop={6} marginBottom={10}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              {/* <div>{post.html}</div> */}
              <h1>Foo</h1>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Layout>
  )
}

export default remarkForm(IndexPage)
