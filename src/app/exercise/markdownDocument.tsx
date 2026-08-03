import markdownComponents from "@/components/markdownComponents";
import ReactMarkdown from "react-markdown";
import rehypeKatex from "rehype-katex";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";


export function MarkdownDocument({ content }: { content: string }) {
    return (<ReactMarkdown
        remarkPlugins={[remarkMath, remarkGfm]}
        rehypePlugins={[rehypeKatex]}
        components={markdownComponents}
    >{content}
    </ReactMarkdown>
    )
}