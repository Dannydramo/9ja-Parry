import { Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { SafeAreaView } from 'react-native-safe-area-context';
import { EvilIcons } from '@expo/vector-icons';
import EventItems from '@/components/tabs/EventItems';
import { StatusBar } from 'expo-status-bar';
import VerifiedVendors from '@/components/tabs/VerifiedVendors';
import Search from '@/components/forms/Search';
import { Link } from 'expo-router';

export default function HomeScreen() {
    return (
        <View className="flex flex-1 bg-[#292B37]">
            <StatusBar style="light" />
            <View className="bg-[#292B37]">
                <SafeAreaView edges={['top']}>
                    <View className="mx-auto mt-4" style={{ width: wp('90%') }}>
                        <View className="flex flex-row space-x-4 items-center">
                            <View>
                                <Image
                                    className="w-12 h-12 rounded"
                                    source={require('../../assets/images/man.png')}
                                />
                            </View>
                            <View>
                                <Text className="text-white">
                                    Worried about an upcoming event 🤨
                                </Text>
                                <Text
                                    style={{ fontSize: hp(3) }}
                                    className="font-semibold mt-1 text-white"
                                >
                                    Emmanuel C.
                                </Text>
                            </View>
                        </View>
                        <Search text="Find amazing events, vendors etc" />
                    </View>
                </SafeAreaView>
            </View>

            <View>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ paddingBottom: 160 }}
                >
                    <View className="bg-[#292B37] h-[24vh]">
                        <View
                            className="mx-auto mt-2"
                            style={{ width: wp('90%') }}
                        >
                            <View className="flex justify-between items-center flex-row space-x-3">
                                <View>
                                    <Text
                                        style={{ fontSize: hp(3) }}
                                        className="text-white"
                                    >
                                        Popular Events 🔥
                                    </Text>
                                </View>
                                <View>
                                    <Text
                                        style={{ fontSize: hp(2.5) }}
                                        className="text-[#FC7210]"
                                    >
                                        See All
                                    </Text>
                                </View>
                            </View>
                        </View>
                        <View>
                            <ScrollView
                                className="flex flex-row space-x-4 my-4"
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                contentContainerStyle={{
                                    paddingHorizontal: 15,
                                }}
                            >
                                <TouchableOpacity className="px-4 py-2 rounded  bg-[#FC7210]">
                                    <Text
                                        className="text-white"
                                        style={{ fontSize: hp(2.3) }}
                                    >
                                        Music
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity className="px-4 py-2 rounded  bg-[#4A4D56]">
                                    <Text
                                        className="text-white"
                                        style={{ fontSize: hp(2.3) }}
                                    >
                                        Education
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity className="px-4 py-2 rounded  bg-[#4A4D56]">
                                    <Text
                                        className="text-white"
                                        style={{ fontSize: hp(2.3) }}
                                    >
                                        Fashion
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity className="px-4 py-2 rounded  bg-[#4A4D56]">
                                    <Text
                                        className="text-white"
                                        style={{ fontSize: hp(2.3) }}
                                    >
                                        Food & Drinks
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity className="px-4 py-2 rounded  bg-[#4A4D56]">
                                    <Text
                                        className="text-white"
                                        style={{ fontSize: hp(2.3) }}
                                    >
                                        Health
                                    </Text>
                                </TouchableOpacity>
                            </ScrollView>
                        </View>
                    </View>
                    <View className="bg-[#FFF9F4]">
                        <View className="-mt-16">
                            <ScrollView
                                className="flex flex-row space-x-4"
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                contentContainerStyle={{
                                    paddingHorizontal: 15,
                                }}
                            >
                                {[1, 2, 3, 4, 5].map((_, index) => (
                                    <Link href={'/event'} key={index}>
                                        <View className="bg-white rounded-md h-fit shadow-lg px-4 py-3">
                                            <Image
                                                className="w-full rounded-md"
                                                source={require('../../assets/images/timeless_small.png')}
                                            />
                                            <Text
                                                style={{ fontSize: hp(3) }}
                                                className="mt-2 font-semibold"
                                            >
                                                Timeless International Concert
                                            </Text>
                                            <View className="flex flex-row my-2 space-x-1 items-center justify-between">
                                                <View className="flex flex-row items-center">
                                                    <EvilIcons
                                                        size={20}
                                                        name="calendar"
                                                        color="#FC7210"
                                                    />
                                                    <Text>
                                                        12 - 15 December 23
                                                    </Text>
                                                </View>
                                                <View className="flex flex-row items-center">
                                                    <EvilIcons
                                                        size={20}
                                                        name="location"
                                                        color="#FC7210"
                                                    />
                                                    <Text>
                                                        123 Lagos Ibadan road
                                                    </Text>
                                                </View>
                                            </View>
                                            <View className="flex flex-row space-x-1 items-center justify-between">
                                                <View className="flex items-center flex-row space-x-1">
                                                    <Image
                                                        source={require('../../assets/images/members.png')}
                                                    />
                                                    <Text>Members</Text>
                                                </View>
                                                <View>
                                                    <TouchableOpacity className="px-4 py-2 rounded  bg-[#2D3139]">
                                                        <Text className="text-white">
                                                            Promoted
                                                        </Text>
                                                    </TouchableOpacity>
                                                </View>
                                            </View>
                                        </View>
                                    </Link>
                                ))}
                            </ScrollView>
                        </View>
                        <View>
                            <EventItems />
                            <VerifiedVendors />
                        </View>
                    </View>
                </ScrollView>
            </View>
        </View>
    );
}
