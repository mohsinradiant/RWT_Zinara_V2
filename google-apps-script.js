// Google Apps Script for Video Trial Form
// Deploy this as a web app and replace YOUR_GOOGLE_APPS_SCRIPT_ID in the theme.liquid file

function doPost(e) {
  try {
    // Parse the incoming JSON data
    const data = JSON.parse(e.postData.contents);
    
    // Get the active spreadsheet (replace with your actual Google Sheet ID)
    const spreadsheetId = 'YOUR_GOOGLE_SHEET_ID'; // Replace with your actual sheet ID
    const sheet = SpreadsheetApp.openById(spreadsheetId).getActiveSheet();
    
    // Prepare the row data
    const rowData = [
      new Date(), // Timestamp
      data.name,
      data.mobile,
      data.pincode,
      data.pincodeAvailable,
      data.productHandle,
      data.timestamp
    ];
    
    // Append the data to the sheet
    sheet.appendRow(rowData);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({ 'status': 'success' }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({ 'status': 'error', 'message': error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput('Video Trial Form Handler is running')
    .setMimeType(ContentService.MimeType.TEXT);
} 