import { content } from "@/content";
import HeaderBar from "@/components/HeaderBar";

export default function Header() {
  return (
    <HeaderBar
      nav={content.nav}
      phones={content.company.phones}
      name={content.company.name}
      menuLabel={content.ui.menu}
      closeLabel={content.ui.close}
      menuName={content.ui.mobileMenu}
      mainName={content.ui.mainMenu}
    />
  );
}
