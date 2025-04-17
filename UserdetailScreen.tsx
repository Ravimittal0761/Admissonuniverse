import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Platform,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { NavigationProps } from '../(app)/navigationTypes';

const UserdetailScreen: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState<Date | null>(null);
  const [showDatePicker, setShowDatePicker] = useState(false);

  const navigation = useNavigation<NavigationProps>();

  const handleContinue = () => {
    if (!fullName || !email || !dateOfBirth) {
      Alert.alert('Error', 'Please fill in all the fields.');
      return;
    }

    navigation.navigate('state');
  };

  const onChangeDate = (event: any, selectedDate?: Date) => {
    if (selectedDate) {
      setDateOfBirth(selectedDate);
    }
    setShowDatePicker(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create a Admission Universe Account</Text>
      <Text style={styles.tagline}>Let’s get you the best seat that you deserve!</Text>

      {/* Full Name Input */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Enter Your Name"
          value={fullName}
          onChangeText={setFullName}
        />
        <Icon name="user" size={20} color="#000" />
      </View>

      {/* Email Input */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Enter Your Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <Icon name="envelope" size={18} color="#000" />
      </View>

      {/* Date of Birth Input */}
      <TouchableOpacity style={styles.inputContainer} onPress={() => setShowDatePicker(true)}>
        <Text style={[styles.textInput, { color: dateOfBirth ? '#000' : '#888' }]}>
          {dateOfBirth ? dateOfBirth.toDateString() : 'Date of Birth'}
        </Text>
        <Icon name="calendar" size={18} color="#000" />
      </TouchableOpacity>

      {showDatePicker && (
        <DateTimePicker
          value={dateOfBirth || new Date()}
          mode="date"
          display={Platform.OS === 'ios' ? 'spinner' : 'default'}
          onChange={onChangeDate}
        />
      )}

      <TouchableOpacity style={styles.button} onPress={handleContinue}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

export default UserdetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000',
  },
  tagline: {
    fontSize: 14,
    textAlign: 'center',
    color: '#444',
    marginBottom: 60,
  },
  headerContainer: {
    marginTop: 40,
    marginBottom: 30,
    alignItems: 'center',
  },
  
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    height: 50,
    marginBottom: 36,
    backgroundColor: '#fff',
  },
  textInput: {
    flex: 1,
    fontSize: 16,
    color: '#000',
  },
  button: {
    backgroundColor: '#1565C0',
    borderRadius: 6,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
