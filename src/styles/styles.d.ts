import "styled-components";
import { ThemeType } from "./theme";

/* eslint-disable @typescript-eslint/no-empty-object-type */
declare module "styled-components" {
    export interface DefaultTheme extends ThemeType {}
}
