import { Container, Menu, Grid, Icon, Label } from "semantic-ui-react";
import Link from "next/link";

export default function MenuWeb() {
  return (
    <div className="menu">
      <Container>
        <Grid>
          <Grid.Column className="menu__left" width={6}>
            <MenuPlatforms />
          </Grid.Column>
          <Grid.Column className="menu__right" width={10}>
            <MenuOptions />
          </Grid.Column>
        </Grid>
      </Container>
    </div>
  );
}

function MenuPlatforms() {
  return (
    <Menu>
        <Link href='/playstation'>
          <Menu.Item as="a">playStation</Menu.Item>
        </Link>

        <Link href='/xbox'>
          <Menu.Item as="a">xbox</Menu.Item>
        </Link>

        <Link href='/switch'>
          <Menu.Item as="a">switch</Menu.Item>
        </Link>    
    </Menu>
  );
}

function MenuOptions() {
  return (
    <Menu>
        <>
          <Link href="/orders">
            <Menu.Item as="a">
              <Icon name="game" />
              My Orders
            </Menu.Item>
          </Link>
          <Link href="/wishlist">
            <Menu.Item as="a">
              <Icon name="heart outline" />
              Wishlist
            </Menu.Item>
          </Link>
          <Link href="/account">
            <Menu.Item as="a">
              <Icon name="user outline" />
            </Menu.Item>
          </Link>
          <Link href="/cart">
            <Menu.Item as="a" className="m-0">
              <Icon name="cart" />
                <Label color="red" floating circular>
                  n
                </Label>
            </Menu.Item>
          </Link>
          <Menu.Item className="m-0" >
            <Icon name="power off" />
          </Menu.Item>
        </>
      
        <Menu.Item >
          <Icon name="user outline" />
          My account
        </Menu.Item>
      
    </Menu>
  );
}