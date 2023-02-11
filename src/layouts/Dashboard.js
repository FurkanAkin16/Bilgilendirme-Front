import React from 'react'
import ProductList from '../pages/ProductList'
import Categories from './Categories'
import Navi from './Navi'
import { Grid } from 'semantic-ui-react'
import Login from './Login'
import Name from './Name'

export default function Dashboard() {
  return (
    <div>
      <Grid>
        <Grid.Row>
            <Grid.Column width={'2'}>
             <Login/>
            </Grid.Column>
            <Grid.Column width={'4'}>
            <Categories/> 
            </Grid.Column>
            <Grid.Column width={3}>
              <Name/>
            </Grid.Column>
        </Grid.Row>
        </Grid>  
       
        
    </div>
  )
}