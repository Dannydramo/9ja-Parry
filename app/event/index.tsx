import {
    View,
    Text,
    ScrollView,
    ImageBackground,
    TouchableOpacity,
    Image,
} from 'react-native';
import React from 'react';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { EvilIcons, FontAwesome, MaterialIcons } from '@expo/vector-icons';

const index = () => {
    return (
        <View>
            <ImageBackground
                source={require('../../assets/images/timeless_main.png')}
                style={{ height: hp('45%') }}
            ></ImageBackground>

            <ScrollView
                className="bg-white -mt-6 rounded-t-2xl"
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 320 }}
            >
                <View className=" h-full">
                    <View className="mx-auto my-4" style={{ width: wp('90%') }}>
                        <View className="flex items-center flex-row space-x-4 justify-between">
                            <View>
                                <Text
                                    style={{ fontSize: hp(2.5) }}
                                    className="font-semibold mb-3"
                                >
                                    Timeless International Concert
                                </Text>
                                <View className="flex flex-row space-x-1">
                                    <View className="flex flex-row items-center">
                                        <EvilIcons
                                            size={16}
                                            name="calendar"
                                            color="#FC7210"
                                        />
                                        <Text>12 - 15 December 23</Text>
                                    </View>
                                    <View className="flex flex-row items-center">
                                        <EvilIcons
                                            size={16}
                                            name="location"
                                            color="#FC7210"
                                        />
                                        <Text>123 Ibadan road</Text>
                                    </View>
                                </View>
                            </View>
                            <View>
                                <TouchableOpacity className="px-4 py-2 rounded  bg-[#FBE0CF]">
                                    <Text className="text-[#FC7210]">
                                        Promoted
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View className="mt-2 flex flex-row space-x-1">
                            <Image
                                source={require('../../assets/images/members.png')}
                            />
                            <Text>Members Joined</Text>
                        </View>
                    </View>
                    <View
                        className=""
                        style={{
                            borderBottomColor: 'black',
                            borderBottomWidth: wp(0.2),
                        }}
                    />
                    <View className="mx-auto mb-4" style={{ width: wp('90%') }}>
                        <View>
                            <View className="flex mt-4 mb-2 space-x-4 flex-row justify-between">
                                <View className="flex flex-row space-x-4 items-center">
                                    <View>
                                        <Image
                                            className="w-12 h-12 rounded"
                                            source={require('../../assets/images/man.png')}
                                        />
                                    </View>
                                    <View>
                                        <Text
                                            style={{ fontSize: hp(2.5) }}
                                            className="font-semibold"
                                        >
                                            Emmanuel C.
                                        </Text>
                                        <Text className="mt-2">
                                            Event Organiser
                                        </Text>
                                    </View>
                                </View>
                                <View className="flex flex-row space-x-4 items-center">
                                    <View className="bg-[#F1F1F1] rounded-full p-3">
                                        <FontAwesome
                                            size={20}
                                            name="phone"
                                            color="#4A4D56"
                                        />
                                    </View>
                                    <View className="bg-[#F1F1F1] rounded-full p-3">
                                        <MaterialIcons
                                            size={20}
                                            name="message"
                                            color="#4A4D56"
                                        />
                                    </View>
                                </View>
                            </View>
                            <View className="flex flex-row items-center gap-1">
                                <Image
                                    source={require('../../assets/images/rating.png')}
                                />
                                <Text>{'(45 rating)'}</Text>
                            </View>
                        </View>
                        <View className="">
                            <Text
                                style={{ fontSize: hp(3) }}
                                className="font-semibold my-2"
                            >
                                Description
                            </Text>
                            <Text className="text-lg">
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Animi sapiente sit commodi,
                                cumque ipsum voluptatibus, explicabo, saepe
                                voluptatum ipsam nostrum ipsa iste quia
                                
                            </Text>
                        </View>
                        <View className="flex flex-row my-4 space-x-4">
                            <View className="border border-[#FC7210] rounded-md px-4 py-3 border-opacity-50">
                                <FontAwesome
                                    size={26}
                                    name="bookmark"
                                    color="#FC7210"
                                />
                            </View>
                            <TouchableOpacity className="px-4 py-3 w-[80%] text-white flex items-center justify-center bg-[#4A4D56] rounded-md">
                                <Text
                                    style={{ fontSize: hp(2.8) }}
                                    className="text-white text-center"
                                >
                                    Buy a Ticket
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

export default index;
