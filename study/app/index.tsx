import { useRouter } from 'expo-router';
import React from 'react';
import { Button, Text, View } from 'react-native';

function index() {
    const router = useRouter();
    
    const handleMypageOnPress = () => {
        router.push("/mypage");
    }
    
    return (
        <View>
            <Text>react native</Text>
            <Button title='마이페이지 이동' onPress={handleMypageOnPress} />
        </View>
    );
}

export default index;