## Tooltip

### Props

| Name             | Description                                                                                | Type            | Default                                                                               | Required |
| ---------------- | ------------------------------------------------------------------------------------------ | --------------- | ------------------------------------------------------------------------------------- | -------- |
| trigger          | Tooltip trigger mode. ( hover / click )                                                    | string          | hover                                                                                 | false    |
| content          | Tooltip content                                                                            | string or Array | ''                                                                                    | true     |
| isGroup          | Show the tooltip as a group                                                                | boolean         | false                                                                                 | false    |
| groupLabel       | Tooltip group data node key                                                                | object          | { iconName: "none",parentName: "name",childrenNode: "children",childrenName: "name" } | true     |
| tooltipContainer | The DOM container of the tip. The default behavior is to create a div element in the body. | node            | null                                                                                  | false    |

## Usage

```javascript
import React from "react";
import { Tooltip } from "@sfx/react-ui";
const content = [
  {
    roles: [
      { name: "AccountAdministrator" },
      { name: "AccountAdministrator" },
      { name: "AccountAdministrator" },
      { name: "AccountAdministrator" },
      { name: "AccountAdministrator" }
    ],
    imageUrl:
      "https://devmiussfp.blob.core.windows.net/adminsite/solution/00000000-0000-0000-0000-000000000000/94ec0e54-f5b0-44fc-bfb6-ae72785c4fc2",
    name: "Hexagon | SFx Asset Management"
  },
  {
    roles: [
      { name: "AccountAdministrator" },
      { name: "AccountAdministrator" },
      { name: "AccountAdministrator" },
      { name: "AccountAdministrator" },
      { name: "AccountAdministrator" }
    ],
    imageUrl:
      "https://devmiussfp.blob.core.windows.net/adminsite/solution/00000000-0000-0000-0000-000000000000/94ec0e54-f5b0-44fc-bfb6-ae72785c4fc2",
    name: "HxGN SFx | Asset Management"
  }
];
const contentHover = [
  {
    roles: [{ name: "AccountAdministrator" }, { name: "AccountAdministrator" }],
    imageUrl:
      "https://devmiussfp.blob.core.windows.net/adminsite/solution/00000000-0000-0000-0000-000000000000/94ec0e54-f5b0-44fc-bfb6-ae72785c4fc2",
    name: "Hexagon | SFx Asset Management"
  }
];
export default () => {
  return (
    <div
      style={{
        position: "relative",
        paddingTop: "80px",
        height: "100vh"
      }}
    >
      <div>
        <p>
          Somewhere in here is a
          <Tooltip content="Hello world">
            <span
              style={{
                textDecoration: "underline",
                color: "blue",
                paddingLeft: "10px"
              }}
            >
              tooltip
            </span>
          </Tooltip>
          .
        </p>
        <p>
          click to show tooltip group
          <Tooltip
            content={content}
            isGroup
            trigger="click"
            groupLabel={{
              iconName: "imageUrl",
              parentName: "name",
              childrenNode: "roles",
              childrenName: "name"
            }}
          >
            <span
              style={{
                textDecoration: "underline",
                color: "blue",
                paddingLeft: "10px"
              }}
            >
              AssetAdministrator
            </span>
          </Tooltip>
        </p>
        <p>
          hover to show tooltip group
          <Tooltip
            content={contentHover}
            isGroup
            groupLabel={{
              iconName: "imageUrl",
              parentName: "name",
              childrenNode: "roles",
              childrenName: "name"
            }}
          >
            <span
              style={{
                textDecoration: "underline",
                color: "blue",
                paddingLeft: "10px"
              }}
            >
              SFxAssetSimulator
            </span>
          </Tooltip>
        </p>
      </div>
    </div>
  );
};
```
