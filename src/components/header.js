import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { Combobox, Dialog, Popover, Transition } from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars3Icon,
  BookmarkSquareIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorArrowRaysIcon,
  LifebuoyIcon,
  PhoneIcon,
  PlayIcon,
  ShieldCheckIcon,
  Squares2X2Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import LogoCHAISERI from "../img/Logo-CHAISERI-2.png";
import M911 from "../img/M911-1.png";

const menus = [
  {
    name: "SYSTEM INTEGRATION",
    col: "col1",
    links: [
      {
        text: "INTEGRATION WEAPON SYSTEM",
        href: "/coming-soon",
      },
      {
        text: "INTEGRATION SURVEILLANCE SYSTEM",
        href: "/coming-soon",
      },
    ],
  },
  {
    name: "RUNFLAT",
    col: "col2",
    links: [
      {
        text: "RUNFLAT RANGE 50 KM",
        href: "/runflat-50-km",
      },
    ],
  },
  {
    name: "ARMORED VEHICLE",
    col: "col3",
    links: [
      {
        text: "FIRST WIN AFV",
        href: "/first-win-afv",
      },
      {
        text: "FIRST WIN ATV",
        href: "/first-win-atv",
      },
      {
        text: "FIRST WIN 2",
        href: "/first-win-2",
      },
      {
        text: "FIRST WIN ALV",
        href: "/first-win-alv",
      },
    ],
  },
  {
    name: "TRACK SYSTEM",
    col: "col4",
    links: [
      {
        text: "TRACK SHOES",
        href: "/track-system",
      },
    ],
  },
  {
    name: "SERVICE",
    col: "col5",
    links: [
      {
        text: "RECONDITION",
        href: "/service",
      },
      {
        text: "UPGRADE",
        href: "/service",
      },
    ],
  },
];

const menusCompany = [
  {
    name: "ABOUT US",
    href: "/about-us",
  },
];

const resources = [
  {
    name: "Help Center",
    description:
      "Get all of your questions answered in our forums or contact support.",
    href: "#",
    icon: LifebuoyIcon,
  },
  {
    name: "Guides",
    description:
      "Learn how to maximize our platform to get the most out of it.",
    href: "#",
    icon: BookmarkSquareIcon,
  },
  {
    name: "Events",
    description:
      "See what meet-ups and other events we might be planning near you.",
    href: "#",
    icon: CalendarIcon,
  },
  {
    name: "Security",
    description: "Understand how we take your privacy seriously.",
    href: "#",
    icon: ShieldCheckIcon,
  },
];

