import { styled } from "@/config/stitches.config";
import PrimitiveSkeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const StyledSkeleton = styled(PrimitiveSkeleton, {
  marginBottom: "$8",
});

export const Skeleton = (
  props: React.ComponentProps<typeof StyledSkeleton>,
) => {
  return (
    <StyledSkeleton highlightColor="#f5f5f5" baseColor="#f1f2f5" {...props} />
  );
};
