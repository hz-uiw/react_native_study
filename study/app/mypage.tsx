import React, { useState } from 'react';
import { Button, Text, View } from 'react-native';
import ReactNativeModal from 'react-native-modal';

function mypage() {
    const [open, setOpen] = useState(false);

    const handleOpenModalOpen = () => {
        setOpen(true);
    }

    const handleCloseModalOnPress = () => {

    }
    
    return (
        <View>
            <Text>마이페이지!!</Text>
            <Button title='모달 오픈' onPress={handleOpenModalOpen} />
            <ReactNativeModal 
                swipeDirection={'down'}
                isVisible={open} 
                onBackButtonPress={handleCloseModalOnPress}>
                <View>

                </View>
            </ReactNativeModal>
        </View>
    );
}

export default mypage;