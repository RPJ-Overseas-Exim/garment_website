"use client";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { ControllerRenderProps } from "react-hook-form";

import { FiEyeOff } from "react-icons/fi";
import { FiEye } from "react-icons/fi";

export default function PasswordInput<T>({ field }: { field: T }) {
  const [eye, setEye] = useState(false);

  const handleEye = () => {
    setEye(!eye);
  };
  return (
    <div className="form-input">
      <Input
        placeholder="Enter password."
        {...field}
        type={eye ? "text" : "password"}
      />

      <button type="button" className="eyeIcon" onClick={handleEye}>
        {/* Image */}
        {eye ? <FiEye /> : <FiEyeOff />}
      </button>
    </div>
  );
}
