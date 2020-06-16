import React from 'react'

const Intro = ({children,intro}) => {
    return <header className={intro}>{children}
    </header>;
}

export default Intro;
