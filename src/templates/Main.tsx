import React, { ReactNode } from 'react';

import Link from 'next/link';

import { Navbar } from '../navigation/Navbar';
import { Config } from '../utils/Config';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="antialiased w-full text-gray-700 px-3 md:px-0">
    {props.meta}
    <div className="max-w-screen-md mx-auto">
      <div className="border-b border-gray-300 pb-3">
        <div className="flex pt-16 pb-3">
          <div className="w-20 h-20 bg-gray-100 rounded-md overflow-hidden shadow-lg mb-2 md:mb-4 mr-5">
            <img
              src="/assets/images/avatar.webp"
              loading="lazy"
              alt=""
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div>
            <Link href="/">
              <a className="font-semibold text-3xl text-gray-900 hover:no-underline">
                {Config.title}
              </a>
            </Link>
            <div className="text-gray-500 text-base">{Config.description}</div>
          </div>
        </div>
        <div>
          <Navbar>
            <li className="mr-10">
              <Link href="/">
                <a>首页</a>
              </Link>
            </li>
            <li className="mr-10">
              <Link href="/about/">
                <a>关于</a>
              </Link>
            </li>
            <li className="mr-10">
              <a href="https://github.com/zhuzichu520">GitHub</a>
            </li>
          </Navbar>
        </div>
      </div>

      <div className="text-xl py-5">{props.children}</div>

      <div className="border-t border-gray-300 text-center py-8 text-sm">
        © Copyright
        {' '}
        {new Date().getFullYear()}
        {' '}
        {Config.title}
        .♥
        {' '}
      </div>
    </div>
  </div>
);

export { Main };
