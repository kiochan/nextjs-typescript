import React from 'react'
import Container from '../components/Container'
import H1 from '../components/H1'
import H2 from '../components/H2'
import SubContent from '../components/SubContent'
import KeyExchenge from '../components/KeyExchenge'

export default () => (
  <Container>
    <div>
      <H1>KEY兑换</H1>
      <SubContent>
        <H2>
          请输入实体版说明书上的 KEY 以查询对应的 Steam Key
        </H2>
      </SubContent>
    </div>
    <KeyExchenge />
  </Container>
)
