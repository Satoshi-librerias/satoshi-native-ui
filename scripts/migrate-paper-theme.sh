#!/usr/bin/env bash
# Reemplaza el patron de consumo del tema en los componentes migrados a
# react-native-paper: theme (AppTheme) -> paperTheme (MD3Theme).
set -u
cd /d/satoshi/satoshi-native-ui/projects/satoshi-native-ui/src/components/atoms

FILES="alert/components/alert.tsx avatar/components/avatar.tsx badge/components/badge.tsx button/components/button.tsx card/components/card.tsx checkbox/components/checkbox.tsx divider/components/divider.tsx input/components/input.tsx progress/components/progress.tsx radio/components/radio.tsx spinner/components/spinner.tsx switch/components/switch.tsx textarea/components/textarea.tsx tooltip/components/tooltip.tsx"

for f in $FILES; do
  sed -i 's/const { theme } = useTheme();/const { paperTheme: theme } = useTheme();/' "$f"
  sed -i 's/theme={theme}/theme={theme}/g' "$f"
done

echo "DONE"
grep -c 'paperTheme: theme' alert/components/alert.tsx
