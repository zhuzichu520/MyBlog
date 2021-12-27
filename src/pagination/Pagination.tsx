import React from 'react';

import Link from 'next/link';

import { convertUrlToLinkHref } from '../utils/Pagination';

export type IPaginationProps = {
  previous?: string;
  next?: string;
};

const Pagination = (props: IPaginationProps) => (
  <div className="text-sm flex justify-between">
    {props.previous && (
      <div className="pt-5">
        <Link href={convertUrlToLinkHref(props.previous)} as={props.previous}>
          <a>← 上一页</a>
        </Link>
      </div>
    )}

    {props.next && (
      <div className="text-right ml-auto pt-5">
        <Link href={convertUrlToLinkHref(props.next)} as={props.next}>
          <a>下一页 →</a>
        </Link>
      </div>
    )}
  </div>
);

export { Pagination };
