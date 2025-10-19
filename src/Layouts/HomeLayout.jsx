import React from 'react';
import { Outlet, useNavigation } from 'react-router';
import Header from '../Components/Header';
import LatestNews from '../Components/LatestNews';
import Navbar from '../Components/Navbar';
import LeftAside from '../Components/HomeLayout/LeftAside';
import RightAside from '../Components/HomeLayout/RightAside';
import Loading from '../Pages/Loading';

const HomeLayout = () => {
    const {state}=useNavigation();
    return (
        <div>
            <header>
                <Header></Header>
                <section className='w-11/12 mx-auto my-3'>
                    <LatestNews></LatestNews>
                </section>
                <nav className='w-11/12 mx-auto my-3'>
                    <Navbar>

                    </Navbar>
                </nav>
            </header>
            <main className='w-11/12 mx-auto my-3  grid grid-cols-12 gap-5'>
            <aside className='col-span-12 md:col-span-3 md:sticky top-0 h-fit'>
                <LeftAside></LeftAside>
            </aside>
                <section className='main col-span-12 md:col-span-6'>
                     {
                        state=="loading" ? <Loading></Loading> : <Outlet></Outlet>
                     }
                </section>
                <aside className='col-span-12 md:col-span-3 md:sticky top-0 h-fit'>
                <RightAside></RightAside>
            </aside>
            </main>
        </div>
    );
};

export default HomeLayout;