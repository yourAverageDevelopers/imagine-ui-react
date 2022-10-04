import '~/assets/css/app.scss';

import React, { useState } from 'react';

import { Button, Container, Header, Input, Menu, MenuItem, Sidebar } from '~/imagine';

export const App: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <>
      <Sidebar position='right' active={sidebarOpen}>
        <Header size='big'>Sidebar Header</Header>
        <Menu>
          <MenuItem>Item 1</MenuItem>
          <MenuItem>Item 2</MenuItem>
          <MenuItem>Item 3</MenuItem>
          <MenuItem>Item 4</MenuItem>
        </Menu>
      </Sidebar>
      <Sidebar position='left' active={sidebarOpen}>
        <Header size='big'>Sidebar Header</Header>
        <Menu>
          <MenuItem>Item 1</MenuItem>
          <MenuItem>Item 2</MenuItem>
          <MenuItem>Item 3</MenuItem>
          <MenuItem>Item 4</MenuItem>
        </Menu>
      </Sidebar>

      <Container padded>
        <Button size='tiny' circular color='red'>
          Tiny Button
        </Button>
        <Button size='small' color='green'>
          Small Button
        </Button>
        <Button circular color='pink'>
          Regular Button
        </Button>
        <Button size='big' color='red'>
          Big Button
        </Button>
        <Button size='massive' circular color='blue'>
          Massive Button
        </Button>

        <Header size='tiny'>Tiny Header</Header>
        <p style={{ fontSize: 14 }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit doloribus eos ullam
          doloremque cupiditate impedit explicabo alias. Similique ea, ipsa tempora ratione deleniti
          repellendus. Asperiores, nostrum? Vel quo nostrum eum?
        </p>
        <Header size='small'>Small Header</Header>
        <p style={{ fontSize: 14 }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit doloribus eos ullam
          doloremque cupiditate impedit explicabo alias. Similique ea, ipsa tempora ratione deleniti
          repellendus. Asperiores, nostrum? Vel quo nostrum eum?
        </p>
        <Header>Regular Header</Header>
        <p style={{ fontSize: 14 }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit doloribus eos ullam
          doloremque cupiditate impedit explicabo alias. Similique ea, ipsa tempora ratione deleniti
          repellendus. Asperiores, nostrum? Vel quo nostrum eum?
        </p>
        <Header size='big'>Big Header</Header>
        <p style={{ fontSize: 14 }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit doloribus eos ullam
          doloremque cupiditate impedit explicabo alias. Similique ea, ipsa tempora ratione deleniti
          repellendus. Asperiores, nostrum? Vel quo nostrum eum?
        </p>
        <Header size='massive'>Massive Header</Header>
        <p style={{ fontSize: 14 }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit doloribus eos ullam
          doloremque cupiditate impedit explicabo alias. Similique ea, ipsa tempora ratione deleniti
          repellendus. Asperiores, nostrum? Vel quo nostrum eum?
        </p>

        <Input placeholder='Tiny Input' size='tiny' circular />
        <Input placeholder='Small Input' size='small' circular />
        <Input placeholder='Input' circular />
        <Input placeholder='Big Input' size='big' circular />
        <Input placeholder='Massive Input' size='massive' circular />

        <Button color='blue' circular size='small' onClick={() => setSidebarOpen(!sidebarOpen)}>
          Toggle Sidebars
        </Button>
      </Container>
    </>
  );
};
