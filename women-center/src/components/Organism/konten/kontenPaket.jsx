import React from 'react'
import GrafikPaket from '../../Molekul/grafiks/grafikPaket'
import TabelSesi from '../tabelSesi'
import TabelPaket from '../tabelPaket'
import '../../../styles/KontenPaket.css'

function KontenPaket() {
  return (
    <div className='container-md my-2 d-flex justify-content-start'>
        <div className='d-flex flex-column gap-3'>
            <TabelSesi/>
            <div className='d-flex gap-4'>
                <TabelPaket/>
                <GrafikPaket/>
            </div>
        </div>
    </div>
  )
}

export default KontenPaket