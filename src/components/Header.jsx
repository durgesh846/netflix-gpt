import React from 'react'

const Header = () => {
    return (
        <header className="absolute top-0 left-0 w-full z-10 flex items-center p-4">
            <div className="text-white text-2xl font-bold">
                <img className='w-44'
                    src='https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'
                    alt='logo' />
            </div>
        </header>
    )
}

export default Header