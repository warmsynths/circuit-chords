import { css, unsafeCSS } from 'lit';
import themeScss from './theme.scss?inline';

export const themeStyles = css`${unsafeCSS(themeScss)}`;
