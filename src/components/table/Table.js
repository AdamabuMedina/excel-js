import { ExcelComponent } from "../../core/ExcelComponent";
import { shouldResize } from "./table.fucntions";
import { resizeHandler } from "./table.resize";
import { createTable } from "./table.template";

export class Table extends ExcelComponent {
  static className = "excel__table";

  constructor($root) {
    super($root, {
      name: "Table",
      listeners: ["mousedown"],
    });
  }

  toHTML() {
    return createTable(25);
  }

  onMousedown(event) {
    if (shouldResize(event)) {
      resizeHandler(this.$root, event);
    }
  }
}
