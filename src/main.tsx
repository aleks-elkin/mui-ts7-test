import { StrictMode, type ElementType, type CSSProperties } from "react";
import { createRoot } from "react-dom/client";
import { List, ListItem, ListItemText } from "@mui/material";

declare module "@mui/material/Typography" {
  interface TypographyOwnProps {
    component?: ElementType; // <-- this triggers the issue?
  }
}

declare module "@mui/material/ListItemText" {
  interface ListItemTextProps {
    slotProps?: {
      primary?: {
        variant?: string;
        style?: CSSProperties;
      };
    };
  }
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <List>
      <ListItem>
        <ListItemText
          primary="Primary"
          slotProps={{
            primary: { variant: "h6", style: { color: "red" } },
          }}
        />
      </ListItem>
    </List>
  </StrictMode>,
);
