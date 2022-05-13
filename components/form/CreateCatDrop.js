/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useContext, useEffect, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { GlobalContext } from "../../context/Provider";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function CreateCatDrop(props) {
  const { loading, category } = useContext(GlobalContext);


  const [selected, setSelected] = useState("");
  const cats = props.catlist.categories; 


  const onSelection = (e) => { 
    setSelected(e);
    category[1](e);  
  };

  useEffect(() => {
    category[1](selected);
    console.log(category[0]);
  }, [selected]);
  


  return (
    <Menu as="div" className="relative inline-block text-left max-w-sm w-full">
      <div>
        <Menu.Button
        required={props.required}
          className={
            (selected ? "" : "selectedDrop") +
            `${" inline-flex justify-center w-full rounded-md border border-gray-300 shadow-md px-4 py-2 bg-white text-sm font-medium justify-between text-gray-700 hover:bg-gray-50 focus:outline-none"}`
          }
        >
          {selected ? selected : "Categories"}
          <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="origin-top-right absolute right-0  w-full z-10 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
          {cats.map((cat) => (
              <Menu.Item key={cat.id} onClick={(e) => onSelection(cat.name)}>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    {cat.name}
                  </a>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
