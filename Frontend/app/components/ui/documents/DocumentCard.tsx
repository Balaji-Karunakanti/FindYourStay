import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import DocumentStatus from "./DocumentStatus";
import { DocumentItem } from "../../../types/document";

type Props = {
  item: DocumentItem;
  onView?: () => void;
  onReplace?: () => void;
  onUpload?: () => void;
};

export default function DocumentCard({
  item,
  onView,
  onReplace,
  onUpload,
}: Props) {
  return (
    <View
      className={`mx-4 mb-5 rounded-3xl bg-white p-5 ${
        item.uploaded ? "border border-gray-100" : "border border-dashed border-gray-300"
      }`}
      style={{
        shadowColor: "#000",
        shadowOpacity: 0.05,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 4 },
        elevation: 2,
      }}
    >
      {/* Header */}
      <View className="flex-row items-center">
        <View
          className={`h-14 w-14 items-center justify-center rounded-2xl ${
            item.uploaded ? "bg-teal-50" : "bg-gray-100"
          }`}
        >
          <Ionicons
            name={item.icon as any}
            size={28}
            color={item.uploaded ? "#0F766E" : "#9CA3AF"}
          />
        </View>

        <View className="ml-4 flex-1">
          <Text className="text-xl font-semibold text-[#102A83]">
            {item.title}
          </Text>

          <DocumentStatus status={item.status} />
        </View>
      </View>

      {/* Uploaded */}
      {item.uploaded ? (
        <View className="mt-6 flex-row justify-between">
          <TouchableOpacity
            onPress={onView}
            className="mr-2 flex-1 items-center rounded-xl border border-[#CBD5E1] py-3"
          >
            <Text className="font-medium text-[#102A83]">View</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={onReplace}
            className="ml-2 flex-1 items-center rounded-xl border border-[#CBD5E1] py-3"
          >
            <Text className="font-medium text-[#102A83]">Replace</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <TouchableOpacity
          onPress={onUpload}
          className="mt-6 items-center rounded-xl bg-[#102A83] py-4"
        >
          <Text className="font-semibold text-white">
            Upload Document
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
}