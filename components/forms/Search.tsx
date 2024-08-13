import { View, Text, TextInput } from 'react-native';
import { EvilIcons, AntDesign } from '@expo/vector-icons';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Search = ({ bgColor, text }: { bgColor?: boolean; text: string }) => {
    return (
        <View>
            <View className="my-6 flex justify-between flex-row space-x-3">
                <View
                    className={` ${
                        bgColor ? 'bg-white' : 'bg-[#4A4D56]'
                    } w-[85%] rounded-md py-2 px-3 flex flex-row items-center space-x-1`}
                >
                    <EvilIcons
                        name="search"
                        size={22}
                        color={`${bgColor ? '#000000' : '#FFFFFFA6'}`}
                    />
                    <TextInput
                        style={{ fontSize: hp(2) }}
                        className={`bg-transparent ${!bgColor && 'text-white'}`}
                        placeholder={text}
                        keyboardType="default"
                    />
                </View>
                <View className="bg-[#4A4D56] rounded-md py-2 px-3">
                    <AntDesign name="filter" size={22} color={'#FFFFFFA6'} />
                </View>
            </View>
        </View>
    );
};

export default Search;
