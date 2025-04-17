import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  Dimensions,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import CountryPicker, { Country } from 'react-native-country-picker-modal';
import * as Animatable from 'react-native-animatable';
import { NavigationProp } from '@react-navigation/native';

const { width } = Dimensions.get('window');

type Props = {
  navigation: NavigationProp<any>;
};

const IndexScreen: React.FC<Props> = ({ navigation }) => {
  const [selectedCountry, setSelectedCountry] = useState<{
    code: Country['cca2'];
    callingCode: string;
  }>({ code: 'IN', callingCode: '+91' });

  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSendOtp = () => {
    if (phoneNumber.length < 6) {
      Alert.alert('Error', 'Please enter a valid phone number.');
      return;
    }
    navigation.navigate('otp', {
      phone: `${selectedCountry.callingCode}${phoneNumber}`,
    });
  };

  return (
    <Animatable.View
      animation="fadeIn"
      style={{
        flex: 1,
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#fff',
      }}
    >
      <Image
        source={require('../../assets/images/edlogos.png')}
        style={{
          width: width * 0.8,
          height: 60,
          resizeMode: 'contain',
          marginVertical: 10,
        }}
      />
      <Image
        source={require('../../assets/images/mima.png')}
        style={{
          width: width * 0.8,
          height: 200,
          resizeMode: 'contain',
          marginVertical: 10,
        }}
      />
      <Text
        style={{
          fontSize: 18,
          fontWeight: 'bold',
          color: '#007BFF',
          marginBottom: 5,
          textAlign: 'center',
        }}
      >
        Welcome to Admission Universe
      </Text>
      <Text
        style={{
          fontSize: 14,
          color: '#333',
          marginBottom: 20,
          textAlign: 'center',
        }}
      >
        Verify Your Phone Number to Continue
      </Text>

      {/* Phone Input with Country Picker */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          width: '100%',
          borderWidth: 1,
          borderColor: '#ccc',
          borderRadius: 8,
          padding: 10,
          marginBottom: 20,
        }}
      >
        <CountryPicker
          countryCode={selectedCountry.code}
          withFlag
          withCallingCode
          withFilter
          onSelect={(country: Country) =>
            setSelectedCountry({
              code: country.cca2,
              callingCode: `+${country.callingCode[0]}`,
            })
          }
        />
        <Text style={{ marginHorizontal: 6, fontSize: 18 }}>|</Text>
        <TextInput
          placeholder="Enter Your Phone Number"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          keyboardType="phone-pad"
          style={{ flex: 1, fontSize: 16 }}
        />
      </View>

      {/* Send OTP via SMS */}
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          backgroundColor: '#007BFF',
          padding: 14,
          borderRadius: 8,
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: 12,
        }}
        onPress={handleSendOtp}
      >
        <Icon name="envelope" size={20} color="#fff" style={{ marginRight: 10 }} />
        <Text style={{ color: '#fff', fontSize: 16, fontWeight: '600' }}>
          Send OTP via SMS
        </Text>
      </TouchableOpacity>

      {/* Google OTP Option */}
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          backgroundColor: '#fff',
          borderWidth: 1,
          borderColor: '#000',
          padding: 14,
          borderRadius: 8,
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onPress={() => Alert.alert('Info', 'Google OTP feature coming soon!')}
      >
        <Icon name="google" size={20} color="#000" style={{ marginRight: 10 }} />
        <Text style={{ color: '#000', fontSize: 16, fontWeight: '600' }}>
          Send OTP via Google
        </Text>
      </TouchableOpacity>
    </Animatable.View>
  );
};

export default IndexScreen;
