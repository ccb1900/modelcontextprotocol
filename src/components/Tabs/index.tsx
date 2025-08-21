"use client";

import {
  TabGroup,
  TabList,
  Tab as HeadlessTab,
  TabPanels,
  TabPanel,
} from "@headlessui/react";
import { Children } from "react";

// Tabs 容器
export default function Tabs({ children }) {
  const tabs = Children.toArray(children);

  return (
    <TabGroup>
      {/* Tab 标题 */}
      <TabList className="flex space-x-2 border-b">
        {tabs.map((tab, idx) => (
          <HeadlessTab
            key={idx}
            className={({ selected }) =>
              `px-4 py-2 text-sm font-medium ${
                selected
                  ? "border-b-2 border-blue-500 text-blue-600"
                  : "text-gray-500 hover:text-gray-700"
              }`
            }
          >
            {tab.props.title}
          </HeadlessTab>
        ))}
      </TabList>

      {/* Tab 面板内容 */}
      <TabPanels className="mt-4">
        {tabs.map((tab, idx) => (
          <TabPanel key={idx}>{tab.props.children}</TabPanel>
        ))}
      </TabPanels>
    </TabGroup>
  );
}

