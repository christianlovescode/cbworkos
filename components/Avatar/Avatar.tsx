import { styled } from "@/config/stitches.config";
import * as AvatarPrimitive from "@radix-ui/react-avatar";

const StyledAvatarRoot = styled(AvatarPrimitive.Root, {
  borderRadius: "$round",
  height: "24px",
  width: "24px",
});

const StyledAvatarImage = styled(AvatarPrimitive.Image, {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: "inherit",
});

const StyledAvatarFallback = styled(AvatarPrimitive.Fallback, {
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const Avatar = ({
  alt,
  src,
  fallback,
}: {
  alt: string;
  src: string;
  fallback: string;
}) => (
  <div style={{ display: "flex", gap: 20 }}>
    <StyledAvatarRoot>
      <StyledAvatarImage src={src} alt={alt} />
      <StyledAvatarFallback delayMs={600}>{fallback}</StyledAvatarFallback>
    </StyledAvatarRoot>
  </div>
);
