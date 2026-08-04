import markdownComponents from "@/components/markdownComponents";
import { ReactNode } from "react";
import ReactMarkdown from "react-markdown";
import rehypeKatex from "rehype-katex";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";


export function MarkdownContent({ className, children }: { className?: string; children: string | null | undefined }) {
    return (<div className={className}><ReactMarkdown
        remarkPlugins={[remarkMath, remarkGfm]}
        rehypePlugins={[rehypeKatex]}
        components={markdownComponents}

    >{children}
    </ReactMarkdown>
    </div>
    )
}