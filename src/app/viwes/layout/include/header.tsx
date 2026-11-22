'use client'
import Link from "next/link";
import Image from "next/image";
import {useState} from "react";

function Header() {


    const dataHeader = [
        {title: 'صفحه اصلی', href: '/'},
        {title: 'ارکان مرکز', href: '/',},
        {title: 'ثبت ایده', href: '/submit'},
        {title: 'محصولات', href: '/show'},
        {title: 'تیم ها', href: '/team'},
        {title: 'رزرو', href: '/visit'},
        {title: 'درباره ما', href: '/abouts'},

    ]
    const dataHeaderRespos = [
        {title: 'ثبت ایده', href: '/submit'},
        {title: 'محصولات', href: '/show'},
        {title: 'تیم ها', href: '/team'},
        {title: 'رزرو', href: '/visit'},
        {title: 'درباره ما', href: '/abouts'},

    ]

    const [show, setShow] = useState(false);


    return (

        <>

            <div
                className="sticky top-0 z-[10000] bg-white border-b-[3px] lg:border-b-[2px]   w-full py-[7px] xl:px-[292px] px-[21px]  border-b border-[#F9D325] ">

                <ul className={'flex xl:grid grid-cols-12 xl:justify-center justify-between items-center gap-2 '}>

                    <Link className={' xl:col-span-2'} href={'/'}>

                        <li className={'gap-2 items-center  hidden lg:flex'}>
                            <Image width={100} height={100} className="w-full  h-[40px] " src="/img/navicon.svg"
                                   alt="navicon"/>
                            <Image width={100} height={100} className={'h-[27px] xl:w-auto  '} src="/img/navbrand.svg"
                                   alt="navbrand"/>
                        </li>
                        <li className={'lg:hidden flex items-center gap-2'}>
                            <div
                                className="border-1 rounded-[15px] border-[#F0F0F7] w-[40px] items-center h-[40px] p-1 flex justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                     fill="none">
                                    <g clipPath="url(#clip0_347_145)">
                                        <path
                                            className={'rounded-full'}
                                            d="M19.1667 9.16602H0.833333C0.373096 9.16602 0 9.53911 0 9.99935C0 10.4596 0.373096 10.8327 0.833333 10.8327H19.1667C19.6269 10.8327 20 10.4596 20 9.99935C20 9.53911 19.6269 9.16602 19.1667 9.16602Z"
                                            fill="#373F47"></path>
                                        <path
                                            className={'rounded-full'}
                                            d="M19.1667 3.33398H0.833333C0.373096 3.33398 0 3.70708 0 4.16732C0 4.62756 0.373096 5.00065 0.833333 5.00065H19.1667C19.6269 5.00065 20 4.62756 20 4.16732C20 3.70708 19.6269 3.33398 19.1667 3.33398Z"
                                            fill="#373F47"></path>
                                        <path
                                            className={'rounded-full'}
                                            d="M19.1667 15H0.833333C0.373096 15 0 15.3731 0 15.8333C0 16.2936 0.373096 16.6667 0.833333 16.6667H19.1667C19.6269 16.6667 20 16.2936 20 15.8333C20 15.3731 19.6269 15 19.1667 15Z"
                                            fill="#373F47"></path>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_347_145">
                                            <rect width="20" height="20" fill="white"></rect>
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                            <div className="h-[40px]">
                                <Image className={'w-fit p-1'} src={'/img/logo-responsive.svg'} alt={'vuevuerufhvu'}
                                       width={150} height={150}/>
                            </div>
                        </li>

                    </Link>

                    <nav className="hidden lg:flex col-span-8" aria-label="منوی اصلی">
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

                    <Link className={' xl:col-span-2 hidden lg:block'} href={'#'}>
                        <li>
                            <div className=" flex justify-end items-center">
                                <div className="flex gap-3 border-1 items-center  border-[#F0F0F7] rounded-2xl  p-2">
                                    <Image className={'w-[20px]'} width={200} height={200}
                                           src="/img/fi-rr-sign-in-alt.svg" alt="sign"/>
                                    <span>ورود</span>
                                </div>
                            </div>
                        </li>
                    </Link>


                    <Link className={' xl:col-span-2 lg:hidden'} href={'#'}>
                        <li>
                            <div
                                className=" w-[40px] border-1 rounded-[15px] border-[#F0F0F7] flex justify-center p-2 items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                     fill="none">
                                    <g clipPath="url(#clip0_347_136)">
                                        <path
                                            d="M10 10C10.9889 10 11.9556 9.70676 12.7779 9.15735C13.6001 8.60794 14.241 7.82705 14.6194 6.91342C14.9978 5.99979 15.0969 4.99446 14.9039 4.02455C14.711 3.05465 14.2348 2.16373 13.5355 1.46447C12.8363 0.765206 11.9454 0.289002 10.9755 0.0960758C10.0055 -0.0968503 9.00021 0.00216643 8.08658 0.380605C7.17295 0.759043 6.39206 1.39991 5.84265 2.22215C5.29324 3.0444 5 4.0111 5 5C5.00132 6.32568 5.52853 7.59668 6.46593 8.53407C7.40332 9.47147 8.67432 9.99868 10 10ZM10 1.66667C10.6593 1.66667 11.3037 1.86217 11.8519 2.22844C12.4001 2.59471 12.8273 3.1153 13.0796 3.72439C13.3319 4.33348 13.3979 5.0037 13.2693 5.6503C13.1407 6.29691 12.8232 6.89085 12.357 7.35703C11.8908 7.8232 11.2969 8.14067 10.6503 8.26929C10.0037 8.3979 9.33348 8.33189 8.72439 8.0796C8.1153 7.82731 7.59471 7.40007 7.22843 6.8519C6.86216 6.30374 6.66667 5.65927 6.66667 5C6.66667 4.11595 7.01786 3.2681 7.64298 2.64298C8.2681 2.01786 9.11594 1.66667 10 1.66667Z"
                                            fill="#373F47"></path>
                                        <path
                                            d="M10 11.666C8.01155 11.6682 6.10518 12.4591 4.69914 13.8652C3.29309 15.2712 2.50221 17.1776 2.5 19.166C2.5 19.387 2.5878 19.599 2.74408 19.7553C2.90036 19.9116 3.11232 19.9993 3.33333 19.9993C3.55435 19.9993 3.76631 19.9116 3.92259 19.7553C4.07887 19.599 4.16667 19.387 4.16667 19.166C4.16667 17.6189 4.78125 16.1352 5.87521 15.0412C6.96917 13.9473 8.4529 13.3327 10 13.3327C11.5471 13.3327 13.0308 13.9473 14.1248 15.0412C15.2188 16.1352 15.8333 17.6189 15.8333 19.166C15.8333 19.387 15.9211 19.599 16.0774 19.7553C16.2337 19.9116 16.4457 19.9993 16.6667 19.9993C16.8877 19.9993 17.0996 19.9116 17.2559 19.7553C17.4122 19.599 17.5 19.387 17.5 19.166C17.4978 17.1776 16.7069 15.2712 15.3009 13.8652C13.8948 12.4591 11.9884 11.6682 10 11.666Z"
                                            fill="#373F47"></path>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_347_136">
                                            <rect width="20" height="20" fill="white"></rect>
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                        </li>
                    </Link>

                </ul>
            </div>


            <div className="fixed rounded-l-[15px]  w-[80%]  bg-white z-[10001] px-[14px] py-[6px] h-full">
                <ul className={'   rounded-[8px]  flex flex-col gap-3   '}>

                    <Link href={"#"} className={'flex justify-between items-center'}>
                        <Image className={'w-[139px]'} width={500} height={500} src="/img/logo-responsive.svg"
                               alt="navbrand"/>

                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                             id="responsive-side-bar-btn-close" viewBox="0 0 32 32" fill="none">
                            <rect width="32" height="32" rx="8" fill="#F0F0F7"></rect>
                            <path
                                d="M21.0001 10.9998C20.8438 10.8436 20.6319 10.7559 20.4109 10.7559C20.19 10.7559 19.978 10.8436 19.8218 10.9998L16.0001 14.8215L12.1784 10.9998C12.0222 10.8436 11.8102 10.7559 11.5893 10.7559C11.3683 10.7559 11.1564 10.8436 11.0001 10.9998C10.8439 11.1561 10.7561 11.368 10.7561 11.589C10.7561 11.81 10.8439 12.0219 11.0001 12.1782L14.8218 15.9998L11.0001 19.8215C10.8439 19.9778 10.7561 20.1897 10.7561 20.4107C10.7561 20.6317 10.8439 20.8436 11.0001 20.9998C11.1564 21.1561 11.3683 21.2438 11.5893 21.2438C11.8102 21.2438 12.0222 21.1561 12.1784 20.9998L16.0001 17.1782L19.8218 20.9998C19.978 21.1561 20.19 21.2438 20.4109 21.2438C20.6319 21.2438 20.8438 21.1561 21.0001 20.9998C21.1563 20.8436 21.2441 20.6317 21.2441 20.4107C21.2441 20.1897 21.1563 19.9778 21.0001 19.8215L17.1784 15.9998L21.0001 12.1782C21.1563 12.0219 21.2441 11.81 21.2441 11.589C21.2441 11.368 21.1563 11.1561 21.0001 10.9998Z"
                                fill="#373F47"></path>
                        </svg>
                    </Link>



                    <li className="  flex justify-center my-4">
                        <svg xmlns="http://www.w3.org/2000/svg" height="5" viewBox="0 0 318 5" fill="none">
                            <rect className={'w-100 rounded-full'} height="5" rx="2.5" fill="#F0F0F7"></rect>
                        </svg>
                    </li>

                    <Link
                        className=" w-fit border-1 rounded-[15px] border-[#F0F0F7] flex justify-center p-2 items-center"
                        href={'#'}>

                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                             fill="none">
                            <g clipPath="url(#clip0_347_136)">
                                <path
                                    d="M10 10C10.9889 10 11.9556 9.70676 12.7779 9.15735C13.6001 8.60794 14.241 7.82705 14.6194 6.91342C14.9978 5.99979 15.0969 4.99446 14.9039 4.02455C14.711 3.05465 14.2348 2.16373 13.5355 1.46447C12.8363 0.765206 11.9454 0.289002 10.9755 0.0960758C10.0055 -0.0968503 9.00021 0.00216643 8.08658 0.380605C7.17295 0.759043 6.39206 1.39991 5.84265 2.22215C5.29324 3.0444 5 4.0111 5 5C5.00132 6.32568 5.52853 7.59668 6.46593 8.53407C7.40332 9.47147 8.67432 9.99868 10 10ZM10 1.66667C10.6593 1.66667 11.3037 1.86217 11.8519 2.22844C12.4001 2.59471 12.8273 3.1153 13.0796 3.72439C13.3319 4.33348 13.3979 5.0037 13.2693 5.6503C13.1407 6.29691 12.8232 6.89085 12.357 7.35703C11.8908 7.8232 11.2969 8.14067 10.6503 8.26929C10.0037 8.3979 9.33348 8.33189 8.72439 8.0796C8.1153 7.82731 7.59471 7.40007 7.22843 6.8519C6.86216 6.30374 6.66667 5.65927 6.66667 5C6.66667 4.11595 7.01786 3.2681 7.64298 2.64298C8.2681 2.01786 9.11594 1.66667 10 1.66667Z"
                                    fill="#373F47"></path>
                                <path
                                    d="M10 11.666C8.01155 11.6682 6.10518 12.4591 4.69914 13.8652C3.29309 15.2712 2.50221 17.1776 2.5 19.166C2.5 19.387 2.5878 19.599 2.74408 19.7553C2.90036 19.9116 3.11232 19.9993 3.33333 19.9993C3.55435 19.9993 3.76631 19.9116 3.92259 19.7553C4.07887 19.599 4.16667 19.387 4.16667 19.166C4.16667 17.6189 4.78125 16.1352 5.87521 15.0412C6.96917 13.9473 8.4529 13.3327 10 13.3327C11.5471 13.3327 13.0308 13.9473 14.1248 15.0412C15.2188 16.1352 15.8333 17.6189 15.8333 19.166C15.8333 19.387 15.9211 19.599 16.0774 19.7553C16.2337 19.9116 16.4457 19.9993 16.6667 19.9993C16.8877 19.9993 17.0996 19.9116 17.2559 19.7553C17.4122 19.599 17.5 19.387 17.5 19.166C17.4978 17.1776 16.7069 15.2712 15.3009 13.8652C13.8948 12.4591 11.9884 11.6682 10 11.666Z"
                                    fill="#373F47"></path>
                            </g>
                            <defs>
                                <clipPath id="clip0_347_136">
                                    <rect width="20" height="20" fill="white"></rect>
                                </clipPath>
                            </defs>
                        </svg>
                        <span className={'font-[700]'}>وارد شوید</span>
                    </Link>
                    <Link href={'/'} className={'border-b-1 p-[14px] text-[16px]  border-[#F0F0F7]  '}>
                        <li className={'font-[700]'}>
                            ارکان مرکز
                        </li>
                    </Link>
                    <Link href={'/'} className={'border-b-1 p-[14px] text-[16px]  border-[#F0F0F7]  '}>
                        <li className={'font-[700]'}>
                            Customize Toolbar…
                        </li>
                    </Link>
                    {dataHeaderRespos.map((item, index) => (
                        <Link href={item.href} className={'border-b-1 p-[14px] text-[16px]  border-[#F0F0F7]  '}
                              key={index}>
                            <li className={'font-[700]'}>
                                {item.title}
                            </li>
                        </Link>
                    ))}


                </ul>

            </div>

        </>

    );
}

export default Header;