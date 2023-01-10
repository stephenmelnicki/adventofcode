type NodeType = "directory" | "file";

class Node {
  parent: Node | undefined;
  children: Node[] = [];

  name: string;
  private _size: number | undefined;

  constructor(
    name: string,
    size = undefined,
    parent: Node | undefined = undefined,
    children: Node[] = [],
  ) {
    this.parent = parent;
    this.children = children;
    this.name = name;
    this._size = size;
  }

  get type(): NodeType {
    if (this.children.length === 0) {
      return "directory";
    }

    return "file";
  }

  get description(): string {
    if (this.type === "file") {
      return `- ${this.name} (${this.type}, size=${this.size})`;
    }

    const description = `- ${this.name} (${this.type})\n\t`;
    return this.children.reduce((contents, child) => {
      return contents.concat(`\n\t${child.description}`);
    }, description);
  }

  get size(): number {
    if (this.children.length === 0 && this._size) {
      return this._size;
    }

    return this.children.reduce((total, child) => {
      return total + child.size;
    }, 0);
  }
}

class Tree {
  private head: Node | undefined = undefined;
  private cursor: Node | undefined = undefined;

  get size(): number {
    return this.head?.size || 0;
  }

  navigateToRoot(): void {
    this.cursor = this.head;
  }

  navigateUpOneLevel(): void {
    if (this.cursor?.parent !== undefined) {
      this.cursor = this.cursor?.parent;
    } else {
      this.navigateToRoot();
    }
  }

  navigateToDirectory(name: string): void {
    if (this.cursor?.children.length === 0) {
      return;
    }

    this.cursor = this.cursor?.children.find((node) => node.name === name);
  }
}

enum Commands {
  list,
  root,
  upOneLevel,
  changeDirectory,
}

export function isCommand(line: string): boolean {
  return line.startsWith("$ ");
}

export function isList(line: string): boolean {
  return isCommand(line) && line.slice(2, -1) === "ls";
}

export function isMoveOutermost(line: string): boolean {
  return isCommand(line) && line.slice(2, -1) === "cd /";
}

export function isMoveOneLevelUp(line: string): boolean {
  return isCommand(line) && line.slice(2, -1) === "cd ..";
}

export function isChangeDirectory(line: string): boolean {
  return isCommand(line) && !isMoveOutermost(line) && !isMoveOneLevelUp(line);
}