const items = [{ id: 1, name: "Leslie Alexander", url: "#" }];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const [query, setQuery] = useState("");

  const [open, setOpen] = useState(false);

  const filteredSearch =
    query === ""
      ? []
      : items.filter((item) => {
          return item.name.toLowerCase().includes(query.toLowerCase());
        });

  const [menu, setMenu] = useState(false);

  const [productMenu, setProductMenu] = useState(false);
  
  const [openMenuIndex, setOpenMenuIndex] = useState(null);
  const [comapnyMenu, setComapnyMenu] = useState(false);

  const handleMenuClick = (index) => {
    if (openMenuIndex === index) {
      setOpenMenuIndex(null);
    } else {
      setOpenMenuIndex(index);
    }
  };

  return (
    <header>
      <Popover className="relative bg-white">
        <div className="mx-auto">
          <div className="flex items-center justify-between lg:h-[120px] py-6 lg:justify-start md:space-x-10 px-6">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <a href="/">
                <span className="sr-only">Your Company</span>
                <img className="h-8 w-auto sm:h-12" src={LogoCHAISERI} alt="" />
              </a>
            </div>
            <div className="-my-2 -mr-2 lg:hidden">
              <button
                onClick={() => setMenu(!menu)}
                className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              >
                <span className="sr-only">Open menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            <Popover.Group as="nav" className="hidden space-x-16 lg:flex">
            <Popover className='relative'>
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? 'text-black' : 'text-black',
                        'group inline-flex items-center rounded-md bg-white text-xl font-semibold hover:text-[#D73A32] outline-none'
                      )}
                    >
                      <span className='uppercase hover:text-[#D73A32]'>Company</span>
                      <ChevronDownIcon
                        className={classNames(
                          open ? 'text-gray-600' : 'text-gray-400',
                          'ml-2 h-5 w-5  '
                        )}
                        aria-hidden="true"
                      />
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-3"
                      enterTo="opacity-100 translate-y-2"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-2"
                      leaveTo="opacity-0 translate-y-3"
                    >
                      <Popover.Panel className="absolute z-10 transform m-auto w-[200px]">
                        <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                          <div className="relative grid bg-white px-5 py-6">
                            {menusCompany.map((item) => (
                              <a
                                key={item.name}
                                href={item.href}
                                className="-m-3 flex flex-col justify-between rounded-lg p-3"
                              >
                                <div className="flex flex-col">
                                  <p className="text-base font-semibold text-black hover:text-[#D73A32]">{item.name}</p>
                                </div>
                              </a>
                            ))}
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>


              <Popover>
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? "text-black" : "text-black",
                        "group inline-flex items-center rounded-md bg-white text-xl font-semibold hover:text-[#D73A32] outline-none"
                      )}
                    >
                      <span className="uppercase">Products</span>
                      <ChevronDownIcon
                        className={classNames(
                          open ? "text-gray-600" : "text-gray-400",
                          "ml-2 h-5 w-5 group-hover:text-black"
                        )}
                        aria-hidden="true"
                      />
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-3"
                      enterTo="opacity-100 translate-y-2"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-2"
                      leaveTo="opacity-0 translate-y-3"
                    >
                      <Popover.Panel className="absolute z-10 w-screen transform px-2 sm:px-0 left-0 w-[90%] m-auto flex justify-center">
                        <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 w-[90%]">
                          <div className="relative grid grid-cols-5 bg-white]">
                            {menus.map((item, index) => (
                              <div
                                className={`-m-3 flex items-start rounded-lg p-3 h-[600px]  pt-[50px] col ${item.col}`}
                                style={{ backgroundImage: item.bgImage }}
                                key={index}
                              >
                                <div className="ml-4 relative">
                                  <p className="text-xl font-semibold text-white">
                                    {item.name}
                                  </p>
                                  <div className="flex flex-col gap-y-4 mt-4 ">
                                    {item.links.map((link) => (
                                      <a
                                        href={link.href}
                                        className="text-base text-white font-semibold "
                                      >
                                        {link.text}
                                      </a>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>

              <a href="/service" className="text-xl font-semibold uppercase hover:text-[#D73A32] text-black">
                Service
              </a>
              <a
                href="/news-media"
                className="text-xl font-semibold uppercase hover:text-[#D73A32] text-black"
              >
                News & Media
              </a>
              <a
                href="/contact-us"
                className="text-xl font-semibold uppercase  hover:text-[#D73A32] text-black"
              >
                Contact
              </a>
              <button
                onClick={() => setOpen(true)}
                className="text-xl font-semibold uppercase text-black hover:text-black"
              >
                <MagnifyingGlassIcon width="24" />
              </button>
            </Popover.Group>
          </div>
        </div>
      </Popover>
      {menu && (
        <div className="bg-[#171A1E] h-screen w-[90%] right-0 absolute px-5 py-10 text-white lg:hidden shadow-sm">
          <p onClick={()=> setComapnyMenu(!comapnyMenu)} className="text-white leading-[40px] uppercase font-semibold text-[20px]">
            Company
          </p>
          {comapnyMenu && <div className="ml-6">
          {menusCompany.map((item) => (
            <p> {item.name} </p>
            ))}
          </div>
      }
          <p
            className="text-white leading-[40px] uppercase font-semibold text-[20px] flex justify-between"
            onClick={() => setProductMenu(!productMenu)}
          >
            <span>Products </span>
            <ChevronDownIcon
              className={classNames(
                productMenu ? "text-white rotate-180" : "text-white",
                "ml-2 h-5 w-5 group-hover:text-black"
              )}
              aria-hidden="true"
            />
          </p>
          {productMenu && (
            <div>
              {menus.map((item, index) => (
                <div className="ml-6" key={index}>
                  <p
                    className="text-white leading-[40px] uppercase font-semibold text-[20px] flex justify-between cursor-pointer"
                    onClick={() => handleMenuClick(index)}
                  >
                    <span className="text-white leading-[40px] uppercase font-semibold text-[20px]">{item.name}</span>
                    <ChevronDownIcon
                      className={classNames(
                        openMenuIndex === index ? "text-white rotate-180" : "text-white",
                        "ml-2 h-5 w-5 group-hover:text-black"
                      )}
                      aria-hidden="true"
                    />
                  </p>
                  {openMenuIndex === index && (
                    <div className="ml-6">
                      {item.links.map((itemLink) => (
                         <p className="text-white leading-[40px] uppercase font-semibold text-[20px]" key={itemLink.id}>{itemLink.text}</p>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
          <p className="text-white leading-[40px] uppercase font-semibold text-[20px]">
            Company
          </p>
          <p className="text-white leading-[40px] uppercase font-semibold text-[20px]">
            Service
          </p>
          <p className="text-white leading-[40px] uppercase font-semibold text-[20px]">
            News and Media
          </p>
          <p className="text-white leading-[40px] uppercase font-semibold text-[20px]">
            Contact
          </p>
        </div>
      )}
      <Transition.Root
        show={open}
        as={Fragment}
        afterLeave={() => setQuery("")}
        appear
      >
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-25 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto p-4 sm:p-6 md:p-20">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="mx-auto max-w-xl transform divide-y divide-gray-100 overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition-all">
                <Combobox onChange={(item) => (window.location = item.url)}>
                  <div className="relative">
                    <MagnifyingGlassIcon
                      className="pointer-events-none absolute top-3.5 left-4 h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                    <Combobox.Input
                      className="h-12 w-full bg-transparent pl-11 pr-4 text-gray-800 placeholder-gray-400 outline-none sm:text-sm"
                      placeholder="Search..."
                      onChange={(event) => setQuery(event.target.value)}
                    />
                  </div>

                  {filteredSearch.length > 0 && (
                    <Combobox.Options
                      static
                      className="max-h-72 scroll-py-2 overflow-y-auto py-2 text-sm text-gray-800"
                    >
                      {filteredSearch.map((item) => (
                        <Combobox.Option
                          key={item.id}
                          value={item}
                          className={({ active }) =>
                            classNames(
                              "cursor-default select-none px-4 py-2",
                              active && "bg-indigo-600 text-white"
                            )
                          }
                        >
                          {item.name}
                        </Combobox.Option>
                      ))}
                    </Combobox.Options>
                  )}

                  {query !== "" && filteredSearch.length === 0 && (
                    <p className="p-4 text-sm text-black">Search not found.</p>
                  )}
                </Combobox>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </header>
  );
}
