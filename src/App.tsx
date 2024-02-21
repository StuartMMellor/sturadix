import { useState } from "react";
import "@radix-ui/themes/styles.css";
import {
  Grid,
  Theme,
  Box,
  Text,
  ThemeOptions,
  Heading,
  Container,
  Button,
  Flex,
} from "@radix-ui/themes";
import * as Switch from "@radix-ui/react-switch";

type AppThemeType = {
  name: string;
  options: Partial<ThemeOptions>;
  boxTW?: string;
};

const App = () => {
  const themeA: AppThemeType = {
    name: "A",
    options: {
      accentColor: "iris",
      grayColor: "gray",
      panelBackground: "solid",
      scaling: "90%",
      radius: "large",
    },
    boxTW: "rounded-lg bg-white p-4",
  };

  const themeB: AppThemeType = {
    name: "B",
    options: {
      accentColor: "mint",
      grayColor: "gray",
      panelBackground: "solid",
      scaling: "100%",
      radius: "full",
    },
    boxTW: "rounded-md bg-white p-4",
  };

  const [selectedTheme, setSelectedTheme] = useState<AppThemeType>(themeA);

  console.log("Selected theme: ", selectedTheme);
  console.log("Selected theme boxTW: ", selectedTheme.boxTW);

  return (
    <Box style={{ height: "100%" }}>
      <Theme {...selectedTheme.options}>
        <Container size="1" style={{ background: "var(--gray-a2)" }}>
          <Flex gap="3" direction="column" p="7">
            <Box className={selectedTheme?.boxTW}>
              <Flex gap="3" direction="column" p="7">
                <Heading>A Heading</Heading>
                <Text>This is a demo for dynamic theming...</Text>
                <label
                  className="Label"
                  htmlFor="airplane-mode"
                  style={{ paddingRight: 15 }}
                >
                  Airplane mode
                </label>
                <Switch.Root
                  onCheckedChange={() => {
                    setSelectedTheme(
                      selectedTheme.name === "A" ? themeB : themeA
                    );
                  }}
                  className="SwitchRoot"
                  id="airplane-mode"
                >
                  <Switch.Thumb className="SwitchThumb" />
                </Switch.Root>
                <Button
                  onClick={() =>
                    setSelectedTheme(
                      selectedTheme.name === "A" ? themeB : themeA
                    )
                  }
                >
                  Hey
                </Button>
              </Flex>
            </Box>
          </Flex>
        </Container>
      </Theme>
    </Box>
  );
};

export default App;
