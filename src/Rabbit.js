import './rabbit.css';
import React, { useEffect, useState, useRef } from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import krolik from './images/krolik2.gif'
import logo from "./images/logotype.png"
import docker from "./images/docker.png"
import admin from './images/port.png'
import account from './images/leftAccount.png'
import serv from './images/access.png'
import git from './images/github-icon.png'
import icon1 from './images/icon1.png'
import icon2 from './images/icon2.png'
import icon3 from './images/icon3.png'
import NavBar from './components/navBar';
import arrow from './images/klipartz.png'
import arrow2 from './images/arrow.png'

function Rabbit() {
    const [rightHovering, setRightHovering] = useState(false);
    const [leftHovering, setLeftHovering] = useState(false);
    const [progress, setProgress] = useState(0.1);
    const [rightArrow, setRight] = useState(true);
    const [leftArrow, setLeft] = useState(false);

    const parallaxRef = useRef();

    const selectedStart = () => {
        let navBar = document.querySelector(".chapter-nav");
        navBar.querySelector('#start').style.color = "violet";
        navBar.querySelector('#icon1').style.border = "0px";
        navBar.querySelector('#lastlayer').style.color = "white";
        navBar.querySelector('#icon2').style.border = "0px";
        navBar.querySelector('#icon3').style.border = "0px";
        navBar.querySelector('#icon4').style.border = "0px";
        navBar.querySelector('#logoIcon').style.transform = "scale(0)";
        setRight(true)
        setLeft(false)
    }

    const selectedDocker = () => {
        //setProgress(1.1);
        let navBar = document.querySelector(".chapter-nav");
        navBar.querySelector('#icon1').style.border = "2px solid violet";
        navBar.querySelector('#icon1').style.borderRadius = "30%";
        navBar.querySelector('#start').style.color = "white";
        navBar.querySelector('#lastlayer').style.color = "white";
        navBar.querySelector('#icon2').style.border = "0px";
        navBar.querySelector('#icon3').style.border = "0px";
        navBar.querySelector('#icon4').style.border = "0px";
        navBar.querySelector('#logoIcon').style.transform = "scale(1)";
        setLeft(true)
    }

    const selectedMonitorer = () => {
        //setProgress(2.7);
        let navBar = document.querySelector(".chapter-nav");
        navBar.querySelector('#icon2').style.border = "2px solid violet";
        navBar.querySelector('#icon2').style.borderRadius = "30%";
        navBar.querySelector('#start').style.color = "white";
        navBar.querySelector('#lastlayer').style.color = "white";
        navBar.querySelector('#icon1').style.border = "0px";
        navBar.querySelector('#icon3').style.border = "0px";
        navBar.querySelector('#icon4').style.border = "0px";
        navBar.querySelector('#logoIcon').style.transform = "scale(1)";
    }

    const selectedAdmin = () => {
        //setProgress(3.7);
        let navBar = document.querySelector(".chapter-nav");
        navBar.querySelector('#icon3').style.border = "2px solid violet";
        navBar.querySelector('#icon3').style.borderRadius = "30%";
        navBar.querySelector('#start').style.color = "white";
        navBar.querySelector('#lastlayer').style.color = "white";
        navBar.querySelector('#icon1').style.border = "0px";
        navBar.querySelector('#icon2').style.border = "0px";
        navBar.querySelector('#icon4').style.border = "0px";
        navBar.querySelector('#logoIcon').style.transform = "scale(1)";
    }

    const selectedServers = () => {
        //setProgress(4.7);
        let navBar = document.querySelector(".chapter-nav");
        navBar.querySelector('#icon4').style.border = "2px solid violet";
        navBar.querySelector('#icon4').style.borderRadius = "30%";
        navBar.querySelector('#start').style.color = "white";
        navBar.querySelector('#lastlayer').style.color = "white";
        navBar.querySelector('#icon2').style.border = "0px";
        navBar.querySelector('#icon3').style.border = "0px";
        navBar.querySelector('#icon1').style.border = "0px";
        navBar.querySelector('#logoIcon').style.transform = "scale(1)";
    }

    const selectedLastLayer = () => {
        //setProgress(7.7);
        let navBar = document.querySelector(".chapter-nav");
        navBar.querySelector('#lastlayer').style.color = "violet";
        navBar.querySelector('#start').style.color = "white";
        navBar.querySelector('#icon1').style.border = "0px";
        navBar.querySelector('#icon2').style.border = "0px";
        navBar.querySelector('#icon3').style.border = "0px";
        navBar.querySelector('#icon4').style.border = "0px";
        navBar.querySelector('#logoIcon').style.transform = "scale(1)";
        setLeft(true)
        setRight(false)
    }

    const scrollRight = () => {
        parallaxRef.current.scrollTo(progress);
        setProgress(progress + 0.1);
    }
    const scrollLeft = () => {
        parallaxRef.current.scrollTo(progress);
        setProgress(progress - 0.1);
    }

    useEffect(() => {
        let intervalId;
        if (rightHovering) {
            intervalId = setTimeout(() => {
                scrollRight()
            }, 100);
        }

        if (leftHovering) {
            intervalId = setTimeout(() => {
                scrollLeft()
            }, 100);
        }

        return () => {
            clearTimeout(intervalId);
        };
    }, [rightHovering, leftHovering, progress]);

    /*useEffect(() => {
        if (rightHovering) {
            scrollRight();
        }
        if (leftHovering) {
            scrollLeft();
        }

    }, [rightHovering, leftHovering]);*/

    return (
        <div>
            <div className="Rabbit" >
                <Parallax ref={parallaxRef} pages={8} style={{ top: '0', left: '0' }} horizontal className='parallax' >
                    <ParallaxLayer offset={0} speed={0} >
                        <div className='layer animation' id='layer1'>
                            <h1 id='href0'>Containers Legalize</h1>
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
                                Для тех, кто хочет обезопасить разворачивание докер-сервисов.
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
                                <h2>IT Команда</h2>
                                <h3>
                                    Алексей - Координатор
                                </h3>
                                <h3>
                                    Мирон - Разработчик программного обеспечения
                                </h3>
                                <h3>
                                    Алёна - Технический специалист
                                </h3>
                                <h3>
                                    Вячеслав - Маркетолог
                                </h3>
                                <h3>
                                    Евгения - Продакт-менеджер
                                </h3>
                                <h3>
                                    Данила - Бизнес-аналитик
                                </h3>
                                <h3>
                                    Иван - Педант
                                </h3>
                                <h3>
                                    Сергей - Специалист по информационной безопасности
                                </h3>
                            </div>
                            <div className='downloadBorder'>
                                <h1>Установка</h1>
                                <img id='gitIcon' src={git} />
                            </div>
                            <img id='logo3' src={icon3} />
                            <img id='logo1' src={icon1} />
                            <img id='logo2' src={icon2} />
                        </div>
                    </ParallaxLayer>
                    <ParallaxLayer offset={5} speed={0}>
                        <div className='layer animation switch' style={{ backgroundPosition: "left", left: "45%" }} id='switch2'>
                            <h1 style={{ marginLeft: "4%" }}>Особенности</h1>
                        </div>
                    </ParallaxLayer>
                    <ParallaxLayer offset={7} speed={0}>
                        <div className='layer animation switch' style={{ right: "43.5%" }} id='switch3'>
                            <h1 style={{ marginLeft: "80%" }}>Ресурсы</h1>
                        </div>
                    </ParallaxLayer>
                    <ParallaxLayer offset={1} speed={0.1}>
                        <div className='layer animation switch' id='switch1'>
                            <h1 style={{ marginLeft: "14%" }}>Функционал</h1>
                        </div>
                    </ParallaxLayer>
                    <ParallaxLayer offset={4} speed={0.4} onMouseOver={selectedServers}>
                        <div className='layer animation' id='servers'>
                            <div id='serversText'>
                                <h2>
                                    LeCont базируется на определении списка легитимных контейнеров.
                                    При сборке докер-образов, hash-контейнеры и их мета-информация будут отправлены на спецелизированые сервера,
                                    такими как Registry and WhiteList.
                                </h2>
                            </div>
                            <img src={serv} alt='Servers' />
                            <h1 style={{ marginLeft: "54%", color: "white", bottom: "12%", position: "absolute" }} className='neon'>Сервера</h1>
                        </div>
                    </ParallaxLayer>
                    <ParallaxLayer offset={1} speed={-0.2}>
                        <div className='layer animation' id='dockerContainer' onMouseOver={selectedDocker}>
                            <img src={docker} alt='Docker Container' />
                            <h1 style={{ marginLeft: "39%", color: "grey" }} className='neon'>Докер-контейнер</h1>
                            <div id='dockerText'>
                                <span id='ground8' />
                                <h2>
                                    Основная цель приложения LeCont - мониторить загружаемые контейнеры на предмет легитимности в реальном времени.
                                    При загрузке докер-контейнера, образ проходит проверку.
                                    На основе прохождения этой проверки контейнер допускается к разворачиванию и использованию.
                                    В противном случае он будет удалён.
                                </h2>
                            </div>
                        </div>
                    </ParallaxLayer>
                    <ParallaxLayer offset={3} speed={0.1} onMouseOver={selectedAdmin}>
                        <div className='layer animation' id='administrator'>
                            <img src={admin} alt='Admin' />
                            <h1 style={{ marginLeft: "78%", color: "blue" }} className='neon'>Админ</h1>
                            <div id='administratorText'>
                                <h2>
                                    Cпециалистом по установке сервиса является администратор.
                                    Он настраивает CI/ID на разворачивание продукта.
                                    Задача администратора обозначить в полной мере, как продукт LeCont у пользователя будет взаимодействовать с сервером.
                                </h2>
                            </div>
                        </div>
                    </ParallaxLayer>
                    <ParallaxLayer offset={2} speed={-0.1}>
                        <div className='layer animation' id='monitorer' onMouseOver={selectedMonitorer}>
                            <img src={account} alt='Monitorer' />
                            <h1 style={{ marginLeft: "37.5%", color: "violet" }} className='neon'>Вектор развития</h1>
                            <div id='monitorerText'>
                                <h2>
                                    <ul>
                                        <li>Сканирование образов на уязвимости, вредоносное ПО и наличие секретов внутри контейнеров</li>
                                        <li>Интеграция с системами безопасности и уведомлений</li>
                                        <li>Проверка образов из реестра</li>
                                    </ul>
                                </h2>
                            </div>
                        </div>
                    </ParallaxLayer>

                    <ParallaxLayer offset={5} speed={0.2}>
                        <div className='layer animation' id='back1'>
                            <h3>
                                Наш продукт является полностью открытым.
                                Вы всегда сможете просмотреть код и убедиться в обеспечении безопасности ваших докер-контейнеров.
                            </h3>
                        </div>
                    </ParallaxLayer>
                    <ParallaxLayer offset={5} speed={0.1}>
                        <div className='layer animation' id='back2'>
                            <ul>
                                <h4>Основные черты</h4>
                                <li>Безопасное развертывание</li>
                                <li>Масштабируемость</li>
                                <li>Прозрачность</li>
                                <li>Уникальность для пользователя</li>
                                <li>Специальная инструкция настройки</li>
                            </ul>
                        </div>
                    </ParallaxLayer>
                    <ParallaxLayer offset={6} speed={-0.2}>
                        <div className='layer animation' id='back3'>
                            <ul>
                                <h4>Системные требования</h4>
                                <li>Операционная система Linux</li>
                                <li>ОЗУ в размере 4 ГБ</li>
                                <li>25 ГБ hdd/ssd</li>
                                <li>1 CPU</li>
                                <li>Официальный докер</li>
                            </ul>
                        </div>
                    </ParallaxLayer>
                    <ParallaxLayer offset={5} speed={0}>
                        <div className='layer animation' id='back4'>
                            <h3>
                                Являясь знатоком в сфере интернет-технологий, вы не понаслышке знаете, что опасность таится за каждым углом?
                                LeCont обеспечит разграничение загрузки небезопасных и легитимных контейнеров.
                                Лишь пройдя систему тестов неизвестный докер-контейнер будет установлен на ваш ПК с гарантией безопасности.
                            </h3>

                        </div>
                    </ParallaxLayer>
                    <ParallaxLayer offset={6} speed={-0.1}>
                        <div className='layer animation' id='back5'>
                            <h3>
                                Помните, LeCont задаёт старт в вашем контроле за докером.
                                Но вы сами совершенствуете свою защиту, классифицируя докер-контейнеры.
                                Настройте свою собственную систему надёжных и опасных сервисов!
                            </h3>
                        </div>
                    </ParallaxLayer>
                    <ParallaxLayer offset={7} speed={0} onMouseOver={selectedLastLayer}>
                        <a href='https://github.com/Vordazing/LeCont' className='gitLink'>https://github.com/Vordazing/LeCont</a>
                    </ParallaxLayer>
                    <ParallaxLayer speed={0.3} onMouseOver={selectedStart}>
                        <div className='layer animation'>
                            <img className='logo' src={logo} alt='OEDA' />
                        </div>
                    </ParallaxLayer>
                </Parallax>
                <NavBar parallax={parallaxRef} progress={setProgress} />
                {rightArrow ? <img className='slideRight' src={arrow} alt='slide right' onMouseOver={() => setRightHovering(true)} onMouseOut={() => setRightHovering(false)} /> : <></>}
                {leftArrow ? <img className='slideLeft' src={arrow2} alt='slide left' onMouseOver={() => setLeftHovering(true)} onMouseOut={() => setLeftHovering(false)} /> : <></>}
            </div>
        </div>
    );
}

export default Rabbit;
