import { Typography } from "react-native-ui-lib";
import { useIsTablet } from "../hooks/useIsTablet";
import { scaleReturner } from "./styles";

export const useTypographies = () => {
  const isTablet = useIsTablet();

  Typography.loadTypographies({
    h1M: {
      fontFamily: "Inter-Medium",
      fontSize: isTablet ? 36 : scaleReturner(36),
    },
    h2M: {
      fontFamily: "Inter-Medium",
      fontSize: isTablet ? 32 : scaleReturner(32),
    },
    h3M: {
      fontFamily: "Inter-Medium",
      fontSize: isTablet ? 28 : scaleReturner(28),
    },
    h4M: {
      fontFamily: "Inter-Medium",
      fontSize: isTablet ? 24 : scaleReturner(24),
    },
    h5M: {
      fontFamily: "Inter-Medium",
      fontSize: isTablet ? 22 : scaleReturner(22),
    },
    h6M: {
      fontFamily: "Inter-Medium",
      fontSize: isTablet ? 18 : scaleReturner(18),
    },
    h7M: {
      fontFamily: "Inter-Medium",
      fontSize: isTablet ? 16 : scaleReturner(16),
    },
    h8M: {
      fontFamily: "Inter-Medium",
      fontSize: isTablet ? 14 : scaleReturner(14),
    },
    h9M: {
      fontFamily: "Inter-Medium",
      fontSize: isTablet ? 12 : scaleReturner(12),
    },
    h10M: {
      fontFamily: "Inter-SemiBold",
      fontSize: isTablet ? 10 : scaleReturner(10),
    },
    h11M: {
      fontFamily: "Inter-SemiBold",
      fontSize: isTablet ? 8 : scaleReturner(8),
    },
    h1SB: {
      fontFamily: "Inter-SemiBold",
      fontSize: isTablet ? 36 : scaleReturner(36),
    },
    h2SB: {
      fontFamily: "Inter-SemiBold",
      fontSize: isTablet ? 32 : scaleReturner(32),
    },
    h3SB: {
      fontFamily: "Inter-SemiBold",
      fontSize: isTablet ? 28 : scaleReturner(28),
    },
    h4SB: {
      fontFamily: "Inter-SemiBold",
      fontSize: isTablet ? 24 : scaleReturner(24),
    },
    h5SB: {
      fontFamily: "Inter-SemiBold",
      fontSize: isTablet ? 22 : scaleReturner(22),
    },
    h6SB: {
      fontFamily: "Inter-SemiBold",
      fontSize: isTablet ? 18 : scaleReturner(18),
    },
    h7SB: {
      fontFamily: "Inter-SemiBold",
      fontSize: isTablet ? 16 : scaleReturner(16),
    },
    h8SB: {
      fontFamily: "Inter-SemiBold",
      fontSize: isTablet ? 14 : scaleReturner(14),
    },
    h9SB: {
      fontFamily: "Inter-SemiBold",
      fontSize: isTablet ? 12 : scaleReturner(12),
    },
    h10SB: {
      fontFamily: "Inter-SemiBold",
      fontSize: isTablet ? 10 : scaleReturner(10),
    },
    h1R: {
      fontFamily: "Inter-Regular",
      fontSize: isTablet ? 36 : scaleReturner(36),
    },
    h2R: {
      fontFamily: "Inter-Regular",
      fontSize: isTablet ? 32 : scaleReturner(32),
    },
    h3R: {
      fontFamily: "Inter-Regular",
      fontSize: isTablet ? 28 : scaleReturner(28),
    },
    h4R: {
      fontFamily: "Inter-Regular",
      fontSize: isTablet ? 24 : scaleReturner(24),
    },
    h5R: {
      fontFamily: "Inter-Regular",
      fontSize: isTablet ? 22 : scaleReturner(22),
    },
    h6R: {
      fontFamily: "Inter-Regular",
      fontSize: isTablet ? 18 : scaleReturner(18),
    },
    h7R: {
      fontFamily: "Inter-Regular",
      fontSize: isTablet ? 16 : scaleReturner(16),
    },
    h8R: {
      fontFamily: "Inter-Regular",
      fontSize: isTablet ? 14 : scaleReturner(14),
    },
    h9R: {
      fontFamily: "Inter-Regular",
      fontSize: isTablet ? 12 : scaleReturner(12),
    },
    h10R: {
      fontFamily: "Inter-Regular",
      fontSize: isTablet ? 10 : scaleReturner(10),
    },
  });
};
