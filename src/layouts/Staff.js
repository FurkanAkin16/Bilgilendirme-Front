import React from 'react'
import { Icon, Table } from 'semantic-ui-react'

const TableExampleStructured = () => (
  <Table celled structured>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell rowSpan='2'>Ürün Adı</Table.HeaderCell>
        <Table.HeaderCell rowSpan='2'>İhtiyaç Adedi</Table.HeaderCell>
        <Table.HeaderCell textAlign='center' rowSpan='2'>Şehir</Table.HeaderCell>
        <Table.HeaderCell textAlign='center' colSpan='3'>Ulaşım Biçimi</Table.HeaderCell>


      </Table.Row>
      <Table.Row>
        <Table.HeaderCell>Hava Yolu</Table.HeaderCell>
        <Table.HeaderCell>Kara Yolu</Table.HeaderCell>
        <Table.HeaderCell>Deniz Yolu</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>Battaniye</Table.Cell>
        <Table.Cell>2500</Table.Cell>
        <Table.Cell textAlign='center'>Adıyaman,Hatay</Table.Cell>
        <Table.Cell textAlign='center'>
          <Icon color='green' name='checkmark' size='large' />
        </Table.Cell>
        <Table.Cell textAlign='center'>
          <Icon color='green' name='checkmark' size='large' />
        </Table.Cell>
        <Table.Cell textAlign='center'>
          <Icon color='red' name='delete' size='large' />
        </Table.Cell>
        <Table.Cell />
        <Table.Cell />
      </Table.Row>
      <Table.Row>
        <Table.Cell rowSpan='3'>Jenaratör</Table.Cell>
        <Table.Cell>1250 Adet Küçük</Table.Cell>
        <Table.Cell textAlign='center'>Adıyaman,Kahramanmaraş,Adana,</Table.Cell>
        <Table.Cell textAlign='center'>
          <Icon color='red' name='delete' size='large' />
        </Table.Cell>
        <Table.Cell textAlign='center'>
          <Icon color='green' name='checkmark' size='large' />
        </Table.Cell>
        <Table.Cell textAlign='center'>
          <Icon color='green' name='checkmark' size='large' />
        </Table.Cell>

        <Table.Cell />
        <Table.Cell />
      </Table.Row>
      <Table.Row>
        <Table.Cell>125 Adet Orta</Table.Cell>
        <Table.Cell textAlign='center'>Antakya,Elbistan,Gaziantep</Table.Cell>
        <Table.Cell textAlign='center'>
          <Icon color='red' name='delete' size='large' />
        </Table.Cell>
        <Table.Cell textAlign='center'>
          <Icon color='green' name='checkmark' size='large' />
        </Table.Cell>
        <Table.Cell textAlign='center'>
          <Icon color='green' name='checkmark' size='large' />
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>12 Adet Büyük</Table.Cell>
        <Table.Cell textAlign='center'>Hatay,Kahramanmaraş</Table.Cell>
        <Table.Cell textAlign='center'>
          <Icon color='red' name='delete' size='large' />
        </Table.Cell>
        <Table.Cell textAlign='center'>
          <Icon color='green' name='checkmark' size='large' />
        </Table.Cell>
        <Table.Cell textAlign='center'>
          <Icon color='green' name='checkmark' size='large' />
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Isıtıcı</Table.Cell>
        <Table.Cell>30000</Table.Cell>
        <Table.Cell textAlign='center'>Hatay,Kahramanmaraş,Antakya</Table.Cell>
        <Table.Cell textAlign='center'>
          <Icon color='green' name='checkmark' size='large' />
        </Table.Cell>
        <Table.Cell textAlign='center'>
          <Icon color='green' name='checkmark' size='large' />
        </Table.Cell>
        <Table.Cell textAlign='center'>
          <Icon color='green' name='checkmark' size='large' />
        </Table.Cell>
        <Table.Cell />
        <Table.Cell />
      </Table.Row>
      <Table.Row>
        <Table.Cell>Kışlık Bot</Table.Cell>
        <Table.Cell>125000</Table.Cell>
        <Table.Cell textAlign='center'>Antakya,Elbistan,Kahramanmaraş,Antakya</Table.Cell>
        <Table.Cell textAlign='center'>
          <Icon color='green' name='checkmark' size='large' />
        </Table.Cell>
        <Table.Cell textAlign='center'>
          <Icon color='green' name='checkmark' size='large' />

        </Table.Cell>
        <Table.Cell textAlign='center'>
          <Icon color='green' name='checkmark' size='large' />
        </Table.Cell>
        <Table.Cell />
        <Table.Cell />
      </Table.Row>
      <Table.Row>
        <Table.Cell>Kışlık Mont</Table.Cell>
        <Table.Cell>120000</Table.Cell>
        <Table.Cell textAlign='center'>Hatay,Elbistan,Kahramanmaraş,Antakya</Table.Cell>
        <Table.Cell textAlign='center'>
          <Icon color='green' name='checkmark' size='large' />
        </Table.Cell>
        <Table.Cell textAlign='center'>
          <Icon color='green' name='checkmark' size='large' />
        </Table.Cell>
        <Table.Cell textAlign='center'>
          <Icon color='green' name='checkmark' size='large' />
        </Table.Cell>
        <Table.Cell />
        <Table.Cell />
      </Table.Row>
      <Table.Row>
        <Table.Cell>Hijyen Malzemeleri</Table.Cell>
        <Table.Cell>50000</Table.Cell>
        <Table.Cell textAlign='center'>Elbistan,Antakya,Kahramanmaraş</Table.Cell>
        <Table.Cell textAlign='center'>
          <Icon color='green' name='checkmark' size='large' />
        </Table.Cell>
        <Table.Cell textAlign='center'>
          <Icon color='green' name='checkmark' size='large' />
        </Table.Cell>
        <Table.Cell textAlign='center'>
          <Icon color='red' name='delete' size='large' />
        </Table.Cell>
        <Table.Cell />
        <Table.Cell />
      </Table.Row>
      <Table.Row>
        <Table.Cell>Konserve Gıda</Table.Cell>
        <Table.Cell>400000</Table.Cell>
        <Table.Cell textAlign='center'>Hatay,Antakya,Elbistan,Kahramanmaraş</Table.Cell>
        <Table.Cell textAlign='center'>
          <Icon color='red' name='delete' size='large' />
        </Table.Cell>
        <Table.Cell textAlign='center'>
          <Icon color='green' name='checkmark' size='large' />
        </Table.Cell>
        <Table.Cell textAlign='center'>
          <Icon color='green' name='checkmark' size='large' />
        </Table.Cell>
        <Table.Cell />
        <Table.Cell />
      </Table.Row>
      <Table.Row>
        <Table.Cell>İnşaat Araçları</Table.Cell>
        <Table.Cell>500</Table.Cell>
        <Table.Cell textAlign='center'>Hatay,Antakya,Elbistan,Kahramanmaraş</Table.Cell>
        <Table.Cell textAlign='center'>
          <Icon color='red' name='delete' size='large' />
        </Table.Cell>
        <Table.Cell textAlign='center'>
          <Icon color='green' name='checkmark' size='large' />
        </Table.Cell>
        <Table.Cell textAlign='center'>
          <Icon color='green' name='checkmark' size='large' />
        </Table.Cell>

        <Table.Cell />
        <Table.Cell />
      </Table.Row>
    </Table.Body>
  </Table>
)

export default TableExampleStructured