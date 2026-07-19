import { View } from "react-native";

import SectionHeader from "../common/SectionHeader";
import FAQItem from "./FAQItem";

import { faqs } from "../../../constants/helpData";

type Props = {
  onViewAll?: () => void;
};

export default function FAQAccordion({ onViewAll }: Props) {
  return (
    <View className="mt-4">
      <SectionHeader
        title="Frequently Asked Questions"
        actionText="View All"
        onPress={onViewAll}
      />

      <View className="px-5">
        {faqs.map((faq) => (
          <FAQItem key={faq.id} item={faq} />
        ))}
      </View>
    </View>
  );
}