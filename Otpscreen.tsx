import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';

const { width } = Dimensions.get('window');

interface OtpscreenProps {
  navigation: {
    navigate: (screen: string) => void;
  };
}

const Otpscreen: React.FC<OtpscreenProps> = ({ navigation }) => {
  const [otp, setOtp] = useState<string[]>(['', '', '', '']);
  const [countdown, setCountdown] = useState<number>(30);

  const inputs = useRef<(TextInput | null)[]>([]);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown]);

  const handleChange = (text: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    if (text && index < 3) {
      inputs.current[index + 1]?.focus();
    }
  };

  const verifyOtp = () => {
    const enteredOtp = otp.join('');
    if (enteredOtp.length < 4) {
      alert('Please enter a valid 4-digit OTP.');
      return;
    }

    alert('OTP Verified');
    navigation.navigate('user');
  };

  const resendOtp = () => {
    setCountdown(30);
    alert('OTP has been resent.');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Verify</Text>
      <Text style={styles.notification}>
        An OTP has been sent to <Text style={styles.phoneNumber}>+91 1234546789</Text>
        {'\n'}Please Enter it to Continue.
      </Text>

      <TouchableOpacity>
        <Text style={styles.changeNumber}>
          Wrong Number? <Text style={styles.changeLink}>Change</Text>
        </Text>
      </TouchableOpacity>

      <Text style={styles.otpLabel}>OTP</Text>

      <View style={styles.otpContainer}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            ref={(ref) => (inputs.current[index] = ref)}
            value={digit}
            onChangeText={(text) => handleChange(text, index)}
            maxLength={1}
            keyboardType="numeric"
            style={styles.otpInput}
          />
        ))}
      </View>

      <TouchableOpacity style={styles.verifyButton} onPress={verifyOtp}>
        <Text style={styles.verifyButtonText}>Verify</Text>
      </TouchableOpacity>

      {countdown > 0 ? (
        <Text style={styles.countdownText}>Resend OTP in {countdown} Sec</Text>
      ) : (
        <TouchableOpacity onPress={resendOtp}>
          <Text style={styles.resendLink}>Resend OTP</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 160,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  notification: {
    fontSize: 14,
    color: '#333',
    textAlign: 'center',
    marginBottom: 10,
  },
  phoneNumber: {
    fontWeight: 'bold',
  },
  changeNumber: {
    fontSize: 14,
    color: '#000',
    marginBottom: 25,
  },
  changeLink: {
    color: '#007BFF',
    textDecorationLine: 'underline',
  },
  otpLabel: {
    fontSize: 16,
    marginBottom: 20,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    alignSelf: 'center',
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 30,
  },
  otpInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    width: 50,
    height: 50,
    textAlign: 'center',
    fontSize: 18,
    backgroundColor: '#fff',
  },
  verifyButton: {
    backgroundColor: '#0057A7',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 5,
    width: '80%',
    alignItems: 'center',
    marginBottom: 20,
  },
  verifyButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  countdownText: {
    fontSize: 14,
    color: '#666',
  },
  resendLink: {
    fontSize: 14,
    color: '#007BFF',
    textDecorationLine: 'underline',
  },
});

export default Otpscreen;