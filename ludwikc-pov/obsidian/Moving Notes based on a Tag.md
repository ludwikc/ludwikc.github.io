---
publish: "true"
tags:
  - test1
  - test2
title: Moving Obsidian Notes
---



This guide shows how to automate Obsidian to move a note to a specific location based on a tag using the Obsidian "Templater" and "Dataview" plugins, along with a bit of custom scripting. 

Here's a step-by-step guide to achieve this:

### Step 1: Install Necessary Plugins

1. **Install Templater Plugin:**
    
    - Go to Settings -> Community plugins -> Browse.
    - Search for "Templater" and install it.
    - Enable the Templater plugin.
2. **Install Dataview Plugin:**
    
    - Go to Settings -> Community plugins -> Browse.
    - Search for "Dataview" and install it.
    - Enable the Dataview plugin.

### Step 2: Create a Templater Script

Create a script in Templater to move notes based on tags. Templater allows you to run JavaScript within your templates, which you can use to automate the movement of files.

1. **Create a Template Folder:**
    
    - Go to Settings -> Templater -> Template folder location.
    - Set a folder where you want to store your templates, e.g., `Templates`.
2. **Create a Script Template:**
    
    - Create a new note in the `Templates` folder named `MoveByTag.md`.
3. **Add Script to Template:**
    
    - Open `MoveByTag.md` and add the following script:
        
        javascript
        
        Copy code
        
        ```js
<%*
const dv = this.app.plugins.plugins["dataview"].api;
const {app} = this;
const note = app.workspace.activeLeaf.view.file;
const tags = dv.page(note.path).tags;

// Define tag-to-folder mapping
const tagToFolder = {
  "#public": "public_docs",
  "#private": "private_docs",
  // Add more tag-folder mappings as needed
};

let destinationFolder = null;

// Check tags and determine destination folder
for (const tag of tags) {
  if (tagToFolder[tag]) {
    destinationFolder = tagToFolder[tag];
    break;
  }
}

if (destinationFolder) {
  const newPath = `${destinationFolder}/${note.name}.md`;
  await app.fileManager.renameFile(note, newPath);
  new Notice(`Note moved to ${newPath}`);
} else {
  new Notice("No matching tag found. Note not moved.");
}
%>


```
        

### Step 3: Run the Script

1. **Create a New Note with a Tag:**
    
    - Create a new note and add a tag from your mapping (e.g., `#public`).
2. **Run the Templater Script:**
    
    - Open the note you want to move.
    - Press `Ctrl+P` (or `Cmd+P` on Mac) to open the command palette.
    - Type and select "Templater: Run template".
    - Select `MoveByTag` from the template options.

The script will check the tags of the note and move it to the corresponding folder based on the tag-to-folder mapping defined in the script.

### Explanation

- **Templater Plugin:** Allows running custom JavaScript scripts in templates.
- **Dataview Plugin:** Used to access the metadata of the notes, such as tags.
- **Script Logic:** The script checks the tags of the active note and moves it to a predefined folder based on the tag.

This approach automates the process of moving notes to specific folders based on their tags, leveraging Obsidian's plugin ecosystem.