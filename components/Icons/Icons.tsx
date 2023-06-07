import {
  DotsThreeVertical,
  Question,
  ListMagnifyingGlass,
  Key,
  SquaresFour,
  UsersThree,
} from "@phosphor-icons/react";
import { AccessibleIcon } from "@radix-ui/react-accessible-icon";

export type IconType = "menu" | "search" | "admin" | "members" | "groups";

export const Icon = ({
  type,
  size = 24,
}: {
  type: IconType;
  size?: number;
}) => {
  let IconComponent = null;

  switch (type) {
    case "menu":
      IconComponent = DotsThreeVertical;
      break;
    case "search":
      IconComponent = ListMagnifyingGlass;
      break;
    case "admin":
      IconComponent = Key;
      break;
    case "members":
      IconComponent = UsersThree;
      break;
    case "groups":
      IconComponent = SquaresFour;
      break;

    default:
      IconComponent = Question;
      break;
  }

  return (
    <AccessibleIcon label={type}>
      <IconComponent size={size} />
    </AccessibleIcon>
  );
};
