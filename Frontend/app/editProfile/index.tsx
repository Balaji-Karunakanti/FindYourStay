import React, { useState } from "react";
import {
  ScrollView,
  SafeAreaView,
  Alert,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { router } from "expo-router";

import {
  EditProfileHeader,
  ProfilePhoto,
  ProfileSection,
  InputField,
  DropdownField,
  BudgetSlider,
  PreferenceGroup,
  SaveButton,
} from "../components/ui/editProfile";

import {
  editProfileData,
  genderOptions,
  budget,
} from "../constants/editProfileData";

import { LifestylePreference } from "../types/editProfile";

export default function EditProfileScreen() {
  const [photo, setPhoto] = useState(
    require("../../assets/images/profile.jpg") // Change to your image
  );

  const [personal, setPersonal] = useState(
    editProfileData.personal
  );

  const [work, setWork] = useState(
    editProfileData.work
  );

  const [emergency, setEmergency] = useState(
    editProfileData.emergency
  );

  const [preferences, setPreferences] = useState<
    LifestylePreference[]
  >(editProfileData.lifestyle);

  const [loading, setLoading] = useState(false);

  const pickImage = async () => {
    const permission =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permission.granted) {
      Alert.alert(
        "Permission Required",
        "Please allow gallery permission."
      );
      return;
    }

    const result =
      await ImagePicker.launchImageLibraryAsync({
        mediaTypes:
          ImagePicker.MediaTypeOptions.Images,
        quality: 1,
        allowsEditing: true,
        aspect: [1, 1],
      });

    if (!result.canceled) {
      setPhoto({
        uri: result.assets[0].uri,
      });
    }
  };

  const togglePreference = (id: string) => {
    setPreferences((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              selected: !item.selected,
            }
          : item
      )
    );
  };

  const handleSave = async () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      Alert.alert(
        "Success",
        "Profile updated successfully."
      );
    }, 1500);
  };

  return (
    <SafeAreaView className="flex-1 mt-12 bg-gray-100">
      <EditProfileHeader
        onBack={() => router.back()}
        onSave={handleSave}
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          padding: 20,
          paddingBottom: 40,
        }}
      >
        <ProfilePhoto
          image={photo}
          onChangePhoto={pickImage}
        />

        {/* Personal Information */}

        <ProfileSection title="Personal Information">
          <InputField
            label="Full Name"
            value={personal.fullName}
            onChangeText={(text) =>
              setPersonal({
                ...personal,
                fullName: text,
              })
            }
          />

          <InputField
            label="Mobile Number"
            value={personal.mobile}
            keyboardType="phone-pad"
            onChangeText={(text) =>
              setPersonal({
                ...personal,
                mobile: text,
              })
            }
          />

          <InputField
            label="Email Address"
            value={personal.email}
            keyboardType="email-address"
            onChangeText={(text) =>
              setPersonal({
                ...personal,
                email: text,
              })
            }
          />

          <InputField
            label="Date of Birth"
            value={personal.dob}
            onChangeText={(text) =>
              setPersonal({
                ...personal,
                dob: text,
              })
            }
          />

          <DropdownField
            label="Gender"
            value={personal.gender}
            options={genderOptions}
            onValueChange={(value) =>
              setPersonal({
                ...personal,
                gender: value,
              })
            }
          />
        </ProfileSection>

        {/* Academic / Work */}

        <ProfileSection title="Academic / Work Information">
          <InputField
            label="College Name"
            value={work.collegeName}
            onChangeText={(text) =>
              setWork({
                ...work,
                collegeName: text,
              })
            }
          />

          <InputField
            label="Company Name"
            value={work.companyName}
            onChangeText={(text) =>
              setWork({
                ...work,
                companyName: text,
              })
            }
          />

          <InputField
            label="Occupation"
            value={work.occupation}
            onChangeText={(text) =>
              setWork({
                ...work,
                occupation: text,
              })
            }
          />

          <InputField
            label="Preferred City"
            value={work.preferredCity}
            onChangeText={(text) =>
              setWork({
                ...work,
                preferredCity: text,
              })
            }
          />

          <BudgetSlider
            value={work.budget}
            minimumValue={budget.min}
            maximumValue={budget.max}
            step={budget.step}
            onValueChange={(value) =>
              setWork({
                ...work,
                budget: value,
              })
            }
          />
        </ProfileSection>

        {/* Lifestyle */}

        <ProfileSection title="Lifestyle Preferences">
          <PreferenceGroup
            preferences={preferences}
            onToggle={togglePreference}
          />
        </ProfileSection>

        {/* Emergency */}

        <ProfileSection title="Emergency Contact">
          <InputField
            label="Contact Name"
            value={emergency.name}
            onChangeText={(text) =>
              setEmergency({
                ...emergency,
                name: text,
              })
            }
          />

          <InputField
            label="Relationship"
            value={emergency.relationship}
            onChangeText={(text) =>
              setEmergency({
                ...emergency,
                relationship: text,
              })
            }
          />

          <InputField
            label="Phone Number"
            value={emergency.phone}
            keyboardType="phone-pad"
            onChangeText={(text) =>
              setEmergency({
                ...emergency,
                phone: text,
              })
            }
          />
        </ProfileSection>

        <SaveButton
          loading={loading}
          onPress={handleSave}
        />
      </ScrollView>
    </SafeAreaView>
  );
}