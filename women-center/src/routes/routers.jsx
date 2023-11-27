import React from "react";
import { Routes, Route, Navigate, useParams } from "react-router-dom";
import MainContainer from "../Components/organisms/MainContainer";
import AddArtikel from "../component/pages/AddArtikel";
import ArtikelModal from "../component/organism/BacaArtikel";

const Routers = () => {
    const { articleId } = useParams();
    return (
        <Routes>
            <Route path ="/" element={<Navigate to= "/articlelist"/>} />
            <Route path ="/articlelist" element={<MainContainer/>} />
            <Route path ="/addarticle" element={<AddArtikel/>} />
            <Route path ="`/article/:articleId`" element={<ArtikelModal articleId={articleId}/>} />
        </Routes>
    );
};

export default Routers;