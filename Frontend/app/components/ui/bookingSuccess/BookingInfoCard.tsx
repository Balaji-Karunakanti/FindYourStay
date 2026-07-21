import { View, Text, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { BookingSuccess } from "../../../types/bookingSuccess";

interface BookingInfoCardProps {
  booking: BookingSuccess;
}

export default function BookingInfoCard({
  booking,
}: BookingInfoCardProps) {
  return (
    <View className="mx-5 rounded-3xl bg-white p-5 shadow-sm border border-gray-100">

      {/* Booking ID */}
      <View className="flex-row items-center justify-between">
        <View>
          <Text className="text-xs uppercase tracking-widest text-gray-500">
            Booking ID
          </Text>

          <Text className="mt-1 text-base font-bold text-[#0A2472]">
            #{booking.bookingId}
          </Text>
        </View>

        {/* Paid Badge */}
        <View className="flex-row items-center rounded-full bg-teal-100 px-4 py-2">
          <Ionicons
            name="checkmark-circle"
            size={16}
            color="#0F766E"
          />

          <Text className="ml-1 font-semibold text-[#0F766E]">
            {booking.status}
          </Text>
        </View>
      </View>

      {/* Divider */}
      <View className="my-5 h-px bg-gray-200" />

      {/* Property */}
      <View>
        <Text className="text-xs uppercase tracking-widest text-gray-500">
          Property
        </Text>

        <Text className="mt-2 text-2xl font-bold text-gray-900">
          {booking.hostelName}
        </Text>

        <Text className="mt-1 text-base text-gray-500">
          {booking.roomType}
        </Text>
      </View>

      {/* Move In */}
      <View className="mt-8">
        <Text className="text-xs uppercase tracking-widest text-gray-500">
          Move-in Date
        </Text>

        <Text className="mt-2 text-2xl font-bold text-gray-900">
          {booking.moveInDate}
        </Text>

        <Text className="mt-1 text-lg font-semibold text-teal-700">
          £{booking.price.toFixed(2)} / month
        </Text>
      </View>

      {/* Divider */}
      <View className="my-6 h-px bg-gray-200" />

      {/* Address + Map */}
      <View className="flex-row justify-between">

        {/* Left */}
        <View className="mr-4 flex-1 flex-row">

          <Ionicons
            name="location-outline"
            size={22}
            color="#6B7280"
          />

          <View className="ml-3 flex-1">

            <Text className="text-base leading-6 text-gray-700">
              {booking.address}
            </Text>

            <TouchableOpacity
              activeOpacity={0.8}
              className="mt-3 flex-row items-center"
            >
              <Text className="text-base font-semibold text-teal-700">
                View on Map
              </Text>

              <Ionicons
                name="arrow-forward"
                size={18}
                color="#0F766E"
                style={{ marginLeft: 4 }}
              />
            </TouchableOpacity>

          </View>
        </View>

        {/* Map Preview */}
        <Image
          source={booking.mapImage}
          resizeMode="cover"
          className="h-24 w-24 rounded-xl"
        />
      </View>
    </View>
  );
}