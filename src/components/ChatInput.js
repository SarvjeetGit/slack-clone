import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import styled from 'styled-components';
import { db } from '../firebase';
import firebase from 'firebase';

function ChatInput({ channelName, channelId }) {
    const [input, setInput] = useState('');

    const sendMessage = (e) => {
        e.preventDefault();
        if (!channelId) {
            return false;
        }
        console.log(channelId);
        db.collection('rooms').doc(channelId).collection('messages').add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            user: 'Sarvjeet Kumar',
            userImage:
                'https://media-exp1.licdn.com/dms/image/C5103AQHHLMA06aB_Tw/profile-displayphoto-shrink_400_400/0/1583946117221?e=1621468800&v=beta&t=pnxx8psQ7bKtdI_Ka6JE3oGPHwC8dllq_HftvXNMedo',
        });

        setInput('');
    };

    return (
        <ChatInputContainer>
            <form>
                <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder={`Message #${channelName}`}
                />
                <Button hidden type='submit' onClick={sendMessage}>
                    SEND
                </Button>
            </form>
        </ChatInputContainer>
    );
}

export default ChatInput;

const ChatInputContainer = styled.div`
    border-radius: 20px;
    > form {
        position: relative;
        justify-content: center;
        display: flex;
    }
    > form > input {
        position: fixed;
        bottom: 30px;
        width: 60%;
        border: 1px solid gray;
        border-radius: 3px;
        padding: 20px;
        outline: none;
    }
    > form > button {
        display: none !important;
    }
`;