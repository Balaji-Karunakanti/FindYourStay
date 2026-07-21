import { View, Text } from "react-native";

interface RoomInfoCardProps {
  occupancy: string;
  size: string;
  floor: string;
  inventory: string;
  preference: string;
}

export default function RoomInfoCard({
  occupancy,
  size,
  floor,
  inventory,
  preference,
}: RoomInfoCardProps) {
  return (
    <View className="mx-4 -mt-6 rounded-2xl bg-white p-5 shadow-sm border border-gray-100">
      {/* First Row */}
      <View className="flex-row justify-between">
        <InfoItem label="Occupancy" value={occupancy} />

        <InfoItem label="Size" value={size} />
      </View>

      {/* Second Row */}
      <View className="flex-row justify-between mt-5">
        <InfoItem label="Floor" value={floor} />

        <InfoItem
          label="Inventory"
          value={inventory}
          valueColor="text-emerald-600"
        />
      </View>

      {/* Third Row */}
      <View className="mt-5">
        <InfoItem
          label="Preference"
          value={preference}
        />
      </View>
    </View>
  );
}

interface InfoItemProps {
  label: string;
  value: string;
  valueColor?: string;
}

function InfoItem({
  label,
  value,
  valueColor = "text-[#1E3A8A]",
}: InfoItemProps) {
  return (
    <View className="w-[48%]">
      <Text className="text-xs text-gray-500">{label}</Text>

      <Text className={`mt-1 text-base font-semibold ${valueColor}`}>
        {value}
      </Text>
    </View>
  );
}