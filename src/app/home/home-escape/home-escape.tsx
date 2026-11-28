import React from 'react';
import Titlesection from "@/src/app/viwes/shared/titlesection";
import HomeEscapeFanos from "@/src/app/home/home-escape/home-escape-fanos/home-escape-fanos";
import HomeEscapeKarizman from "@/src/app/home/home-escape/ home-escape-karizman/ home-escape-karizman";
import HomeEscapeDal from "@/src/app/home/home-escape/home-escape-dal/home-escape-dal";

function HomeEscape() {
    return (
        <div className={'mt-20 mb-250 '}>
            <div className="flex justify-center">
                <Titlesection title={'گریزی به ارکان اشراق'}/>
            </div>

            <div className="flex flex-col  gap-[30px]">
                <HomeEscapeFanos/>

                <HomeEscapeKarizman/>
                <HomeEscapeDal/>
            </div>

        </div>
    );
}

export default HomeEscape;
