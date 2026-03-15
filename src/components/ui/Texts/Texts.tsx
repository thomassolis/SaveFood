import React from "react";
import { Text, TextProps } from "react-native";

type Variant = "title" | "paragraph" | "caption";

interface TypographyProps extends TextProps {
  children: React.ReactNode;
  variant?: Variant;
}

export function Typography({ children, variant = "paragraph", style, ...rest }: TypographyProps) {
  const base = { color: "white" as const };

  const variants = {
    title: { fontSize: 20, fontWeight: "700" as const },
    paragraph: { fontSize: 16, fontWeight: "400" as const },
    caption: { fontSize: 12, fontWeight: "400" as const, opacity: 0.8 },
  };

  return (
    <Text style={[base, variants[variant], style]} {...rest}>
      {children}
    </Text>
  );
}