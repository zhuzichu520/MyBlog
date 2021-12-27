import React from 'react';

import { format } from 'date-fns';
import Link from 'next/link';

import { Pagination, IPaginationProps } from '../pagination/Pagination';
import { PostItems } from '../utils/Content';

export type IBlogGalleryProps = {
  posts: PostItems[];
  pagination: IPaginationProps;
};

const BlogGallery = (props: IBlogGalleryProps) => (
  <>
    <div className="grid grid-cols-1 gap-10">
      {props.posts.map((elt) => (
        <div
          key={elt.slug}
          className="flex flex-col md:flex-row items-center border-b border-gray-300"
        >
          <div className="flex flex-col gap-2">
            <h2 className="text-gray-800 text-xl font-bold">
              <div className="text-black transition duration-100">{elt.title}</div>
            </h2>
            <p className="text-gray-700">{elt.description}</p>
            <span className="text-gray-500 text-sm">
              {format(new Date(elt.date), 'yyyy年MM月dd日')}
            </span>
            <Link href="/posts/[slug]" as={`/posts/${elt.slug}`}>
              <a className="text-indigo-500 hover:text-indigo-600 active:text-indigo-700 font-semibold transition duration-100 pb-5">
                阅读
              </a>
            </Link>
          </div>
        </div>
      ))}
    </div>

    <Pagination previous={props.pagination.previous} next={props.pagination.next} />
  </>
);

export { BlogGallery };
