import React, { useState } from 'react';
import { Button, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
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
            <Modal 
                animationType='slide'
                presentationStyle='formSheet'
                visible={open} 
                onRequestClose={handleCloseModalOnPress}
                children={
                    <View style={styles.modalContainer}>
                        <TouchableOpacity onPress={handleCloseModalOnPress}>
                            <Text>닫기</Text>
                        </TouchableOpacity>
                        <Button title='닫기' onPress={handleCloseModalOnPress} />
                    </View>
                }
            />
        </View>
    );
}

const styles = StyleSheet.create({
    modalContainer: {
        width: "100%",
        height: "100%",
        paddingTop: 100,
        backgroundColor: "#ffffff"
    }
})

export default mypage;