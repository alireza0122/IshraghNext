'use client'
import Link from "next/link";
import Image from "next/image";
import {useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronDown} from "@fortawesome/free-solid-svg-icons";

const dataHeader = [
    {title: 'صفحه اصلی', href: '/'},
    {title: 'ارکان مرکز', href: '/'},
    {title: 'ثبت ایده', href: '/submit'},
    {title: 'محصولات', href: '/show'},
    {title: 'تیم ها', href: '/team'},
    {title: 'رزرو', href: '/visit'},
    {title: 'درباره ما', href: '/abouts'},
];

const dataHeaderRespos = [
    {title: 'ثبت ایده', href: '/submit'},
    {title: 'محصولات', href: '/show'},
    {title: 'تیم ها', href: '/team'},
    {title: 'رزرو', href: '/visit'},
    {title: 'درباره ما', href: '/abouts'},
];

const dataarkanRespos = [
    {title: "فانوس", href: "https://app.fanoosts.ir/", color: "#159B80"},
    {title: "کاریزنگار", href: "https://kariznegar.ir/", color: "#F07168"},
    {title: "سه دال", href: "https://ishragh.ir/threedals", color: "#3C42A0"},
    {title: "چارسوق", href: "https://ishragh.ir/foursoghs/mbadi", color: "#00C0D1"},
];

function UserIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
                d="M10 10C10.9889 10 11.9556 9.70676 12.7779 9.15735C13.6001 8.60794 14.241 7.82705 14.6194 6.91342C14.9978 5.99979 15.0969 4.99446 14.9039 4.02455C14.711 3.05465 14.2348 2.16373 13.5355 1.46447C12.8363 0.765206 11.9454 0.289002 10.9755 0.0960758C10.0055 -0.0968503 9.00021 0.00216643 8.08658 0.380605C7.17295 0.759043 6.39206 1.39991 5.84265 2.22215C5.29324 3.0444 5 4.0111 5 5C5.00132 6.32568 5.52853 7.59668 6.46593 8.53407C7.40332 9.47147 8.67432 9.99868 10 10ZM10 1.66667C10.6593 1.66667 11.3037 1.86217 11.8519 2.22844C12.4001 2.59471 12.8273 3.1153 13.0796 3.72439C13.3319 4.33348 13.3979 5.0037 13.2693 5.6503C13.1407 6.29691 12.8232 6.89085 12.357 7.35703C11.8908 7.8232 11.2969 8.14067 10.6503 8.26929C10.0037 8.3979 9.33348 8.33189 8.72439 8.0796C8.1153 7.82731 7.59471 7.40007 7.22843 6.8519C6.86216 6.30374 6.66667 5.65927 6.66667 5C6.66667 4.11595 7.01786 3.2681 7.64298 2.64298C8.2681 2.01786 9.11594 1.66667 10 1.66667Z"
                fill="#373F47"/>
            <path
                d="M10 11.666C8.01155 11.6682 6.10518 12.4591 4.69914 13.8652C3.29309 15.2712 2.50221 17.1776 2.5 19.166C2.5 19.387 2.5878 19.599 2.74408 19.7553C2.90036 19.9116 3.11232 19.9993 3.33333 19.9993C3.55435 19.9993 3.76631 19.9116 3.92259 19.7553C4.07887 19.599 4.16667 19.387 4.16667 19.166C4.16667 17.6189 4.78125 16.1352 5.87521 15.0412C6.96917 13.9473 8.4529 13.3327 10 13.3327C11.5471 13.3327 13.0308 13.9473 14.1248 15.0412C15.2188 16.1352 15.8333 17.6189 15.8333 19.166C15.8333 19.387 15.9211 19.599 16.0774 19.7553C16.2337 19.9116 16.4457 19.9993 16.6667 19.9993C16.8877 19.9993 17.0996 19.9116 17.2559 19.7553C17.4122 19.599 17.5 19.387 17.5 19.166C17.4978 17.1776 16.7069 15.2712 15.3009 13.8652C13.8948 12.4591 11.9884 11.6682 10 11.666Z"
                fill="#373F47"/>
        </svg>
    );
}

function HamburgerIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
                d="M19.1667 9.16602H0.833333C0.373096 9.16602 0 9.53911 0 9.99935C0 10.4596 0.373096 10.8327 0.833333 10.8327H19.1667C19.6269 10.8327 20 10.4596 20 9.99935C20 9.53911 19.6269 9.16602 19.1667 9.16602Z"
                fill="#373F47"/>
            <path
                d="M19.1667 3.33398H0.833333C0.373096 3.33398 0 3.70708 0 4.16732C0 4.62756 0.373096 5.00065 0.833333 5.00065H19.1667C19.6269 5.00065 20 4.62756 20 4.16732C20 3.70708 19.6269 3.33398 19.1667 3.33398Z"
                fill="#373F47"/>
            <path
                d="M19.1667 15H0.833333C0.373096 15 0 15.3731 0 15.8333C0 16.2936 0.373096 16.6667 0.833333 16.6667H19.1667C19.6269 16.6667 20 16.2936 20 15.8333C20 15.3731 19.6269 15 19.1667 15Z"
                fill="#373F47"/>
        </svg>
    );
}

function Header() {
    const [show, setShow] = useState(false);
    const [arkanOpen, setArkanOpen] = useState(false);

    useEffect(() => {
        const onResize = () => {
            if (window.innerWidth >= 1024) {
                setShow(false);
                setArkanOpen(false);
            }
        };
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, []);

    const closeMenu = () => {
        setShow(false);
        setArkanOpen(false);
    };

    return (
        <>
            <header
                className="sticky top-0 z-[10001] bg-white border-b-[3px] lg:border-b-[2px] w-full py-[7px]  xl:px-[228px]    px-[21px] border-[#F9D325]">
                <ul className="flex lg:grid grid-cols-12 xl:justify-center  justify-between lg:justify-start items-center gap-2">

                    <li className="hidden lg:flex  lg:col-span-2">
                        <Link href="/" className="flex gap-2 items-center">
                            <Image width={100} height={100} className="w-full h-[40px]" src="/img/navicon.svg"
                                   alt="navicon"/>
                            <Image width={100} height={100} className="h-[27px] xl:w-auto" src="/img/navbrand.svg"
                                   alt="navbrand"/>
                        </Link>
                    </li>

                    <li className="lg:hidden flex items-center gap-2">
                        <button
                            type="button"
                            onClick={() => setShow(true)}
                            aria-label="باز کردن منو"
                            aria-expanded={show}
                            className="cursor-pointer border border-[#F0F0F7] rounded-[15px] w-[40px] h-[40px] p-1 flex items-center justify-center"
                        >
                            <HamburgerIcon/>
                        </button>
                        <Link href="/" className="h-[40px]">
                            <Image className="w-fit p-1" src="/img/logo-responsive.svg" alt="logo"
                                   width={150} height={150}/>
                        </Link>
                    </li>

                    <li className="hidden lg:flex col-span-8">
                        <nav aria-label="منوی اصلی">
                            <ul className="flex items-center gap-1 xl:gap-3">
                                {dataHeader.map((item) => (
                                    <li key={item.title}>
                                        <Link
                                            href={item.href}
                                            className="block whitespace-nowrap rounded-lg px-2 xl:px-3 py-2 text-[13px] xl:text-[14px] hover:bg-gray-100 transition-colors"
                                        >
                                            {item.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </li>

                    <li className="lg:col-span-2 hidden lg:flex lg:justify-end ">
                        <Link href="#"
                              className="flex gap-3 border border-[#F0F0F7] items-center rounded-2xl p-2 w-fit">
                            <Image className="w-[20px]" width={200} height={200}
                                   src="/img/fi-rr-sign-in-alt.svg" alt="sign"/>
                            <span>ورود</span>
                        </Link>
                    </li>

                    <li className="lg:hidden">
                        <Link href="#" aria-label="ورود"
                              className="w-[40px] h-[40px] border border-[#F0F0F7] rounded-[15px] flex justify-center items-center">
                            <UserIcon/>
                        </Link>
                    </li>
                </ul>
            </header>

            <div
                onClick={closeMenu}
                className={`fixed inset-0 top-0 bg-black/1 backdrop-blur-lg z-[10000] lg:hidden transition-opacity duration-300 ${
                    show ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
            />

            <aside
                aria-hidden={!show}
                className={`fixed    h-full w-[80%]  w-[80%]   rounded-l-[15px] bg-white z-[10001] px-[14px] py-[6px]  lg:hidden transition-transform duration-300 ${
                    show ? "translate-x-0" : "translate-x-full"
                }`}
            >
                <ul className="flex flex-col gap-3">

                    <li className="flex justify-between items-center">
                        <Link href="/" onClick={closeMenu}>
                            <Image className="w-[139px]" width={500} height={500}
                                   src="/img/logo-responsive.svg" alt="navbrand"/>
                        </Link>

                        <button type="button" onClick={closeMenu} aria-label="بستن منو"
                                className="cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"
                                 fill="none">
                                <rect width="32" height="32" rx="8" fill="#F0F0F7"/>
                                <path
                                    d="M21.0001 10.9998C20.8438 10.8436 20.6319 10.7559 20.4109 10.7559C20.19 10.7559 19.978 10.8436 19.8218 10.9998L16.0001 14.8215L12.1784 10.9998C12.0222 10.8436 11.8102 10.7559 11.5893 10.7559C11.3683 10.7559 11.1564 10.8436 11.0001 10.9998C10.8439 11.1561 10.7561 11.368 10.7561 11.589C10.7561 11.81 10.8439 12.0219 11.0001 12.1782L14.8218 15.9998L11.0001 19.8215C10.8439 19.9778 10.7561 20.1897 10.7561 20.4107C10.7561 20.6317 10.8439 20.8436 11.0001 20.9998C11.1564 21.1561 11.3683 21.2438 11.5893 21.2438C11.8102 21.2438 12.0222 21.1561 12.1784 20.9998L16.0001 17.1782L19.8218 20.9998C19.978 21.1561 20.19 21.2438 20.4109 21.2438C20.6319 21.2438 20.8438 21.1561 21.0001 20.9998C21.1563 20.8436 21.2441 20.6317 21.2441 20.4107C21.2441 20.1897 21.1563 19.9778 21.0001 19.8215L17.1784 15.9998L21.0001 12.1782C21.1563 12.0219 21.2441 11.81 21.2441 11.589C21.2441 11.368 21.1563 11.1561 21.0001 10.9998Z"
                                    fill="#373F47"/>
                            </svg>
                        </button>
                    </li>

                    <li className="flex justify-center my-4">
                        <span className="block w-full h-[5px] rounded-full bg-[#F0F0F7]"/>
                    </li>

                    <li>
                        <Link href="#" onClick={closeMenu}
                              className="w-fit border border-[#F0F0F7] rounded-[15px] flex gap-2 justify-center p-2 items-center">
                            <UserIcon/>
                            <span className="font-[700]">وارد شوید</span>
                        </Link>
                    </li>

                    <li>
                        <Link href="/" onClick={closeMenu}
                              className="block border-b border-[#F0F0F7] p-[14px] text-[16px] font-[700]">
                            صفحه اصلی
                        </Link>
                    </li>

                    <li>
                        <button
                            type="button"
                            onClick={() => setArkanOpen(!arkanOpen)}
                            aria-expanded={arkanOpen}
                            className="w-full flex justify-between items-center border-b border-[#F0F0F7] p-[14px] text-[16px] cursor-pointer"
                        >
                            <span className="font-[700]">ارکان مرکز</span>
                            <span
                                className="bg-[#F0F0F7] rounded-full flex justify-center items-center p-1 w-[32px] h-[32px]">
                                <FontAwesomeIcon
                                    icon={faChevronDown}
                                    className={`text-[14px] transition-transform duration-300 ${
                                        arkanOpen ? "rotate-180" : ""
                                    }`}
                                />
                            </span>
                        </button>

                        <div
                            className={`grid transition-all duration-300 ${
                                arkanOpen ? "grid-rows-[1fr] mt-2" : "grid-rows-[0fr]"
                            }`}
                        >
                            <div className="overflow-hidden">
                                <div className="border border-[#F0F0F7] rounded-[10px] flex flex-col p-4">
                                    {dataarkanRespos.map((item) => (
                                        <Link
                                            href={item.href}
                                            key={item.title}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            style={{color: item.color}}
                                            className="my-2 flex items-center gap-2 text-[16px] font-[400]"
                                        >
                                            <span
                                                style={{background: item.color}}
                                                className="inline-block w-[10px] h-[10px] rounded-full shrink-0"
                                            />
                                            {item.title}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </li>
                    {dataHeaderRespos.map((item) => (
                        <li key={item.title}>
                            <Link
                                href={item.href}
                                onClick={closeMenu}
                                className="block border-b border-[#F0F0F7] p-[14px] text-[16px] font-[700]"
                            >
                                {item.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </aside>
        </>
    );
}

export default Header;