import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type Props = {
  uploaded: number;
  total: number;
  progress: number; // value between 0 and 1
};

export default function VerificationCard({
  uploaded,
  total,
  progress,
}: Props) {
  return (
    <View
      className="mx-4 mt-5 rounded-3xl bg-white p-5"
      style={{
        shadowColor: "#000",
        shadowOpacity: 0.05,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 4 },
        elevation: 2,
      }}
    >
      {/* Header */}
      <View className="flex-row items-start justify-between">
        <View>
          <Text className="text-xs font-medium uppercase tracking-widest text-gray-500">
            Verification Status
          </Text>

          <Text className="mt-1 text-3xl font-bold text-[#102A83]">
            Pending Verification
          </Text>
        </View>

        <View className="rounded-full bg-[#EEF2FF] px-4 py-2">
          <Text className="font-semibold text-[#102A83]">
            {uploaded} / {total} Uploaded
          </Text>
        </View>
      </View>

      {/* Progress Bar */}
      <View className="mt-6 h-2 overflow-hidden rounded-full bg-gray-200">
        <View
          className="h-full rounded-full bg-[#0F766E]"
          style={{
            width: `${progress * 100}%`,
          }}
        />
      </View>

      {/* Info Box */}
      <View className="mt-6 flex-row rounded-2xl bg-gray-50 p-4">
        <Ionicons
          name="information-circle-outline"
          size={24}
          color="#102A83"
        />

        <Text className="ml-3 flex-1 text-[15px] leading-6 text-gray-600">
          Hostels require identity verification to ensure a safe community for
          all residents. Complete your profile to start booking.
        </Text>
      </View>
    </View>
  );
}