import { ScrollView } from "react-native";

import {
  HelpHeader,
  EmergencyCard,
  FAQAccordion,
  ContactCard,
  FeedbackCard,
} from "../components/ui/help";

import { contactOptions } from "../constants/helpData";

export default function HelpScreen() {
  const handleSOS = () => {
    console.log("SOS Pressed");
  };

  const handleContactAction = (title: string) => {
    console.log(`${title} pressed`);
  };

  const handleViewAll = () => {
    console.log("View All FAQs");
  };

  return (
    <ScrollView
      className="flex-1 bg-slate-100"
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        paddingBottom: 40,
      }}
    >
      {/* Header */}
      <HelpHeader />

      {/* Emergency Support */}
      <EmergencyCard onPress={handleSOS} />

      {/* FAQs */}
      <FAQAccordion onViewAll={handleViewAll} />

      {/* Contact Options */}
      {contactOptions.map((item) => (
        <ContactCard
          key={item.id}
          item={item}
          onPress={() => handleContactAction(item.title)}
        />
      ))}

      {/* Feedback */}
      <FeedbackCard />
    </ScrollView>
  );
}