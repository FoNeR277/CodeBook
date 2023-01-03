import {Button, Header, Container, Image, Segment} from "semantic-ui-react";
import {Link} from "react-router-dom";

export default function HomePage() {
    return(
        <Segment inverted textAlign='center' vertical className='masthead' >
            <Container text>
                <Header as='h1' inverted>
                    <Image size='massive' src='/assets/logo.png' alt='logo' style={{ marginBottom: 12 }} />
                    CodeBook
                </Header>
                <Header as='h2' inverted content='Welcome to CodeBook' />
                <Button as={Link} to='/activities' size='huge' inverted>
                    Take me to the activities!
                </Button>
            </Container>
        </Segment>
    )
}