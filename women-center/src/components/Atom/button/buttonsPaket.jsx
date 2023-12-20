import React from 'react'
import Button from 'react-bootstrap/Button';

function Buttons ({teks, onclick, id}) {
  return <Button 
            id={id}
            style={{width : '110px', fontSize : '14px'}}
            onClick={onclick}>
            {teks}
          </Button>
}
export default Buttons