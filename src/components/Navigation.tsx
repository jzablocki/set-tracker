import React, { useState } from 'react';
import { Menu, Responsive, Icon, SemanticICONS, Sidebar, Container } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
import { Location } from 'history';

const menuItems = [
  { icon: 'heart', text: 'Exercises', href: '/exercises' },
  { icon: 'list', text: 'Routines', href: '/routines' },
  { icon: 'calendar', text: 'History', href: '/history' },
  { icon: 'write', text: 'Today', href: '/today' },
];

const Navigation = ({ children, location }: { children?: any; location: Location }) => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Responsive minWidth={Responsive.onlyComputer.minWidth}>
        <Menu inverted fixed="left" vertical icon="labeled">
          {menuItems.map((m, i) => {
            return (
              <Menu.Item as="a" href={m.href} key={i} active={location.pathname === m.href}>
                <Icon name={m.icon as SemanticICONS} /> {m.text}
              </Menu.Item>
            );
          })}
        </Menu>
        <Container textAlign="center" style={{ marginTop: '2em' }}>
          {children}
        </Container>
      </Responsive>

      <Responsive maxWidth={Responsive.onlyMobile.maxWidth} as={Sidebar.Pushable}>
        <Sidebar
          as={Menu}
          animation="overlay"
          icon="labeled"
          onHide={e => setVisible(false)}
          inverted
          vertical={true}
          visible={visible}
          width="thin"
        >
          {menuItems.map((m, i) => (
            <Menu.Item as="a" href={m.href} key={i}>
              <Icon name={m.icon as SemanticICONS} /> {m.text}
            </Menu.Item>
          ))}
        </Sidebar>

        <Sidebar.Pusher dimmed={false}>
          <Menu inverted>
            <Menu.Item onClick={e => setVisible(!visible)}>
              <Icon name="sidebar" />
            </Menu.Item>
          </Menu>
          <Container textAlign="center" style={{ marginTop: '2em', height: '600px' }}>
            {children}
          </Container>
        </Sidebar.Pusher>
      </Responsive>
    </>
  );
};

export default withRouter(Navigation);
