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

const index = () => {
    const router = useRouter()
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
                        <Search text="Search for verified vendors" />
                    </View>
                </SafeAreaView>
            </View>
            <View className="bg-[#FFF9F4]">
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ paddingBottom: 160 }}
                >
                    <View
                        className="mx-auto mt-2"
                        style={{ width: wp('90%') }}
                    >
                         <Text
                            style={{ fontSize: hp(3) }}
                            className="font-semibold mb-4 mt-1"
                        >
                            Verified Vendors
                        </Text>
                    </View>
                </ScrollView>
            </View>
        </View>
    );
};

export default index;
