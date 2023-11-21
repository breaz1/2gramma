import Nav from 'react-bootstrap/Nav';

function SelectDialog() {
  return (
    <Nav variant="pills" defaultActiveKey="/home" className='flex-column w-60'>
      <Nav.Item>
        <Nav.Link href="/home">Active</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Option 2</Nav.Link>
      </Nav.Item>
    </Nav>

  );
}

export default SelectDialog;