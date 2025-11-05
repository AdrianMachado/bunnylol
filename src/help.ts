import type {
  CommandNames,
  CommandDataTableType,
  ColumnDataTableType,
} from "./commands.js";

import { COMMANDS } from "./commands.js";

// Declare jQuery and DataTable types for TypeScript
declare const $: any;

export const viewHelpPage = function (): void {
  const data: Array<CommandDataTableType> = Object.keys(COMMANDS)
    .map((command: string) => command as CommandNames)
    .filter(
      (command: CommandNames): command is CommandNames => command in COMMANDS
    )
    .map((command: CommandNames) => {
      const cmdData = COMMANDS[command];
      if (!cmdData) {
        throw new Error(`Command ${command} not found`);
      }
      return {
        name: cmdData.name,
        url: cmdData.url,
        command: command,
      };
    });
  const columns: Array<ColumnDataTableType> = [
    { data: "command", title: "Command" },
    { data: "name", title: "Name" },
    { data: "url", title: "URL" },
  ];
  $("#help-table").DataTable({
    data: data,
    columns: columns,
    order: [[1, "asc"]],
    paging: false,
  });
};
