import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native";

import DocumentsHeader from "../components/ui/documents/DocumentsHeader";
import VerificationCard from "../components/ui/documents/VerificationCard";
import DocumentCard from "../components/ui/documents/DocumentCard";
import SecurityInfo from "../components/ui/documents/SecurityInfo";
import UploadButton from "../components/ui/documents/UploadButton";

import {
  documents,
  verification,
} from "../constants/documentData";

export default function DocumentsScreen() {
  return (
    <SafeAreaView className="flex-1 bg-[#F8FAFC]">
      <DocumentsHeader />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 120,
        }}
      >
        <VerificationCard
          uploaded={verification.uploaded}
          total={verification.total}
          progress={verification.progress}
        />

        {/* Section Title */}
        <ScrollView className="mt-6 px-4">
          <DocumentCard
            item={documents[0]}
            onView={() => console.log("View Aadhaar")}
            onReplace={() => console.log("Replace Aadhaar")}
          />

          <DocumentCard
            item={documents[1]}
            onView={() => console.log("View PAN")}
            onReplace={() => console.log("Replace PAN")}
          />

          <DocumentCard
            item={documents[2]}
            onUpload={() => console.log("Upload Passport")}
          />

          <DocumentCard
            item={documents[3]}
            onUpload={() => console.log("Upload License")}
          />

          <DocumentCard
            item={documents[4]}
            onUpload={() => console.log("Upload Student ID")}
          />
        </ScrollView>

        <SecurityInfo />
      </ScrollView>

      <UploadButton
        onPress={() => console.log("Upload New Document")}
      />
    </SafeAreaView>
  );
}