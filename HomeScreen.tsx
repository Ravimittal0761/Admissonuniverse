import React from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  Image,
  StyleSheet,
  Dimensions,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  Linking,
} from 'react-native';

const { width } = Dimensions.get('window');

// College Card Component
const CollegeCard = ({
  name,
  fees,
  image,
  url,
}: {
  name: string;
  fees: string;
  image: any;
  url: string;
}) => (
  <TouchableOpacity onPress={() => Linking.openURL(url)} style={styles.horizontalCardContainer}>
    <View style={styles.horizontalCard}>
      <Image source={image} style={styles.horizontalCardImage} />
      <View style={{ flex: 1, padding: 15 }}>
        <Text style={styles.cardTitle}>{name}</Text>
        <Text style={{ fontSize: 14, color: '#007bff' }}>First Year Fees: {fees}</Text>
      </View>
    </View>
  </TouchableOpacity>
);

// University Card Component
const UniversityCard = ({ image }: { image: any }) => (
  <View style={styles.card}>
    <Image source={image} style={styles.cardImage} />
    <Text style={styles.cardText}>Sharda University</Text>
  </View>
);

// Main Screen
const HomeScreen: React.FC = () => {
  return (
    <ScrollView style={styles.container}>
      <ImageBackground
        source={require('../../assets/images/amityss.jpg')}
        style={styles.topSection}
        resizeMode="cover"
      >
        <View style={styles.overlay}>
          <Text style={styles.headerText}>Admission Universe</Text>
          <Text style={styles.tagline}>
            Search MBBS Colleges, Courses, and Exams in Noida
          </Text>
          <Text style={styles.collegeCount}>18824 Colleges</Text>
          <TextInput
            style={styles.searchBar}
            placeholder="Search for College Fees, Names, and More..."
          />
          <Button title="Change Goal & City/State" onPress={() => {}} />
        </View>
      </ImageBackground>

      {/* Top Colleges Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Top Colleges Near Noida</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {[
            {
              name: 'Sharda University',
              fees: '₹11.1 Lakh',
              image: require('../../assets/images/galgooty.jpeg'),
              url: 'https://admissionuniverse.in/sharda',
            },
            {
              name: 'Santosh University',
              fees: '₹24 Lakh',
              image: require('../../assets/images/galgooty.jpeg'),
              url: 'https://www.santosh.ac.in',
            },
            {
              name: 'Amity University',
              fees: '₹10.5 Lakh',
              image: require('../../assets/images/galgooty.jpeg'),
              url: 'https://www.amity.edu',
            },
          ].map((college, i) => (
            <CollegeCard
              key={i}
              name={college.name}
              fees={college.fees}
              image={college.image}
              url={college.url}
            />
          ))}
        </ScrollView>
      </View>

      {/* Top Universities Carousel */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Top Universities/Colleges for MBBS</Text>
        <ScrollView horizontal pagingEnabled showsHorizontalScrollIndicator={false}>
          {Array(4)
            .fill(0)
            .map((_, i) => (
              <View key={i} style={styles.card}>
                <Image source={require('../../assets/images/galgooty.jpeg')} style={styles.cardImage} />
                <View style={styles.cardContent}>
                  <Text style={styles.cardTitle}>AIIMS - New Delhi</Text>
                  <Text style={styles.cardSubtitle}>MBBS First Year Fees: ₹1.6K</Text>
                  <Text style={styles.cardRating}>Rating: 4.3/5 (238 reviews)</Text>
                  <Text style={styles.cardRank}>Ranked 1 out of 55 by India Today, 2025</Text>
                  <View style={styles.buttonContainer}>
                    <Button title="View All Courses & Fees" onPress={() => {}} />
                    <Button title="Download Brochure" onPress={() => {}} />
                  </View>
                </View>
              </View>
            ))}
        </ScrollView>
      </View>

      {/* College Grid Cards */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Top Colleges Near Noida</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <UniversityCard image={require('../../assets/images/niper.jpeg')} />
          <UniversityCard image={require('../../assets/images/niper.jpeg')} />
          <UniversityCard image={require('../../assets/images/niper.jpeg')} />
          <UniversityCard image={require('../../assets/images/niper.jpeg')} />
        </ScrollView>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8f8f8' },
  topSection: {
    width: '100%',
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  headerText: { fontSize: 24, fontWeight: 'bold', color: '#fff', marginBottom: 5 },
  tagline: { fontSize: 16, color: '#ddd', marginBottom: 10, textAlign: 'center' },
  collegeCount: { fontSize: 14, color: '#ccc', marginBottom: 15 },
  searchBar: {
    width: '90%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: '#fff',
    marginBottom: 10,
  },
  section: { marginVertical: 20, paddingHorizontal: 10 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginRight: 10,
    padding: 10,
    alignItems: 'center',
    width: width * 0.7,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  cardImage: { width: '100%', height: 150, borderRadius: 10 },
  cardText: { marginTop: 10, fontSize: 14, color: '#333', textAlign: 'center' },
  cardTitle: { fontSize: 16, fontWeight: 'bold', color: '#333', marginBottom: 5 },
  cardSubtitle: { fontSize: 14, color: '#007bff' },
  cardRating: { fontSize: 13, color: '#FFA000' },
  cardRank: { fontSize: 12, color: '#444', marginVertical: 8 },
  buttonContainer: { marginTop: 8, gap: 8 },
  cardContent: { padding: 10 },

  horizontalCardContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
    padding: 10,
  },
  horizontalCard: {
    flexDirection: 'row',
    alignItems: 'center',
    width: width * 0.9,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    overflow: 'hidden',
  },
  horizontalCardImage: {
    width: width * 0.35,
    height: 100,
    resizeMode: 'cover',
  },
});

export default HomeScreen;
