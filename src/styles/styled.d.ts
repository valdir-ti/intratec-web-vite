import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;
    colors: {
      text: string;
      secondText: string;
      background: string;
      secondBackground: string;
      menu: string;
      menuActive: string;
      border: string;
      hover: string;
      logo: string;
      menuIcon: string;
      navbar: string;
      activeBackground: string;
      activeText: string;
      pendingBackground: string;
      pendingText: string;
      passiveBackground: string;
      passiveText: string;
      viewButton: string;
      viewButtonText: string;
      deleteButton: string;
      deleteButtonText: string;
    };
  }
}
