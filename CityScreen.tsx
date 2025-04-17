import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import {
  MaterialIcons,
  Ionicons,
  FontAwesome5,
} from "@expo/vector-icons";

type CourseCategory = {
  id: string;
  category: string;
  colleges: number;
  icon: JSX.Element;
  subCourses: string[];
};

const DATA: CourseCategory[] = [
  {
    id: "1",
    category: "Engineering",
    colleges: 6085,
    icon: <MaterialIcons name="engineering" size={20} color="black" />,
    subCourses: ["BE/B.Tech", "Diploma in Engineering", "ME/M.Tech"],
  },
  {
    id: "2",
    category: "Management",
    colleges: 6806,
    icon: <Ionicons name="bar-chart" size={20} color="black" />,
    subCourses: ["BBA/BBM", "MBA/PGDM", "Executive MBA"],
  },
  {
    id: "3",
    category: "Commerce",
    colleges: 4425,
    icon: <MaterialIcons name="shopping-cart" size={20} color="black" />,
    subCourses: ["B.Com", "M.Com", "CA", "CMA", "CS"],
  },
  {
    id: "4",
    category: "Arts",
    colleges: 4952,
    icon: <FontAwesome5 name="palette" size={20} color="black" />,
    subCourses: ["BA", "MA", "Fine Arts", "History", "Sociology", "Psychology"],
  },
  {
    id: "5",
    category: "Medical",
    colleges: 1827,
    icon: <FontAwesome5 name="user-md" size={20} color="black" />,
    subCourses: ["MBBS", "BDS", "BAMS", "BHMS", "MD/MS"],
  },
  {
    id: "6",
    category: "Design",
    colleges: 1082,
    icon: <MaterialIcons name="design-services" size={20} color="black" />,
    subCourses: ["B.Des", "M.Des", "Interior Design", "Fashion Design", "Graphic Design"],
  },
  {
    id: "7",
    category: "Science",
    colleges: 5731,
    icon: <MaterialIcons name="science" size={20} color="black" />,
    subCourses: ["B.Sc", "M.Sc", "Physics", "Chemistry", "Biotechnology", "Zoology"],
  },
  {
    id: "8",
    category: "Pharmacy",
    colleges: 1767,
    icon: <MaterialIcons name="local-pharmacy" size={20} color="black" />,
    subCourses: ["B.Pharm", "M.Pharm", "D.Pharm", "Pharm.D"],
  },
  {
    id: "9",
    category: "Paramedical",
    colleges: 1364,
    icon: <FontAwesome5 name="notes-medical" size={20} color="black" />,
    subCourses: ["BPT", "BMLT", "B.Sc Nursing", "DMLT", "BOT"],
  },
  {
    id: "10",
    category: "Computer Applications",
    colleges: 4202,
    icon: <MaterialIcons name="computer" size={20} color="black" />,
    subCourses: ["BCA", "MCA", "PGDCA", "Data Science", "Cyber Security"],
  },
  {
    id: "11",
    category: "Education",
    colleges: 2811,
    icon: <MaterialIcons name="school" size={20} color="black" />,
    subCourses: ["B.Ed", "M.Ed", "D.El.Ed", "B.P.Ed"],
  },
];

const CITIES = [
  "Noida", "Indore", "Gurugram", "Delhi", "Mumbai", "Bangalore",
  "Pune", "Chennai", "Hyderabad", "Kolkata", "Ahmedabad", "Jaipur",
  "Lucknow", "Bhopal", "Nagpur", "Surat", "Chandigarh", "Patna",
  "Ranchi", "Dehradun", "Raipur", "Thiruvananthapuram"
];

