import React, { Component } from 'react'
import { Accordion, Icon } from 'semantic-ui-react'

export default class AccordionExampleFluid extends Component {
  state = { activeIndex: 0 }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }

  render() {
    const { activeIndex } = this.state

    return (
      <Accordion fluid styled>
        <Accordion.Title
          active={activeIndex === 0}
          index={0}
          onClick={this.handleClick}
        >
          <Icon name='dropdown' />
         Nasıl yardım edebilirim ?
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 0}>
          <p>
          Belediyelerin internet sitelerinden ihtiyaç listesi ve yardım toplama merkezleri hakkında bilgi alınabilir. 
          </p>
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 1}
          index={1}
          onClick={this.handleClick}
        >
          <Icon name='dropdown' />
          Nakit yardım nasıl yapabilirim ?
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 1}>
          <p>
          Çoğu ilde belediyelerce bağış kampanyaları yapılıyor. İlgili belediyeyle iletişime geçerek bilgi alınabilir. 

AHBAP, AKUT gibi deprem bölgesinde çalışan güvenilir sivil toplum kuruluşlarına bağışta bulunulabilir. 
          </p>
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 2}
          index={2}
          onClick={this.handleClick}
        >
          <Icon name='dropdown' />
          Nasıl gönüllü olarak çalışmalara katılabilirim ?
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 2}>
          <p>
          </p>
          <p>
          Deprem bölgesine yardım kolisi toplama ve hazırlama işlemlerine yardımcı olabilmek için lütfen bulunduğunuz il veya ilçenin belediyesine danışınız.
          </p>
        </Accordion.Content>
      </Accordion>
    )
  }
}
