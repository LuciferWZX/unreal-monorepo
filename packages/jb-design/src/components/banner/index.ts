import DefaultBanner, { DefaultBannerProps } from './Banner';
import { ForwardRefExoticComponent } from 'react';
type CompoundedComponent = ForwardRefExoticComponent<DefaultBannerProps>;
const Banner = DefaultBanner as CompoundedComponent;
Banner.displayName = 'Banner';
export default Banner;
