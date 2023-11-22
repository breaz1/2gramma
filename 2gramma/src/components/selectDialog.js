import Nav from 'react-bootstrap/Nav';

function SelectDialog() {
  return (
    <Nav variant="underline" defaultActiveKey="/home" className='bebe w-60 '>
      <Nav.Item className=''>
        <Nav.Link href="/home"  className=' text-white'>Общий чат</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1" className='text-white'>Частный чат</Nav.Link>
      </Nav.Item>
    </Nav>

  );
}

export default SelectDialog;