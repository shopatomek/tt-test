"use client";

import { Button } from "@/components/ui/button";
import { Data } from "@/lib/data";
import { ColumnDef } from "@tanstack/react-table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";

// interface Data {
//   authorId: string;
//   createTime: number;
//   diggCount: number;
//   playCount: number;
//   uniqueId: string;
//   nickname: string;
//   followerCount: number;
//   heartCount: number;
//   videoCount: number;
//   itdescription: string;
//   tags: string;
// }

export const columns: ColumnDef<Data>[] = [
  {
    header: "tiktokId",
    accessorKey: "tiktokId",
  },
  {
    header: "createTime",
    accessorKey: "createTime",
    cell: ({ row }) => {
      const createTime = row.getValue("createTime");
      const formatted = new Date(createTime as string).toLocaleDateString();
      return <div>{formatted}</div>;
    },
  },
  {
    header: "diggCount",
    accessorKey: "diggCount",
  },
  {
    header: "playCount",
    accessorKey: "playCount",
  },
  {
    header: "@uniqueId",
    accessorKey: "uniqueId",
    cell: ({ row }) => {
      const createTime = row.getValue("createTime");
      const formatted = `@${row.getValue("uniqueId")}`;
      return <div className="font-bold">{formatted}</div>;
    },
  },
  {
    header: "nickname",
    accessorKey: "nickname",
  },
  {
    header: "followerCount",
    accessorKey: "followerCount",
  },
  {
    header: "heartCount",
    accessorKey: "heartCount",
  },
  {
    header: "videoCount",
    accessorKey: "videoCount",
  },
  {
    header: "itdescription",
    accessorKey: "itdescription",
  },
  {
    header: "tags",
    accessorKey: "tags",
  },
];
