import React from 'react'
import H2 from '../components/H2'
import H1 from '../components/H1'
import Container from '../components/Container'
import SubContent from '../components/SubContent'

function Error({ statusCode }) {
  return (
    <Container>
      <div>
        <H1>{statusCode}</H1>
        <SubContent>
          <H2>
            出错了啦～！这个网页还没做好呢！(o^^o)
          </H2>
        </SubContent>
      </div>
    </Container>
  )
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : null
  return { statusCode }
}

export default Error
