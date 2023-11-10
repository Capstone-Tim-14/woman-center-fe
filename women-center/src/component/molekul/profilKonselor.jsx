import React from "react"
const ProfilKonselor = () =>{
    return(
        <>
        <div className="col-4 flex-column">
            <p className="fw-semibold m-0">Foto Profil</p>
            <div 
                className="mt-3">
                <img 
                    src="data:image/webp;base64,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"
                    className="rounded-2 h-auto w-auto"/>
            </div>
        </div>
        </>
    )
}
export default ProfilKonselor
