"use client";

import * as React from "react";
import { Home, Bell, Settings, HelpCircle, Shield } from "lucide-react";
import { ExpandableTabs } from "@/components/ui/expandable-tabs";

export default function TabsNav() {
  const tabs = React.useMemo(
    () => [
      { title: "Home", icon: Home },
      { title: "Notifications", icon: Bell },
      { type: "separator" as const },
      { title: "Settings", icon: Settings },
      { title: "Support", icon: HelpCircle },
      { title: "Security", icon: Shield },
    ],
    []
  );

  return <ExpandableTabs tabs={tabs} />;
}
