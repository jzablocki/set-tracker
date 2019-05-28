import React from 'react';
import { Menu, Responsive, Segment, Icon } from 'semantic-ui-react';

const Navigation = () => {
  return (
    <>
      <Responsive minWidth={Responsive.onlyTablet.minWidth} as={Menu} inverted fixed="left" vertical>
        <Menu.Item as="a" href="/exercises">
          <Icon name="heart" /> Exercises
        </Menu.Item>
        <Menu.Item as="a" href="/routines">
          <Icon name="list" /> Routines
        </Menu.Item>
        <Menu.Item as="a" href="/history">
          <Icon name="calendar" /> History
        </Menu.Item>
        <Menu.Item as="a" href="/today">
          <Icon name="write" /> Today
        </Menu.Item>
      </Responsive>

      <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>Mobile </Responsive>
    </>
  );
};

export default Navigation;
