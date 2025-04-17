import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { NavigationProp } from '@react-navigation/native';

type Props = {
  navigation: NavigationProp<any>; // Adjust with your type if you're using TypeScript stack typing
};

const StateScreen: React.FC<Props> = ({ navigation }) => {
  const [state, setState] = useState('');
  const [exam, setExam] = useState('');
  const [referralCode, setReferralCode] = useState('');
  const [howHeard, setHowHeard] = useState('');

  const handleCreateAccount = () => {
    if (!state || !exam || !howHeard) {
      alert('Please fill all required fields.');
      return;
    }
  
    console.log('Account created with:', { state, exam, referralCode, howHeard });
  
    // ✅ Navigate to the next screen (e.g., 'CityScreen')
    navigation.navigate('City', {
      state,
      exam,
      referralCode,
      howHeard,
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Set your preferences</Text>
      <Text style={styles.subtitle}>(You can change this later in settings)</Text>

      {/* State Dropdown */}
      <Text style={styles.label}>State</Text>
      <View style={styles.pickerContainer}>
        <Picker selectedValue={state} onValueChange={setState} style={styles.picker}>
          <Picker.Item label="Select state" value="" />
          <Picker.Item label="California" value="California" />
          <Picker.Item label="New York" value="New York" />
          <Picker.Item label="Texas" value="Texas" />
        </Picker>
      </View>

      {/* Exam Dropdown */}
      <Text style={styles.label}>Exam</Text>
      <View style={styles.pickerContainer}>
        <Picker selectedValue={exam} onValueChange={setExam} style={styles.picker}>
          <Picker.Item label="Select your preferred exam" value="" />
          <Picker.Item label="Exam A" value="examA" />
          <Picker.Item label="Exam B" value="examB" />
          <Picker.Item label="Exam C" value="examC" />
        </Picker>
      </View>

      {/* How did you hear about us Dropdown */}
      <Text style={styles.label}>How did you hear about us?</Text>
      <View style={styles.pickerContainer}>
        <Picker selectedValue={howHeard} onValueChange={setHowHeard} style={styles.picker}>
          <Picker.Item label="Select an option" value="" />
          <Picker.Item label="Google" value="google" />
          <Picker.Item label="Friend" value="friend" />
          <Picker.Item label="Social Media" value="socialMedia" />
        </Picker>
      </View>

      {/* Referral Code */}
      <TouchableOpacity>
        <Text style={styles.referralText}>Have a referral code?</Text>
      </TouchableOpacity>
      <TextInput
        style={styles.input}
        value={referralCode}
        onChangeText={setReferralCode}
        placeholder="Enter referral code"
      />

      {/* Create Account Button */}
      <TouchableOpacity style={styles.createButton} onPress={handleCreateAccount}>
        <Text style={styles.createButtonText}>Create Account</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flexGrow: 1, padding: 20, backgroundColor: 'white' },
  title: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 5 },
  subtitle: { fontSize: 14, color: 'gray', textAlign: 'center', marginBottom: 20 },
  label: { fontSize: 16, fontWeight: '500', marginBottom: 5 },
  
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 15,
    backgroundColor: '#fff',
    overflow: 'hidden',
  },
  picker: { height: 60 },

  referralText: { fontSize: 14, color: 'orange', marginBottom: 5, textDecorationLine: 'underline' },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    marginBottom: 20,
  },

  createButton: {
    backgroundColor: '#1565C0',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  createButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default StateScreen;
