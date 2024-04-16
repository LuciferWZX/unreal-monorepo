import * as AvatarPrimitive from '@radix-ui/react-avatar';
import { ComponentPropsWithoutRef } from 'react';
export type AvatarImageProps = ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>;
declare const AvatarImage: import("react").ForwardRefExoticComponent<Omit<AvatarPrimitive.AvatarImageProps & import("react").RefAttributes<HTMLImageElement>, "ref"> & import("react").RefAttributes<HTMLImageElement>>;
export default AvatarImage;
