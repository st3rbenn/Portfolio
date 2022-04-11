import HeaderTitle from './Title'
import HeaderContainer from './Header'
import HeaderList from './HeaderList.jsx'
import HeaderListItem from './HeaderListItem.jsx'

export default function Header(){
    return(
            <HeaderContainer>
                    <HeaderTitle>
                        Anthonin Colas
                    </HeaderTitle>
                    <HeaderList>
                        <HeaderListItem>A PROPOS</HeaderListItem>
                        <HeaderListItem>CREATIONS</HeaderListItem>
                        <HeaderListItem>COMPETENCES</HeaderListItem>
                        <HeaderListItem>BLOG</HeaderListItem>
                    </HeaderList>
            </HeaderContainer>
    )
}