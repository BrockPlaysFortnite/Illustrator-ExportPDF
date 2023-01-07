#target illustrator

// Created with the help of ChatGPT, a monumental marvel of human ingenuity. 
// In order to use, just save the file in your Illustrator scripts folder. 
// Usually in 'C:\Program Files\Adobe\Adobe Illustrator 2023\Presets\en_US\Scripts'
// You can create an 'action' to automatically run the script with a hotkey. 

// Get the user's desktop folder
var desktopFolder = Folder.desktop;

// Set the options for the PDF export
var pdfOptions = new PDFSaveOptions();
pdfOptions.compatibility = PDFCompatibility.ACROBAT5;

// Get the name of the Illustrator file
var docName = app.activeDocument.name;

// Set the target file using the original file name
var targetFile = new File(desktopFolder + "/" + docName);

// Check if a file with the same name already exists on the desktop
if (targetFile.exists) {
  // If the file exists, add a number in parentheses to the end of the file name
  var index = 1;
  while (targetFile.exists) {
    targetFile = new File(desktopFolder + "/" + docName.replace(/\.ai$/, "").replace(/\.pdf$/, "").replace(/\s\(\d+\)$/, "") + " (" + index + ").pdf");
    index++;
  }
}

// Save the PDF to the desktop
app.activeDocument.saveAs(targetFile, pdfOptions);
