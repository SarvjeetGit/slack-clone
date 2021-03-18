import React from 'react';
import styled from 'styled-components';

function Message({ message, timestamp, user, userImage }) {
    return (
        <MessageContainer>
            <img src={userImage} />
        </MessageContainer>
    );
}

export default Message;

const MessageContainer = styled.div``;