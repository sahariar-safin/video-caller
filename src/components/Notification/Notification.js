import React, { useContext } from 'react';
import { Button } from '@material-ui/core';
import ring from '../../notifyAlert/you-have-a-call-please-pickup-the-call.mp3'

import { SocketContext } from '../../SocketContext'

const Notification = () => {
    const { answerCall, call, callAccepted } = useContext(SocketContext);
    return (
        <>
            {call.isReceivedCall && !callAccepted && (
                <div styles={{ display: 'flex', justifyContent: 'center' }}>
                    <audio autoPlay src={ring}></audio>
                    <h1>{call.name} is calling</h1>
                    <Button variant="contained" color="primary" onClick={answerCall}>
                        Answer
                    </Button>
                </div>
            )}
        </>
    );
};

export default Notification;