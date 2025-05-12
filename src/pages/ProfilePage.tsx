import PageTopbar from "@/components/common/PageTopbar";
import ProfileForm from "@/components/profile/ProfileForm";

export default function ProfilePage() {
  return (
    <>
          <PageTopbar
          title="پروفایل"
          routes = {
            [
              {
                'name':'حساب کاربری',
                'href':'/'
              },
              
            ]
          }

        />

        <ProfileForm />
    </>
  )
}
