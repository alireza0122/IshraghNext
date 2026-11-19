import Image from "next/image";
import "./home-dashboard.css";
type Service = { title: string; label: string; disabled?: boolean };
type Group = { logo: string; logoW: number; logoH: number; services: Service[] };

const groups: Group[] = [
    {
        logo: "هنری",
        logoW: 101,
        logoH: 40,
        services: [
            {title: "ریگار", label: "واحد تدوین"},
            {title: "دیریژنه", label: "استودیو"},
            {title: "خلاق مدیا", label: "رسانه"},
        ],
    },
    {
        logo: "خدمات",
        logoW: 121,
        logoH: 40,
        services: [
            {title: "صُفه", label: "اتاق گفت‌وگو"},
            {title: "کلاس", label: "تالار آموزشی"},
            {title: "پرچین", label: "سالن کنفرانس"},
        ],
    },
    {
        logo: "توسعه توان",
        logoW: 154,
        logoH: 36,
        services: [
            {title: "نارنج", label: "شبکه مشاوره"},
            {title: "ترنج", label: "کارگزاران", disabled: true},
            {title: "کوشک", label: "تور بازدید", disabled: true},
        ],
    },
];


export default function HomeDashboard() {
    return (
        <div className="grid grid-cols-12 mt-20  px-60    ">
            <div className="lg:col-span-3">
                <div className="flex justify-center items-center flex-col gap-4 lg:flex-row">
                    <div
                        className="relative    justify-center  flex   flex-col items-center rounded-2xl    h-100    bg-[#f8f8f8]">

                        <h3 className="flex flex-col text-[20px]">
                            <span className="text-[32px] font-700 text-[#5E5873] mb-2 font-bold lg:mb-0">پیشخوان</span>
                            <span className="m-0 p-0 text-[#18A1A1]  text-[19px] ">خدمات و سرویس ها</span>
                        </h3>

                        <div className="my-3 h-[6px] w-[20%] bg-[#F9D325] rounded-full"/>

                        <p className="m-0 pb-1 font-bold">رزرو کنید، استفاده کنید.</p>

                    </div>


                </div>
            </div>
            <div className="lg:col-span-9   ">

                <div className="flex flex-col justify-between h-100 ">
                    {
                        groups.map((item, index) => (
                            <div key={index}>

                                <div
                                    className="grid grid-cols-12 gap-3 shadow-[10px_20px_20px_rgba(193,193,193,0.2)] p-[21px] rounded-[20px] items-center">

                                    <div className="col-span-3">
                                        <div className="flex items-center justify-center ">

                                            <svg
                                                className={'relative'}

                                                xmlns="http://www.w3.org/2000/svg"
                                                width="80"
                                                height="80"
                                                viewBox="28.5 -0.5 41 24"
                                                fill="none"
                                            >
                                                <circle cx="38" cy="14" r="9" fill="#F9D325"/>
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M66.5425 0.229679C66.8126 0.520565 66.7958 0.97534 66.5049 1.24545C62.3699 5.0851 55.2605 8.2152 52.2437 9.30127C51.8702 9.43572 51.4584 9.24195 51.3239 8.86846C51.1895 8.49497 51.3833 8.0832 51.7567 7.94874C54.7295 6.87856 61.6118 3.82741 65.5267 0.192058C65.8176 -0.0780504 66.2724 -0.061207 66.5425 0.229679Z"
                                                    fill="#F9D325"
                                                />
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M68.6834 16.8464C68.8153 17.2208 68.6186 17.6312 68.2442 17.763C62.9216 19.6369 55.1537 19.6748 51.954 19.4688C51.5578 19.4432 51.2574 19.1014 51.2829 18.7053C51.3084 18.3092 51.6502 18.0087 52.0464 18.0342C55.1993 18.2373 62.7274 18.1813 67.7668 16.4071C68.1412 16.2753 68.5516 16.472 68.6834 16.8464Z"
                                                    fill="#F9D325"
                                                />
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M64.4724 9.85946C64.6701 10.2037 64.5512 10.643 64.207 10.8407C60.8369 12.7759 55.4424 13.8926 53.1903 14.2134C52.7973 14.2693 52.4334 13.9961 52.3774 13.6031C52.3214 13.2102 52.5946 12.8462 52.9876 12.7902C55.2042 12.4745 60.37 11.3863 63.4912 9.59408C63.8354 9.39641 64.2747 9.51523 64.4724 9.85946Z"
                                                    fill="#F9D325"
                                                />
                                            </svg>

                                            <h1 className={'text-[23px] font-[700]   right-[70px]'}>
                                                {item.logo}
                                            </h1>
                                        </div>
                                    </div>
                                    {
                                        item.services.map((item, index) => (
                                            <div className="col-span-3" key={index}>
                                                <div
                                                    className={` box  h-[80px]  items-center  flex justify-center rounded-2xl relative  border-transparen`}>

                                                    <h1 className={'text-[#27BDBC] text-[20px] font-[700] relative z-50'}>
                                                        {item.title}
                                                    </h1>
                                                    <button className={'bg-[#27BDBC] text-white  rounded-[19px] min-w-[70px] p-2 text-[14px] bottom-[-25%] absolute'}>
                                                        {item.label}
                                                    </button>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>


                            </div>
                        ))
                    }
                </div>


            </div>


        </div>
    );
}