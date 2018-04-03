import React from 'react';
import {Row, Input} from 'react-materialize'

const UserForm = () => (
  <Row>
    <Input placeholder="Placeholder" s={6} label="First Name" />
    <Input s={6} label="Last Name" />
    <Input type="password" label="password" s={12} />
    <Input type="email" label="Email" s={12} />
  </Row>
)

export default UserForm
