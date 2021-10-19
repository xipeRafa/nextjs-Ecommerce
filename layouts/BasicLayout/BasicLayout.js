import {Container} from 'semantic-ui-react'
import Header from '../../components/Header'

const BasicLayout = ({children}) => {
      return (
            <Container fluid className='basic-layout'>
                  <Header />
                  <Container className='content'> {children}</Container>
                 
            </Container>
      )
}

export default BasicLayout
// using in every page