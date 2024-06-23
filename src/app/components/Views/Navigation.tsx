"use client";

import Link from "next/link";
import { NavigationViewModel, NavLink } from "@/app/components/ViewModels/NavigationViewModel.ts";
import { AppViewModel } from "../ViewModels/AppViewModel";
import { Fragment, useRef } from "react";
import { motion } from "framer-motion";
import Toggle from "./Toggle";
import { useMenuAnimation } from "@/app/hooks/useMenuAnimation";
import { useLocalStorage } from "@/app/hooks/useLocalStorage";
import { useClickOutside } from "@/app/hooks/useClickOutside";

interface NavigationProps {

    viewModel: NavigationViewModel | null | undefined;
    appViewModel: AppViewModel | null | undefined;

}

export const Navigation = (props: NavigationProps): JSX.Element => {

    const [isNavOpen, setIsNavOpen] = useLocalStorage('isNavOpen', '0');
    const [isThemeMenuOpen, setIsThemeMenuOpen] = useLocalStorage('isThemeMenuOpen', '0');

    const scope = useMenuAnimation(isThemeMenuOpen === '1');
    const dropdownRef = useRef(null);
    const navRef = useRef(null);

    const setNavOpenCloseState = (state: boolean) => {

        if (state) {
            setIsNavOpen('1');
        } else {
            setIsNavOpen('0');
        }

    };

    useClickOutside(dropdownRef, () => {
        if (isThemeMenuOpen === '1') {
            setIsThemeMenuOpen('0');
        }
    });

    useClickOutside(navRef, () => {
    
        if (!navRef.current) return;
    
        if (typeof (navRef.current as HTMLElement)?.querySelector !== 'function') return;
    
        let currentNavRef = navRef.current as HTMLElement;
    
        if (isThemeMenuOpen === '1') {
            setIsThemeMenuOpen('0');
        }
    
        const navbarCollapse = currentNavRef.querySelector('.navbar-collapse');
        if (navbarCollapse) {
            navbarCollapse.classList.remove('show');
        }
    
        const navbarToggler = currentNavRef.querySelector('.navbar-toggler');
        if (navbarToggler) {
            navbarToggler.classList.add('collapsed');
        }

        if (isNavOpen === '1') {
            setIsNavOpen('0');
        }
    
    });

    if (!props.viewModel || !props.viewModel.links || props.viewModel.links.length === 0) return (
        <nav data-testid="navigation-content"></nav>
    );

    return (

        <nav
            ref={navRef}
            id={'valid-nav-bar'}
            className="navbar navbar-expand-lg navbar-light fixed-top card-header"
            data-testid="navigation-content"
        >

            <div className="container-fluid">

                <motion.a whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} className="navbar-brand" href="/">
                    {props.viewModel.brand}
                </motion.a>

                <Toggle
                    buttonClasses="navbar-toggler"
                    isOpen={isNavOpen === '1'}
                    setIsOpen={setNavOpenCloseState}
                />

                <div className="collapse navbar-collapse" id="navbarNav">

                    <motion.ul
                        className="navbar-nav"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >

                        {props.viewModel.links.map((link: NavLink) => (

                            <Fragment key={link.id}>

                                {!link.options ? (

                                    <motion.li
                                        id={link.id}
                                        key={link.id}
                                        className="nav-item"
                                        whileTap={{ scale: 0.9 }}
                                        style={{ cursor: "pointer" }}
                                    >

                                        <Link
                                            className="nav-link"
                                            href={link.url}
                                            key={link.id}
                                            style={{ cursor: "pointer" }}
                                            onClick={() => setIsNavOpen('0')}
                                        >
                                            {link.text}
                                        </Link>

                                    </motion.li>

                                ) : (

                                    <motion.li
                                        id={link.id}
                                        key={link.id}
                                        className="nav-item dropdown"
                                        ref={scope}
                                    >

                                        <motion.a
                                            href="#"
                                            data-bs-toggle="dropdown"
                                            data-bs-auto-close="outside"
                                            className="nav-link"
                                            style={{ cursor: "pointer" }}
                                            whileTap={{ scale: 0.9 }}
                                            transition={{
                                                type: "spring",
                                                stiffness: 300,
                                                damping: 20
                                            }}
                                            key={link.id}
                                            onClick={() => {
                                                setIsThemeMenuOpen(isThemeMenuOpen === '1' ? '0' : '1')
                                            }}
                                        >

                                            <div className="d-flex align-items-center" style={{ width: "10% !important" }}>
                                                <div style={{ paddingRight: "0.5rem" }}>

                                                    {link.text}

                                                </div>

                                                <div
                                                    className="arrow"
                                                    style={{
                                                        transformOrigin: "50% 55%",
                                                    }}
                                                >
                                                    <svg
                                                        width="15"
                                                        height="15"
                                                        viewBox="0 0 20 20"
                                                        style={{
                                                            color: "var(--bs-secondary) !important",
                                                        }}
                                                        stroke="currentcolor"
                                                    >
                                                        <path fill="var(--bs-secondary)" d="M0 7 L 20 7 L 10 16" />
                                                    </svg>
                                                </div>

                                            </div>

                                        </motion.a>

                                        <motion.ul
                                            className="dropdown-menu shadow navbar-sub-menu"
                                            style={{
                                                clipPath: "inset(10% 50% 90% 50% round 10px)",
                                            }}
                                            ref={dropdownRef}
                                            animate={{
                                                boxShadow: isThemeMenuOpen === '1' ? "0 0 10px 0 rgba(0, 0, 0, 0.1)" : "none"
                                            }}
                                        >

                                            {link.options.map((option: NavLink) => (

                                                <motion.li
                                                    key={option.id}
                                                    id={option.id}
                                                    className="dropdown-item"
                                                    onClick={props.appViewModel?.onNavigationBarThemeSwitch}
                                                    style={{cursor: "pointer"}}
                                                    whileTap={{ scale: 0.9}}
                                                >

                                                    <Link key={option.id} href={link.url}>
                                                        {option.text}
                                                    </Link>

                                                </motion.li>

                                            ))}

                                        </motion.ul>

                                    </motion.li>

                                )}

                            </Fragment>

                        ))}

                    </motion.ul>

                </div>

            </div>

        </nav>

    );

};