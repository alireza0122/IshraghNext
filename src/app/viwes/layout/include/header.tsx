import Link from "next/link";
import Image from "next/image";

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


    return (

        <>

            <div className="sticky top-0 z-[10000] bg-white shadow  w-full py-2 xl:px-[292px] px-6  border-b border-[#F9D325] ">

                <ul className={'flex xl:grid grid-cols-12 xl:justify-center justify-between items-center gap-2 '}>

                    <Link className={' xl:col-span-2'} href={'/'}>

                        <li className={'  gap-0 items-center  hidden lg:flex'}>
                            <Image width={100} height={100} className="w-full  h-[40px]" src="/img/navicon.svg"
                                   alt="navicon"/>
                            <Image width={100} height={100} className={'h-[27px] xl:w-auto  '} src="/img/navbrand.svg" alt="navbrand"/>
                        </li>
                        <li className={'lg:hidden'}>
                            <Image src={'/img/logo-responsive.svg'} alt={'vuevuerufhvu'} width={200} height={200} />
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

                    <Link className={' xl:col-span-2'} href={'#'}>
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

                </ul>
            </div>


        </>

    );
}

export default Header;