import React, { Component } from 'react'
import axios from 'axios'

export interface KeyExchengeProps {}

interface KeyExchengeState {
  status: 'ready' | 'fetching' | 'fetched' | 'error'
  message: string
}

export default class KeyExchenge extends Component<KeyExchengeProps, KeyExchengeState> {
  private _input: React.RefObject<HTMLInputElement>

  public constructor (props: KeyExchengeProps) {
    super(props)
    this.state = {
      status: 'ready',
      message: '请输入 Key'
    }
    this._input = React.createRef()
  }

  private search () {
    this.setState({
      status: 'fetching',
      message: '正在努力地连接服务器中。'
    })
    const key = this._input.current.value
    if (!key.match(/^SASC-CICA-([A-Z0-9-]+)$/i)) {
      this.setState({
        status: 'error',
        message: '此格式似乎不对，需要类似 SASC-CICA-X-XXXX-XXXX-XXXXXXXX 的格式。'
      })
      return
    }
    axios.get(`/api/key`, {
      params: { key },
    })
    .then((response) => {
      this.setState({
        status: 'fetched',
        message: response.data.message
      })
    })
    .catch((error) => {
      this.setState({
        status: 'error',
        message: '因网络连接错误而无法连接到服务器！'
      })
    })
  }

  public render () {
    return (
      <div>
        <input ref={this._input}/><button onClick={this.search.bind(this)}>查询</button>
        <pre>{this.state.message}</pre>
      </div>
    )
  }
}
