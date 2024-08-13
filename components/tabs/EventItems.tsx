import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { Link } from 'expo-router';

const items = [
    {
        image: require('../../assets/images/tags.png'),
        title: 'Name Tags/Badge',
        price: 'N23,000',
    },
    {
        image: require('../../assets/images/ribbon.png'),
        title: 'Ribbon Package',
        price: 'N23,000',
    },
    {
        image: require('../../assets/images/merchandise.png'),
        title: 'Merchandise',
        price: 'N23,000',
    },
];

export default function EventItems() {
    return (
        <View className="mx-auto mt-8" style={{ width: wp('90%') }}>
            <View className="flex justify-between flex-row space-x-3">
                <View>
                    <Text style={{ fontSize: hp(3) }} className="font-semibold">
                        Event Items
                    </Text>
                </View>
                <View>
                    <Link
                        href={'/events'}
                        style={{ fontSize: hp(3) }}
                        className="font-semibold"
                    >
                        See All
                    </Link>
                </View>
            </View>
            <View className="mt-4">
                {items.map((item, index) => (
                    <View
                        key={index}
                        className="my-3 flex flex-row space-x-2 items-center"
                    >
                        <View>
                            <Image
                                source={item.image}
                                style={{ height: 100, width: 100 }}
                                className="rounded-md"
                            />
                        </View>
                        <View className="flex flex-col gap-2">
                            <Text
                                style={{ fontSize: hp(3) }}
                                className="font-semibold"
                            >
                                {item.title}
                            </Text>
                            <Text
                                style={{ fontSize: hp(2.5) }}
                                className="font-semibold"
                            >
                                {item.price}
                            </Text>
                            <View className="flex flex-row justify-between space-x-8">
                                <View className="flex flex-row items-center gap-1">
                                    <Image
                                        source={require('../../assets/images/rating.png')}
                                    />
                                    <Text>{'(45) rating'}</Text>
                                </View>
                                <View>
                                    <TouchableOpacity className="px-4 py-1 rounded  bg-[#FC7210]">
                                        <Text className="text-white">
                                            Purchase
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                ))}
            </View>
        </View>
    );
}
