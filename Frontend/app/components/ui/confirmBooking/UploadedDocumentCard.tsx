import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface UploadedDocumentCardProps {
  documentName: string;
  fileName: string;
  onReplace?: () => void;
}

export default function UploadedDocumentCard({
  documentName,
  fileName,
  onReplace,
}: UploadedDocumentCardProps) {
  return (
    <View className="mx-5 mt-5 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
      {/* Section Title */}
      <Text className="mb-5 text-2xl font-bold text-[#142B7B]">
        Uploaded Documents
      </Text>

      {/* Document Card */}
      <View className="flex-row items-center rounded-xl border border-gray-200 bg-white p-3">
        {/* Icon */}
        <View className="h-16 w-16 items-center justify-center rounded-xl bg-[#EEF4FF]">
          <Ionicons
            name="document-text-outline"
            size={30}
            color="#142B7B"
          />
        </View>

        {/* File Details */}
        <View className="ml-4 flex-1">
          <Text className="text-lg font-semibold text-gray-900">
            {documentName}
          </Text>

          <Text
            numberOfLines={1}
            className="mt-1 text-sm text-gray-500"
          >
            {fileName}
          </Text>
        </View>

        {/* Replace Button */}
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={onReplace}
          className="rounded-lg border border-[#142B7B] px-5 py-2"
        >
          <Text className="font-semibold text-[#142B7B]">
            Replace
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}