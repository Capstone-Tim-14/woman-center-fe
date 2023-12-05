import React from 'react'
import GrafikPaket from '../../molekul/grafiks/grafikPaket'
import TabelSesi from '../../molekul/tabels/tabelSesi'
import TabelPaket from '../../molekul/tabels/tabelPaket'

function KontenPaket() {
  return (
    <div className='container-md my-2 d-flex justify-content-start'>
        <div className='d-flex flex-column gap-3'>
            <TabelSesi/>
            <div className='d-flex gap-3'>
                <TabelPaket/>
                <GrafikPaket/>
            </div>
        </div>
    </div>
  )
}

export default KontenPaket