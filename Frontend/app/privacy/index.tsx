import { useState } from "react";
import { SafeAreaView, ScrollView, View } from "react-native";

import {
  PrivacyHeader,
  SectionTitle,
  SettingRow,
  ToggleRow,
  FooterInfo,
} from "../components/ui/privacy";

export default function PrivacyScreen() {
  const [faceId, setFaceId] = useState(true);
  const [phone, setPhone] = useState(false);
  const [email, setEmail] = useState(true);
  const [offers, setOffers] = useState(true);
  const [marketing, setMarketing] = useState(false);

  return (
    <SafeAreaView className="flex-1 mt-12 bg-[#F8FAFC]">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 40 }}
      >
        <PrivacyHeader />

        {/* Security */}
        <SectionTitle title="Security" />

        <View className="mx-5 rounded-3xl bg-white overflow-hidden shadow-sm">
          <SettingRow
            title="Change Password"
            icon="lock-closed-outline"
            onPress={() => {}}
          />

          <SettingRow
            title="Two-Factor Authentication"
            subtitle="Strongly recommended"
            icon="shield-checkmark-outline"
            onPress={() => {}}
          />

          <SettingRow
            title="Login Devices"
            icon="phone-portrait-outline"
            onPress={() => {}}
          />

          <ToggleRow
            title="Face ID / Fingerprint"
            subtitle="Use biometrics for secure login"
            icon="finger-print-outline"
            value={faceId}
            onValueChange={setFaceId}
          />
        </View>

        {/* Privacy */}
        <SectionTitle title="Privacy Settings" />

        <View className="mx-5 rounded-3xl bg-white overflow-hidden shadow-sm">
          <ToggleRow
            title="Show Phone Number"
            subtitle="Allow hosts to see your phone number"
            icon="call-outline"
            value={phone}
            onValueChange={setPhone}
          />

          <ToggleRow
            title="Show Email Address"
            subtitle="Allow hosts to contact you via email"
            icon="mail-outline"
            value={email}
            onValueChange={setEmail}
          />

          <ToggleRow
            title="Personalized Offers"
            subtitle="Receive recommendations based on your activity"
            icon="gift-outline"
            value={offers}
            onValueChange={setOffers}
          />

          <ToggleRow
            title="Marketing Notifications"
            subtitle="Get updates about discounts and offers"
            icon="notifications-outline"
            value={marketing}
            onValueChange={setMarketing}
          />
        </View>

        {/* Account */}
        <SectionTitle title="Account Management" />

        <View className="mx-5 rounded-3xl bg-white overflow-hidden shadow-sm">
          <SettingRow
            title="Download My Data"
            icon="download-outline"
            onPress={() => {}}
          />

          <SettingRow
            title="Deactivate Account"
            icon="pause-circle-outline"
            onPress={() => {}}
          />

          <SettingRow
            title="Delete Account"
            icon="trash-outline"
            danger
            onPress={() => {}}
          />
        </View>

        <FooterInfo />
      </ScrollView>
    </SafeAreaView>
  );
}