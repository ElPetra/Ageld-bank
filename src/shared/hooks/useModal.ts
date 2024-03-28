import { useState } from 'react';

export const useModal = () => {
    const [messages, setMessages] = useState<string[]>([]);

    const addMessage = (message: string, autoClose = true) => {
        setMessages(prevMessages => [...prevMessages, message]);
        if (autoClose) {
            setTimeout(() => closeMessage(message), 3000);
        }
    };

    const closeMessage = (message: string) => {
        setMessages(prevMessages => prevMessages.filter(m => m !== message));
    };

    return {
        messages,
        addMessage,
        closeMessage
    };
};
