'use client'

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { VariationTable } from "tkz-tab-react";
import "tkz-tab-react/style.css";

function  TkzTabComponent({content}: {content: string}) {
        const { theme } = useTheme() as { theme: 'light' | 'dark' | undefined };
        const [mouted,setMounted] = useState(false) ;

        useEffect(() => {
            setMounted(true);
        }, []);

        if (!mouted) {
            return null;
        }

      return <VariationTable inputText={content} theme={theme} />
}

export default TkzTabComponent;

