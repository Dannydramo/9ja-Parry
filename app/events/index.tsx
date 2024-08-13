import Search from '@/components/forms/Search';
import { StatusBar } from 'expo-status-bar';
import { Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SimpleLineIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const items = [
    {
        image: require('../../assets/images/tags.png'),
        title: 'Name Tags/Badge',
    },
    {
        image: require('../../assets/images/ribbon.png'),
        title: 'Ribbon Package',
    },
    {
        image: require('../../assets/images/merchandise.png'),
        title: 'Merchandise',
    },
];

const index = () => {
    const router = useRouter();
    return (
        <View className="flex flex-1 bg-[#24272133]">
            <StatusBar style="dark" />
            <View>
                <SafeAreaView edges={['top']}>
                    <View className="mx-auto" style={{ width: wp('90%') }}>
                        <View className="flex flex-row w-[60%] mt-2 mb-4 items-center justify-between">
                            <TouchableOpacity
                                className="border border-[#D9D9D9] rounded-full p-2"
                                onPress={() => router.back()}
                            >
                                <SimpleLineIcons name="arrow-left" size={20} />
                            </TouchableOpacity>

                            <View>
                                <Text
                                    style={{ fontSize: hp(3) }}
                                    className="font-semibold"
                                >
                                    Search
                                </Text>
                            </View>
                        </View>
                        <Search bgColor text="Search for an event item" />
                    </View>
                </SafeAreaView>
            </View>
            <View className="bg-[#FFF9F4] h-full">
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ paddingBottom: 160 }}
                >
                    <View className="mx-auto mt-2" style={{ width: wp('90%') }}>
                        <Text
                            style={{ fontSize: hp(3) }}
                            className="font-semibold mb-4 mt-1"
                        >
                            Event Items
                        </Text>
                        {items.map((item, index) => (
                            <View
                                key={index}
                                className="my-3 flex flex-row space-x-2 items-center"
                            >
                                <View>
                                    <Image
                                        source={item.image}
                                        style={{ height: 120, width: 150 }}
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
                                        className="line-through my-2 text-[#242721]"
                                        style={{ fontSize: hp(2.2) }}
                                    >
                                        Fixed £145
                                    </Text>
                                    <Text style={{ fontSize: hp(2.8) }}>
                                        Selling from N10
                                    </Text>
                                </View>
                            </View>
                        ))}
                    </View>
                </ScrollView>
            </View>
        </View>
    );
};

export default index;
