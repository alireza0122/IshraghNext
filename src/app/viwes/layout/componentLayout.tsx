import React from 'react';
import Header from "@/src/app/viwes/layout/include/header";
import Footer from "@/src/app/viwes/layout/include/footer";

function ComponentLayout({children,}: { children: React.ReactNode; }) {
    return (
        <div>
            <Header/>
                {children}
            <Footer/>
        </div>
    );
}

export default ComponentLayout;