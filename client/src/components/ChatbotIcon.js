import React from 'react'
import ChatBot from 'react-simple-chatbot';
import styled from 'styled-components'
function ChatbotIcon() {
    const Container  = styled.div`
        position: fixed;
        bottom: 0;
        right: 0;
        margin-right: 10px;
        margin-bottom: 20px;
        z-index: 999;
    `
    return (
        <Container>
            <ChatBot
                steps={[
                    {
                    id: '1',
                    message: 'What is your name?',
                    trigger: '2',
                    },
                    {
                    id: '2',
                    user: true,
                    trigger: '3',
                    },
                    {
                    id: '3',
                    message: 'Hi {previousValue}, welcome to our shop!',
                    end: true,
                    },
                ]}
                />
        </Container>
    )
}

export default ChatbotIcon
