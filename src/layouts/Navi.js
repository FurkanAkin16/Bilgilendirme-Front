import React, { Component } from 'react'
import { Container, Menu } from 'semantic-ui-react'


export default class MenuExampleInverted extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu inverted fixed='' >
        <Container>
          <Menu.Item
            name='DEPREMYARDİM'

            active={activeItem === 'home'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='AHBAP'

            active={activeItem === 'home'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='AFAD'

            active={activeItem === 'home'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='KIZILAY'

            active={activeItem === 'home'}
            onClick={this.handleItemClick}
          />


        </Container>


      </Menu>
    )
  }
}