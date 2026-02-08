"use client";

import React from "react";
import { useChat } from "@/contexts/ChatContext";
import { Sparkles } from "lucide-react";

export function MobileChatTrigger() {
    const { toggleChat } = useChat();

    return (
        <button
            onClick={toggleChat}
            className="flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-amber-500/10 to-orange-500/10 dark:from-amber-500/20 dark:to-orange-500/20 hover:bg-amber-500/20 rounded-full border border-amber-500/20 transition-all mx-2"
        >
            <div className="text-amber-500 dark:text-amber-400">
                <Sparkles size={16} fill="currentColor" />
            </div>
            <span className="text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wide">
                Asystent
            </span>
        </button>
    );
}
