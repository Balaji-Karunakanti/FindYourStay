import ProfileHeader from "../components/ui/profile/ProfileHeader";
import ProfileCard from "../components/ui/profile/ProfileCard";
import ProfileStats from "../components/ui/profile/ProfileStats";
import ProfileMenu from "../components/ui/profile/ProfileMenu";
import LogoutButton from "../components/ui/profile/LogoutButton";
import { ScrollView } from "react-native";


export default function Profile() {
  return (
    <ScrollView
      className="flex-1 bg-[#F5F7FB]"
      showsVerticalScrollIndicator={false}
    >
      <ProfileHeader />

      <ProfileCard />

      <ProfileStats />

      <ProfileMenu />

      <LogoutButton />
    </ScrollView>
  );
}

