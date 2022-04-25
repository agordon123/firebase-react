import React,{useRef} from "react";
import { Link } from "react-router-dom";
import { ResponsiveAppBar } from "../components/ResponsiveAppBar";



export const Layout = () => {
    const inputRef = useRef(null)


    return (
        <div className="layout">
            <header>
            <ResponsiveAppBar />
            </header>
            <main>
            
            </main>
            </div>
    )



}