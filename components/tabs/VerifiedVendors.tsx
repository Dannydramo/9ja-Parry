import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { Link } from 'expo-router';

const vendors = [
    {
        image: require('../../assets/images/emelda.png'),
        title: 'Emelda Catering Service',
        location: 'Lagos, Nigeria',
        price: 'N23,000',
    },
    {
        image: require('../../assets/images/emelda.png'),
        title: 'Emelda Catering Service',
        location: 'Lagos, Nigeria',
        price: 'N23,000',
    },
];

const verified = ['Caterer', 'Hypeman', 'Disk Jockey', 'Comedian'];

export default function VerifiedVendors() {
    return (
        <View>
            <View className="mx-auto my-4" style={{ width: wp('90%') }}>
                <View className="flex justify-between flex-row space-x-3">
                    <View>
                        <Text
                            style={{ fontSize: hp(3) }}
                            className="font-semibold"
                        >
                            Explore Verified Vendors
                        </Text>
                    </View>
                    <View>
                        <Link
                            href={'/vendors'}
                            style={{ fontSize: hp(3) }}
                            className="font-semibold"
                        >
                            See All
                        </Link>
                    </View>
                </View>
            </View>
            <ScrollView
                className="flex flex-row space-x-4 mb-2"
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                    paddingHorizontal: 15,
                }}
            >
                {verified.map((verify, index) => (
                    <TouchableOpacity
                        key={index}
                        className="px-4 py-2 rounded  bg-[#FC7210]"
                    >
                        <Text
                            className="text-white"
                            style={{ fontSize: hp(2.3) }}
                        >
                            {verify}
                        </Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
            <View className="mx-auto mb-4" style={{ width: wp('90%') }}>
                <View className="">
                    {vendors.map((vendor) => (
                        <View className="bg-white shadow-2xl rounded-md flex my-3 flex-row items-center">
                            <View>
                                <Image
                                    source={vendor.image}
                                    style={{ height: 90, width: 100 }}
                                    className="rounded-md"
                                />
                            </View>
                            <View className="p-2">
                                <View>
                                    <View className="flex flex-col gap-1">
                                        <Text
                                            style={{ fontSize: hp(2.1) }}
                                            className="font-semibold"
                                        >
                                            {vendor.title}
                                        </Text>

                                        <View className="flex flex-row items-center gap-1">
                                            <Image
                                                source={require('../../assets/images/rating.png')}
                                            />
                                            <Text>{'(45) rating'}</Text>
                                        </View>
                                        <Text
                                            style={{ fontSize: hp(2) }}
                                            className="font-semibold"
                                        >
                                            {vendor.location}
                                        </Text>
                                    </View>
                                </View>
                            </View>
                            <View
                                className="h-16"
                                style={{
                                    borderRightColor: 'black',
                                    borderRightWidth: wp(0.2),
                                }}
                            />
                            <View className="ml-3 ">
                                <Text
                                    className="font-semibold mb-1 text-[#FC7210]"
                                    style={{ fontSize: hp(2.2) }}
                                >
                                    {vendor.price}
                                </Text>
                                <Text style={{ fontSize: hp(2.2) }}>
                                    Hire Now
                                </Text>
                            </View>
                        </View>
                    ))}
                </View>
            </View>
        </View>
    );
}
