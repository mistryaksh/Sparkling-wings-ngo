import React from "react";

import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { useState } from "react";
import {
  AiOutlineClose,
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineWhatsApp,
  AiOutlineYoutube,
} from "react-icons/ai";
import { FiChevronDown } from "react-icons/fi";
import { navItems } from "../navigations";

export const Navbar = () => {
  const [nav, setNav] = useState(false);
  const iconSize: number = 26;

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  // Array containing navigation items

  return (
    <div className="bg-white z-50 flex justify-between items-center h-auto w-full px-4 xl:px-10 py-5">
      {/* Logo */}
      <div className="flex flex-col justify-center items-center">
        <img
          src={require("../../assets/spak-logo.png")}
          className="border-2 border-gray-900 rounded-full w-[80%]"
          alt=""
        />
        <h6 className="text-primary-800">Sparkling Wings</h6>
      </div>

      <div className="hidden xl:flex xl:flex-col gap-3">
        <div className="flex justify-between items-center gap-5">
          <div className="flex items-center border rounded-lg p-2 gap-3 w-[50%]">
            <AiOutlineSearch size={24} />
            <input
              type="search"
              placeholder="Search"
              className="w-full focus:outline-none"
            />
          </div>
          <div>
            <ul className="flex gap-5">
              <li>
                <AiOutlineFacebook size={iconSize} />
              </li>
              <li>
                <AiOutlineWhatsApp size={iconSize} />
              </li>
              <li>
                <AiOutlineYoutube size={iconSize} />
              </li>
              <li>
                <AiOutlineInstagram size={iconSize} />
              </li>
            </ul>
          </div>
        </div>
        {/* Desktop Navigation */}
        <ul className=" md:flex flex flex-row gap-3 text-primary-800">
          {navItems.map((item) => {
            return (
              <>
                {item.type !== "dropdown" && (
                  <li
                    key={item.id}
                    className="px-2 py-2 menu-links cursor-pointer duration-300"
                  >
                    {item.text}
                  </li>
                )}
                {item.type === "dropdown" && (
                  <li>
                    <Menu>
                      <MenuButton className="px-2 py-2  menu-links cursor-pointer duration-300 flex items-center gap-3">
                        {item.text}
                        <FiChevronDown className="size-4 fill-white/60" />
                      </MenuButton>
                      <MenuItems
                        transition
                        anchor="bottom end"
                        className="bg-white shadow-xl border w-[300px] origin-top-right rounded-xl  p-1 text-sm/6 transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
                      >
                        {item.content.map(({ text }, i) => (
                          <MenuItem key={i}>
                            <button className="group uppercase menu-link-sub-menu flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
                              {text}
                            </button>
                          </MenuItem>
                        ))}
                      </MenuItems>
                    </Menu>
                  </li>
                )}
              </>
            );
          })}
        </ul>
      </div>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? "fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-primary-500 bg-white shadow-xl ease-in-out duration-500"
            : "ease-in-out w-[60%]  duration-500 fixed top-0 bottom-0 left-[-100%] z-50"
        }
      >
        {/* Mobile Logo */}
        <div className="p-2">
          <img
            src={require("../../assets/spak-logo.png")}
            className="border border-gray-900 rounded-full w-[40%]"
            alt=""
          />
        </div>
        {/* Mobile Navigation Items */}
        {navItems.map((item) => (
          <>
            {item.type !== "dropdown" && (
              <li
                key={item.id}
                className="px-2 py-2 menu-links cursor-pointer duration-300"
              >
                {item.text}
              </li>
            )}
            {item.type === "dropdown" && (
              <li>
                <Menu>
                  <MenuButton className="px-2 py-2  menu-links cursor-pointer duration-300 flex items-center gap-3">
                    {item.text}
                    <FiChevronDown className="size-4 fill-white/60" />
                  </MenuButton>
                  <MenuItems
                    transition
                    anchor="bottom end"
                    className="bg-white shadow-xl border w-[300px] origin-top-right rounded-xl  p-1 text-sm/6 transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
                  >
                    {item.content.map(({ text }, i) => (
                      <MenuItem key={i}>
                        <button className="group uppercase menu-link-sub-menu flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
                          {text}
                        </button>
                      </MenuItem>
                    ))}
                  </MenuItems>
                </Menu>
              </li>
            )}
          </>
        ))}
      </ul>
    </div>
  );
};
