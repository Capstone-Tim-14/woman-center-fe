import React from "react"
const Profil = ({src}) =>{
    return(
        <>
        <div className="col-4 flex-column">
            <p className="m-0">Foto Profil</p>
                <img 
                    src={src}
                    className="rounded-2 mt-3"
                    style={{height: '340px', width: '320px', objectFit: 'cover'}}
                    />
            </div>
        </>
    )
}
export default Profil