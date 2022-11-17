import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./style/layout.css";

export default function Layout() {
    return (
        <div id="layout">
            <header id="header">
                <div className="nav-menu container-fluid">
                    <div className="row">
                        <div className="col">
                            <Link className="nav-link" to="/">Таблиці</Link>
                        </div>
                        <div className="col">
                            <Link className="nav-link" to="/">Графіки</Link>
                        </div>
                    </div>
                </div>
            </header>
            <div id="body" className="container">
                <Outlet />
            </div>
        </div>
    );
}