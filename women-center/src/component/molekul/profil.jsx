import React from "react"
const Profil = ({src}) =>{
    return(
        <>
        <div className="col-4 flex-column">
            <p className="m-0">Foto Profil</p>
            <div 
                className="mt-3">
                <img 
                    src={src}
                    className="rounded-2 h-auto w-auto"/>
            </div>
        </div>
        </>
    )
}
export default Profil