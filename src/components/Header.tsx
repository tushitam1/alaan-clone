'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { Transition } from '@headlessui/react';
import { HiOutlineXMark, HiBars3 } from 'react-icons/hi2';
import { FaFingerprint } from 'react-icons/fa';
import Image from "next/image";

import Container from './Container';
import { siteDetails } from '@/data/siteDetails';
import { menuItems } from '@/data/menuItems';

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="bg-transparent fixed top-0 left-0 right-0 md:absolute z-50 mx-auto w-full">
            <Container className="!px-0">
                <nav className="shadow-md md:shadow-none bg-white md:bg-transparent mx-auto flex justify-between items-center py-2 px-5 md:py-10">

                    {/* LEFT SIDE: Logo + Menu Items */}
                    <div className="flex items-center space-x-10">
                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-2">
                            <Image
                                src="/images/alaanlogo.svg"
                                alt="title"
                                width={120}
                                height={120}
                                quality={100}
                                className="lg:ml-0"
                            />
                        </Link>

                        {/* Menu Items */}
                        <ul className="hidden md:flex space-x-6">
                            {menuItems.map(item => (
                                <li key={item.text}>
                                    <Link
                                        href={item.url}
                                        className="text-foreground hover:text-foreground-accent transition-colors"
                                    >
                                        {item.text}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* RIGHT SIDE: Auth Buttons */}
                    <ul className="hidden md:flex space-x-4 items-center">
                        <li>
                            <Link
                                href="#login"
                                className="text-black px-8 py-3 transition-colors"
                            >
                                Log in
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="#cta"
                                className="text-black bg-primary hover:bg-primary-accent px-8 py-3 rounded-full transition-colors"
                            >
                                Schedule a Demo
                            </Link>
                        </li>
                    </ul>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={toggleMenu}
                            type="button"
                            className="bg-primary text-black focus:outline-none rounded-full w-10 h-10 flex items-center justify-center"
                            aria-controls="mobile-menu"
                            aria-expanded={isOpen}
                        >
                            {isOpen ? (
                                <HiOutlineXMark className="h-6 w-6" aria-hidden="true" />
                            ) : (
                                <HiBars3 className="h-6 w-6" aria-hidden="true" />
                            )}
                            <span className="sr-only">Toggle navigation</span>
                        </button>
                    </div>
                </nav>

            </Container>

            {/* Mobile Menu with Transition */}
            <Transition
                show={isOpen}
                enter="transition ease-out duration-200 transform"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="transition ease-in duration-75 transform"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                <div id="mobile-menu" className="md:hidden bg-white shadow-lg">
                    <ul className="flex flex-col space-y-4 pt-1 pb-6 px-6">
                        {menuItems.map(item => (
                            <li key={item.text}>
                                <Link href={item.url} className="text-foreground hover:text-primary block" onClick={toggleMenu}>
                                    {item.text}
                                </Link>
                            </li>
                        ))}
                        <li>
                            <Link href="#cta" className="text-black bg-primary hover:bg-primary-accent px-5 py-2 rounded-full block w-fit" onClick={toggleMenu}>
                                Get Started
                            </Link>
                        </li>
                    </ul>
                </div>
            </Transition>
        </header>
    );
};

export default Header;
