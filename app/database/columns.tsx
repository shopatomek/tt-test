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
//     ID: number;
//     Name: string;
//     Link: string;
//     Description: string;
//     Subscribers: number;
//     Stats: string;
//     Tags: string;
//     Likes: number;
// }

export const columns: ColumnDef<Data>[] = [
  {
    id: "select",
    header: ({ table }) => {
      return (
        <Checkbox
          checked={table.getIsAllPageRowsSelected()}
          onCheckedChange={(value) => {
            table.toggleAllPageRowsSelected(!!value);
          }}
        />
      );
    },
    cell: ({ row }) => {
      return (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => {
            row.toggleSelected(!!value);
          }}
        />
      );
    },
    enableSorting: false,
    enableHiding: false,
  },

  // double '!!' to make it a boolean, some shortcut.

  {
    header: ({ column }) => {
      return (
        <button
          className="flex"
          onClick={() => {
            column.toggleSorting(column.getIsSorted() === "asc");
          }}
        >
          ID
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </button>
      );
    },
    accessorKey: "ID",
  },
  {
    header: "Name",
    accessorKey: "Name",
  },
  {
    header: "Link",
    accessorKey: "Link",
  },
  {
    header: "Description",
    accessorKey: "Description",
  },
  {
    header: ({ column }) => {
      return (
        <button
          className="flex"
          onClick={() => {
            column.toggleSorting(column.getIsSorted() === "asc");
          }}
        >
          Subscribers
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </button>
      );
    },
    accessorKey: "Subscribers",
  },
  {
    header: "Stats",
    accessorKey: "Stats",
    cell: ({ row }) => {
      const stats = row.getValue("Stats");
      const formatted = new Date(stats as string).toLocaleDateString();
      return <div>{formatted}</div>;
    },
  },
  {
    header: "Tags",
    accessorKey: "Tags",
  },
  {
    header: ({ column }) => {
      return (
        <button
          className="flex"
          onClick={() => {
            column.toggleSorting(column.getIsSorted() === "asc");
          }}
        >
          Likes
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </button>
      );
    },
    accessorKey: "Likes",
  },
  {
    id: "Actions",
    cell: ({ row }) => {
      const data = row.original;
      const dataName = data.Name;
      const dataLink = data.Link;
      const dataTags = data.Tags;
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="w-8 h-6 p-0">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel className="text-center">
              Actions
            </DropdownMenuLabel>
            <hr />
            <br />
            <hr />
            <DropdownMenuItem
              className="cursor-pointer"
              onClick={() => {
                navigator.clipboard.writeText(dataName);
              }}
            >
              Copy User name
            </DropdownMenuItem>
            <hr />
            <DropdownMenuItem
              className="cursor-pointer"
              onClick={() => {
                navigator.clipboard.writeText(dataLink);
              }}
            >
              Copy Link
            </DropdownMenuItem>
            <hr />
            <DropdownMenuItem
              className="cursor-pointer"
              onClick={() => {
                navigator.clipboard.writeText(dataTags);
              }}
            >
              Copy Tags
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

// możliwosci biblioteki react_table

// custom cell formating. przykład wyświetlenia czasu zgodnie z formatem
// w właściwścuach cell można definiować style, i przekazywać funkcje

// // cell:({row}) => {
//     const stats = row.getValue("Stats")
//     const formatted = new Date(stats as string).toLocaleDateString()
//     return (
//      <div>{formatted}</div>
//     )
//  }
// },

// // Ten kod definiuje tablicę columns, która jest używana do konfiguracji kolumn w tabeli. Tabela ta jest tworzona przy użyciu biblioteki @tanstack/react-table.

// W tym kodzie, importowane są dwa moduły:

// Data z @/lib/data: To jest interfejs lub typ, który zawiera strukturę danych dla tabeli. Wygląda na to, że został już zdefiniowany w innym miejscu i jest importowany w tym module.

// ColumnDef z @tanstack/react-table: To jest interfejs lub typ, który definiuje strukturę kolumny w tabeli. Ten typ jest używany do określenia konfiguracji każdej kolumny w tablicy columns.

// Następnie, jest zdefiniowana zmienna columns, która jest tablicą obiektów typu ColumnDef<Data>. Każdy obiekt w tablicy reprezentuje konfigurację pojedynczej kolumny w tabeli. Dla każdej kolumny, określone są właściwości header (nagłówek kolumny wyświetlany w tabeli) i accessorKey (klucz dostępu do danych w obiekcie Data).

// Każda kolumna w tabeli odpowiada jednemu polu zdefiniowanemu w interfejsie Data. Dzięki temu, dane z obiektów typu Data będą wyświetlane w odpowiednich kolumnach tabeli.
