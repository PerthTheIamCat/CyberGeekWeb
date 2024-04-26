import React from "react";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";

export default function Home() {
  return (
    <div className="flex h-[100vh]">
      <Button color="primary">
        Button
      </Button>
      <Input type="name" label="Name" placeholder="ใส่่ชื่อมาอีสัส" />
    </div>
  );
}
