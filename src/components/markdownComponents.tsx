import React from 'react';
import { Components } from 'react-markdown';
import Image from 'next/image';
import Link from 'next/link';

const markdownComponents: Components = {
  h1: ({ children }) => (
    <h1 className="scroll-m-20 text-3xl font-bold tracking-tight text-foreground mt-8 mb-4 first:mt-0">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="scroll-m-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground mt-8 mb-4 first:mt-0">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="scroll-m-20 text-xl font-semibold tracking-tight text-foreground mt-6 mb-3">
      {children}
    </h3>
  ),
  h4: ({ children }) => (
    <h4 className="scroll-m-20 text-lg font-semibold tracking-tight text-foreground mt-4 mb-2">
      {children}
    </h4>
  ),
  p: ({ children }) => (
    <p className="leading-7 text-foreground not-first:mt-4">
      {children}
    </p>
  ),
  a: ({ href, children }) => (
    <Link
      href={href || ''}
      className="font-medium text-primary underline underline-offset-4 hover:opacity-85 transition-opacity"
      target={href?.startsWith('http') ? '_blank' : undefined}
      rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
    >
      {children}
    </Link>
  ),
  ul: ({ children }) => (
    <ul className="my-4 ml-6 list-disc space-y-2 text-foreground">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="my-4 ml-6 list-decimal space-y-2 text-foreground">
      {children}
    </ol>
  ),
  li: ({ children }) => <li className="leading-7">{children}</li>,
  blockquote: ({ children }) => (
    <blockquote className="mt-4 border-l-4 border-accent bg-muted/40 px-4 py-2 italic text-muted-foreground rounded-r-md">
      {children}
    </blockquote>
  ),
  hr: () => <hr className="my-6 border-border" />,
  table: ({ children }) => (
    <div className="my-6 w-full overflow-x-auto rounded-lg border border-border">
      <table className="w-full text-sm text-left">{children}</table>
    </div>
  ),
  thead: ({ children }) => (
    <thead className="bg-muted text-muted-foreground border-b border-border font-medium">
      {children}
    </thead>
  ),
  tbody: ({ children }) => (
    <tbody className="divide-y divide-border bg-card text-card-foreground">
      {children}
    </tbody>
  ),
  tr: ({ children }) => (
    <tr className="transition-colors hover:bg-muted/50">{children}</tr>
  ),
  th: ({ children }) => (
    <th className="px-4 py-3 font-semibold text-foreground">{children}</th>
  ),
  td: ({ children }) => <td className="px-4 py-3 align-middle">{children}</td>,
  pre: ({ children }) => (
    <pre className="my-4 overflow-x-auto rounded-lg bg-muted p-4 text-muted-foreground border border-border text-sm font-mono">
      {children}
    </pre>
  ),
  code: ({ node, inline, className, children, ...props }: any) => {
    // Distinguishes inline code from code blocks inside <pre>
    if (inline) {
      return (
        <code
          className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono text-foreground border border-border"
          {...props}
        >
          {children}
        </code>
      );
    }
    return (
      <code className={`${className || ''} font-mono text-sm`} {...props}>
        {children}
      </code>
    );
  },
  img: ({ src, alt }) => {
    if (!src || typeof src !== 'string') return null;

    return (
      <span className="relative my-4 block aspect-video w-full max-w-md overflow-hidden rounded-lg border border-border">
        <Image
          src={src}
          alt={alt || ''}
          fill
          sizes="(max-width: 768px) 100vw, 448px"

        />
      </span>
    );
  },
};

export default markdownComponents;