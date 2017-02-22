import * as React from 'react';
import {
  Headline,
  Markdown,
  Avatar,
  Anchor,
  Article,
} from 'components';
const {
  Container,
  AboutSection,
  AboutSectionInner,
  StyledHr,
  AvatarContainer,
  Div,
  Github,
  Card,
  CardFooter,
} = require('./styles');
const about = require('./about').default;
import contributors from './contributors';

class About extends React.Component<any, any> {
  public render() {
    return (
      <Container>
        <AboutSection id="about-section-1">
          <Headline textAlign="left">
            About
            <StyledHr />
          </Headline>
          <AboutSectionInner>
            <Article
              content={`${about.aboutContent}`}
            />
          </AboutSectionInner>
        </AboutSection>
        <AboutSection id="about-section-two" padBottom>
          <Headline>
            Team Members
            <StyledHr/>
          </Headline>
          <AboutSectionInner>
            {contributors.map((contributor, index) =>
              <Card key={index}>
                <AvatarContainer>
                  <Avatar
                    name={contributor.name}
                    avatarUrl={contributor.avatar}
                  />
                  <Div>
                    <Markdown content={contributor.bio} />
                  </Div>
                  <CardFooter>
                    <Anchor href={contributor.github}>
                      <Github />
                    </Anchor>
                  </CardFooter>
                </AvatarContainer>
              </Card>,
            )}
          </AboutSectionInner>
        </AboutSection>
      </Container>
    );
  }
}

export default About;
