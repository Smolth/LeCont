import React, { useEffect } from "react";
import styles from './nav.styles.css'
import logo from "../images/logotype.png"

export default function NavBar() {
    useEffect(() => {
        let icons = document.querySelectorAll(".icon");
        icons.forEach(item => {
            item.addEventListener('mouseover', function () {
                this.querySelector('p').style.display = "block";
            })

            item.addEventListener('mouseout', function () {
                this.querySelector('p').style.display = "none";
            })
        });

    }, [])
    return (
        <div className="chapter-nav" id="chapter-nav">
            <a id="start" href="#layer1">К началу</a>
            <a href="#href1" className="icon" id="icon1"><p className="p1">Докер</p></a>
            <a href="#href2" className="icon" id="icon2"><p>Взлом аккаунта</p></a>
            <a href="#href3" className="icon" id="icon3"><p>Анализ портов</p></a>
            <a href="#href4" className="icon" id="icon4"><p>Несанкционированный доступ</p></a>
            <a id="lastlayer" href="#layer8">Установить</a>
        </div>
    );
}
