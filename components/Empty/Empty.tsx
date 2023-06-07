import { styled } from "@/config/stitches.config";
import { Box } from "../Container";
import { Text } from "@/components/Text/Text";
import { Icon } from "@/components/Icons";

type EmtpyComponentProps = {
  title: string;
  message: string;
};

const StyledEmptyComponent = styled(Box, {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  background: "$grey10",
  padding: "$48 $12",
  borderRadius: "$12",
});

export const Empty = ({ title, message }: EmtpyComponentProps) => (
  <StyledEmptyComponent>
    <Icon type="search" />
    <Text size="big">{title}</Text>
    <Text size="small">{message}</Text>
  </StyledEmptyComponent>
);