const FrontScreen = () => {
  const navigation = useNavigation();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchText, setSearchText] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [activeTab, setActiveTab] = useState<"courses" | "cityState">("courses");

  const toggleCategory = (id: string) =>
    setSelectedCategory(selectedCategory === id ? null : id);

  const renderItem = ({ item }: { item: CourseCategory }) => (
    <View>
      <TouchableOpacity
        onPress={() => toggleCategory(item.id)}
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingVertical: 10,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
          {item.icon}
          <Text style={{ fontWeight: "bold", color: "#0056b3" }}>{item.category}</Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 6 }}>
          <Text style={{ color: "#555" }}>{item.colleges} Colleges</Text>
          <MaterialIcons name="keyboard-arrow-down" size={20} color="gray" />
        </View>
      </TouchableOpacity>

      {selectedCategory === item.id && (
        <View style={{ paddingLeft: 30 }}>
          {item.subCourses.map((sub, index) => (
            <TouchableOpacity key={index}>
              <Text style={{ fontSize: 14, color: "#444", marginBottom: 4 }}>
                {sub}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
      <View style={{ height: 1, backgroundColor: "#ddd", marginVertical: 6, marginLeft: 35 }} />
    </View>
  );

  return (
    <View style={{ flex: 1, padding: 16, paddingTop: 40, backgroundColor: "#f9f9f9" }}>
      <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 10 }}>
        Select Goal & City/State
      </Text>

      {/* Tabs */}
      <View style={{ flexDirection: "row", marginBottom: 10 }}>
        {["courses", "cityState"].map((tab) => (
          <TouchableOpacity key={tab} onPress={() => setActiveTab(tab as any)}>
            <Text
              style={{
                marginRight: 20,
                fontSize: 16,
                color: activeTab === tab ? "orange" : "grey",
                borderBottomWidth: activeTab === tab ? 2 : 0,
                borderBottomColor: "orange",
              }}
            >
              {tab === "courses" ? "Goals" : "City/State"}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Courses Tab */}
      {activeTab === "courses" && (
        <>
          <TextInput
            style={{
              backgroundColor: "#fff",
              borderRadius: 8,
              paddingHorizontal: 12,
              paddingVertical: 10,
              marginBottom: 10,
              borderColor: "#ddd",
              borderWidth: 1,
            }}
            placeholder="Search your Courses"
            value={searchText}
            onChangeText={setSearchText}
          />
          <FlatList
            data={DATA.filter((item) =>
              item.category.toLowerCase().includes(searchText.toLowerCase())
            )}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
            contentContainerStyle={{ paddingBottom: 100 }}
          />
        </>
      )}

      {/* City/State Tab */}
      {activeTab === "cityState" && (
        <ScrollView style={{ backgroundColor: "#fff", borderRadius: 8, padding: 16 }}>
          <Text style={{ fontWeight: "bold", marginBottom: 10, fontSize: 16 }}>
            Select Your City
          </Text>

          <TextInput
            style={{
              backgroundColor: "#fff",
              borderRadius: 8,
              paddingHorizontal: 12,
              paddingVertical: 10,
              marginBottom: 10,
              borderColor: "#ddd",
              borderWidth: 1,
            }}
            placeholder="Search City"
            value={searchText}
            onChangeText={setSearchText}
          />

          {CITIES.filter((city) =>
            city.toLowerCase().includes(searchText.toLowerCase())
          ).map((city, index) => (
            <View key={index}>
              <TouchableOpacity
               onPress={() => {
                setSelectedCity(city);
                navigation.navigate("Homes", { selectedCity: city });
// FIXED
              }}
              
                style={{ paddingVertical: 8 }}
              >
                <Text
                  style={{
                    fontSize: 16,
                    color: selectedCity === city ? "orange" : "#333",
                    fontWeight: selectedCity === city ? "bold" : "normal",
                  }}
                >
                  {city}
                </Text>
              </TouchableOpacity>
              <View style={{ height: 1, backgroundColor: "#ddd", marginLeft: 35 }} />
            </View>
          ))}
        </ScrollView>
      )}
    </View>
  );
};

export default FrontScreen;
