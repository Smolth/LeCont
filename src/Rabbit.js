import './rabbit.css';
import React, { useEffect, useState } from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { useScroll } from 'react-spring'
import krolik from './images/krolik2.gif'
import logo from "./images/logotype.png"
import docker from "./images/docker.png"
import port from './images/port.png'
import account from './images/leftAccount.png'
import access from './images/access.png'
import git from './images/github-icon.png'
import icon1 from './images/icon1.png'
import icon2 from './images/icon2.jpg'
import NavBar from './components/navBar';
import arrow from './images/klipartz.png'
import arrow2 from './images/arrow.png'

function Rabbit() {
    const [rightArrow, setRight] = useState(true);
    const [leftArrow, setLeft] = useState(false);
    /*const scrollRight = () => {
        let parallax = document.querySelector(".parallax");
        console.log(progress)
        setProgress(progress + 1400);
        parallax.scrollTo(progress, 0);
        setPage(page + 1);
        if (page === 7) {
            setProgress(0);
        }
    }
    const scrollLeft = () => {
        let parallax = document.querySelector(".parallax");
        setProgress(progress - 1400);
        setPage(page - 1);
        parallax.scrollTo(progress, 0);
    }*/

    const selectedStart = () => {
        let navBar = document.querySelector(".chapter-nav");
        navBar.querySelector('#start').style.color = "violet";
        navBar.querySelector('#icon1').style.border = "0px";
        navBar.querySelector('#lastlayer').style.color = "white";
        navBar.querySelector('#icon2').style.border = "0px";
        navBar.querySelector('#icon3').style.border = "0px";
        navBar.querySelector('#icon4').style.border = "0px";
        setRight(true)
        setLeft(false)
    }

    const selectedDocker = () => {
        let navBar = document.querySelector(".chapter-nav");
        navBar.querySelector('#icon1').style.border = "2px solid violet";
        navBar.querySelector('#icon1').style.borderRadius = "30%";
        navBar.querySelector('#start').style.color = "white";
        navBar.querySelector('#lastlayer').style.color = "white";
        navBar.querySelector('#icon2').style.border = "0px";
        navBar.querySelector('#icon3').style.border = "0px";
        navBar.querySelector('#icon4').style.border = "0px";
        setRight(false)
    }

    const selectedFakeAccount = () => {
        let navBar = document.querySelector(".chapter-nav");
        navBar.querySelector('#icon2').style.border = "2px solid violet";
        navBar.querySelector('#icon2').style.borderRadius = "30%";
        navBar.querySelector('#start').style.color = "white";
        navBar.querySelector('#lastlayer').style.color = "white";
        navBar.querySelector('#icon1').style.border = "0px";
        navBar.querySelector('#icon3').style.border = "0px";
        navBar.querySelector('#icon4').style.border = "0px";
    }

    const selectedPortAnalyze = () => {
        let navBar = document.querySelector(".chapter-nav");
        navBar.querySelector('#icon3').style.border = "2px solid violet";
        navBar.querySelector('#icon3').style.borderRadius = "30%";
        navBar.querySelector('#start').style.color = "white";
        navBar.querySelector('#lastlayer').style.color = "white";
        navBar.querySelector('#icon1').style.border = "0px";
        navBar.querySelector('#icon2').style.border = "0px";
        navBar.querySelector('#icon4').style.border = "0px";
    }

    const selectedNotAccess = () => {
        let navBar = document.querySelector(".chapter-nav");
        navBar.querySelector('#icon4').style.border = "2px solid violet";
        navBar.querySelector('#icon4').style.borderRadius = "30%";
        navBar.querySelector('#start').style.color = "white";
        navBar.querySelector('#lastlayer').style.color = "white";
        navBar.querySelector('#icon2').style.border = "0px";
        navBar.querySelector('#icon3').style.border = "0px";
        navBar.querySelector('#icon1').style.border = "0px";
        setLeft(false)
    }

    const selectedLastLayer = () => {
        let navBar = document.querySelector(".chapter-nav");
        navBar.querySelector('#lastlayer').style.color = "violet";
        navBar.querySelector('#start').style.color = "white";
        navBar.querySelector('#icon1').style.border = "0px";
        navBar.querySelector('#icon2').style.border = "0px";
        navBar.querySelector('#icon3').style.border = "0px";
        navBar.querySelector('#icon4').style.border = "0px";
        setLeft(true)
        setRight(false)
    }

    return (
        <div>
            <div className="Rabbit" >
                <Parallax pages={8} style={{ top: '0', left: '0' }} horizontal className='parallax'>
                    <ParallaxLayer offset={0} speed={0} >
                        <div className='layer animation' id='layer1'>
                            <h1>Доверь свой ПК агенту OEDA</h1>
                        </div>
                    </ParallaxLayer>
                    <ParallaxLayer offset={0} speed={0}>
                        <div className='layer animation' id='layer1-2'></div>
                    </ParallaxLayer>
                    <ParallaxLayer offset={0} speed={0}>
                        <div className='layer animation' id='layer1-3'></div>
                    </ParallaxLayer>
                    <ParallaxLayer offset={0} speed={0}>
                        <div className='layer animation' id='layer1-4'></div>
                    </ParallaxLayer>
                    <ParallaxLayer offset={0} speed={0}>
                        <div className='layer animation' id='layer1-5'></div>
                    </ParallaxLayer>
                    <ParallaxLayer offset={0} speed={0}>
                        <div className='layer animation' id='layer1-6'>
                            <h3>
                                Какая-то кричащая фраза. Какая-то кричащая фраза.
                            </h3>
                        </div>
                    </ParallaxLayer>
                    <ParallaxLayer offset={0} speed={0}>
                        <div className='layer animation' id='layer1-1'></div>
                    </ParallaxLayer>
                    <ParallaxLayer offset={1} speed={0}>
                        <div className='layer animation' id='layer4'><span id='href1'></span></div>
                    </ParallaxLayer>
                    <ParallaxLayer offset={2} speed={0}>
                        <div className='layer animation' id='layer6'></div>
                    </ParallaxLayer>
                    <ParallaxLayer offset={3} speed={0}>
                        <div className='layer animation' id='layer10'><span id='href2'></span></div>
                    </ParallaxLayer>
                    <ParallaxLayer offset={4} speed={0}>
                        <div className='layer animation' id='layer5'><span id='href3'></span></div>
                    </ParallaxLayer>
                    <ParallaxLayer offset={5} speed={0}>
                        <div className='layer animation' id='layer7'><span id='href4'></span></div>
                    </ParallaxLayer>
                    <ParallaxLayer offset={6} speed={0}>
                        <div className='layer animation' id='layer11'></div>
                    </ParallaxLayer>
                    <ParallaxLayer offset={7} speed={0}>
                        <div className='layer animation' id='layer8'>
                            <div id='contactText'>
                                <h2>Контактная информация</h2>
                                <h3>Какая-то контактная информация.Какая-то контактная информация.
                                    Какая-то контактная информация.Какая-то контактная информация.
                                    Какая-то контактная информация.Какая-то контактная информация.
                                    Какая-то контактная информация.Какая-то контактная информация.
                                    Какая-то контактная информация.Какая-то контактная информация.
                                </h3>
                                <h3>Какая-то контактная информация.Какая-то контактная информация.
                                    Какая-то контактная информация.Какая-то контактная информация.
                                    Какая-то контактная информация.Какая-то контактная информация.
                                    Какая-то контактная информация.Какая-то контактная информация.
                                    Какая-то контактная информация.Какая-то контактная информация.
                                </h3>
                            </div>
                            <div className='downloadBorder'>
                                <h1>Установка</h1>
                                <img id='gitIcon' src={git} />
                            </div>
                            <img id='logo1' src={icon1} />
                            <img id='logo2' src={icon2} />
                        </div>
                    </ParallaxLayer>
                    <ParallaxLayer offset={5} speed={0}>
                        <div className='layer animation switch' style={{ backgroundPosition: "left", left: "45%" }} id='switch2'>
                            <h1 style={{ marginLeft: "4%" }}>Название раздела</h1>
                        </div>
                    </ParallaxLayer>
                    <ParallaxLayer offset={7} speed={0}>
                        <div className='layer animation switch' style={{ right: "43.5%" }} id='switch3'>
                            <h1 style={{ marginLeft: "80%" }}>Название раздела</h1>
                        </div>
                    </ParallaxLayer>
                    <ParallaxLayer offset={1} speed={0.1}>
                        <div className='layer animation' id='switch1'>
                            <h1 style={{ marginLeft: "23%" }}>Название раздела</h1>
                        </div>
                    </ParallaxLayer>
                    <ParallaxLayer offset={4} speed={0.4} onMouseOver={selectedNotAccess}>
                        <div className='layer animation' id='notAccess'>
                            <div id='notAccessText'>
                                <h2>
                                    Какой-то текст о несанкционированном доступе.
                                    Какой-то текст о несанкционированном доступе.
                                    Какой-то текст о несанкционированном доступе.
                                    Какой-то текст о несанкционированном доступе.
                                    Какой-то текст о несанкционированном доступе.
                                </h2>
                            </div>
                            <img src={access} alt='Unauthorized Access' />
                            <h1 style={{ marginLeft: "56%", color: "white" }} className='neon'>Несанкционированный доступ</h1>
                        </div>
                    </ParallaxLayer>
                    <ParallaxLayer offset={1} speed={-0.2}>
                        <div className='layer animation' id='dockerContainer' onMouseOver={selectedDocker}>
                            <img src={docker} alt='Docker Container' />
                            <h1 style={{ marginLeft: "37.5%", color: "grey" }} className='neon'>Докер-контейнеры</h1>
                            <div id='dockerText'>
                                <span id='ground8' />
                                <h2>Какой-то текст о докерах.
                                    Какой-то текст о докерах.
                                    Какой-то текст о докерах.
                                    Какой-то текст о докерах.
                                </h2>
                            </div>
                        </div>
                    </ParallaxLayer>
                    <ParallaxLayer offset={3} speed={0.1} onMouseOver={selectedPortAnalyze}>
                        <div className='layer animation' id='portAnalyze'>
                            <img src={port} alt='Port Analyze' />
                            <h1 style={{ marginLeft: "74%" }} className='neon'>Анализ портов</h1>
                            <div id='portText'>
                                <h2>Какой-то текст об анализе портов.
                                    Какой-то текст об анализе портов.
                                    Какой-то текст об анализе портов.
                                    Какой-то текст об анализе портов.
                                </h2>
                            </div>
                        </div>
                    </ParallaxLayer>
                    <ParallaxLayer offset={2} speed={-0.1}>
                        <div className='layer animation' id='fakeAccount' onMouseOver={selectedFakeAccount}>
                            <img src={account} alt='Fake Account' />
                            <h1 style={{ marginLeft: "37.5%", color: "violet" }} className='neon'>Левые аккаунты</h1>
                            <div id='fakeAccountText'>
                                <h2>Какой-то текст о левых аккаунтах.
                                    Какой-то текст о левых аккаунтах.
                                    Какой-то текст о левых аккаунтах.
                                    Какой-то текст о левых аккаунтах.
                                </h2>
                            </div>
                        </div>
                    </ParallaxLayer>

                    <ParallaxLayer offset={5} speed={0.2}>
                        <div className='layer animation' id='back1'>
                            <h3>
                                Какой-то текст.Какой-то текст.
                                Какой-то текст.Какой-то текст.
                                Какой-то текст.Какой-то текст.
                            </h3>
                        </div>
                    </ParallaxLayer>
                    <ParallaxLayer offset={5} speed={0.1}>
                        <div className='layer animation' id='back2'>
                            <h3>
                                Какой-то текст.Какой-то текст.
                                Какой-то текст.Какой-то текст.
                                Какой-то текст.Какой-то текст.
                            </h3>
                        </div>
                    </ParallaxLayer>
                    <ParallaxLayer offset={6} speed={-0.2}>
                        <div className='layer animation' id='back3'>
                            <h3>
                                Какой-то текст.Какой-то текст.
                                Какой-то текст.Какой-то текст.
                                Какой-то текст.Какой-то текст.
                            </h3>
                        </div>
                    </ParallaxLayer>
                    <ParallaxLayer offset={5} speed={0}>
                        <div className='layer animation' id='back4'>
                            <h3>
                                Какой-то текст.Какой-то текст.
                                Какой-то текст.Какой-то текст.
                                Какой-то текст.Какой-то текст.
                            </h3>
                        </div>
                    </ParallaxLayer>
                    <ParallaxLayer offset={6} speed={-0.1}>
                        <div className='layer animation' id='back5'>
                            <h3>
                                Какой-то текст.Какой-то текст.
                                Какой-то текст.Какой-то текст.
                                Какой-то текст.Какой-то текст.
                            </h3>
                        </div>
                    </ParallaxLayer>
                    <ParallaxLayer offset={7} speed={0} onMouseOver={selectedLastLayer}>
                        <a href='https://github.com/Vordazing/Agent-OEDA' className='gitLink'>https://github.com/Vordazing/Agent-OEDA</a>
                    </ParallaxLayer>
                    <ParallaxLayer speed={0.3} onMouseOver={selectedStart}>
                        <div className='layer animation'>
                            <img className='logo' src={logo} alt='OEDA' />
                        </div>
                    </ParallaxLayer>
                </Parallax>
                <NavBar />
                {rightArrow ? <img className='slideRight' src={arrow} alt='slide right' /> : <></>}
                {leftArrow ? <img className='slideLeft' src={arrow2} alt='slide left' /> : <></>}
            </div>
        </div>
    );
}

export default Rabbit;
